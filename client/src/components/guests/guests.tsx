import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TablePagination, IconButton, Stack, Grid } from '@mui/material';
import Header from '../componentsHeader/header';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ExcelUploader from './uploadExcel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { TextField, InputAdornment } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteUserModal from './deleteUserModal';
import EditUserModal from './editUserModal';
import AddIcon from '@mui/icons-material/Add';
import { Guest } from '../../interfaces/guest.interface';
import { SearchTextField, StyledButton, StyledStatusTag, TableWrapper } from './styledComponents';

type GuestListProps = {
  guests: Guest[];
  rowsPerPage?: number;
};


const GuestList: React.FC<GuestListProps> = ({ guests, rowsPerPage = 13 }) => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [activeGuest, setActiveGuest] = useState<Guest | undefined>();
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState<boolean>(false);
  const [openEditUserModal, setOpenEditUserModal] = useState<boolean>(false);
  
  const handleClearSearch = () => {
    setQuery('');
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  
  const stringToColor = (string: string) => {
    let hash = 0;
    let i;
    let chr;
    for (i = 0; i < string.length; i++) {
      chr = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return `#${(hash & 0xffffff).toString(16).padStart(6, '0')}`;
  };

  const searchByName = (query: string) => {
    const filteredGuests = guests.filter(guest =>
      guest.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredGuests;
  };

  const onDeleteGuest = (guest:Guest)=>{
    setActiveGuest(guest)
    setOpenDeleteUserModal(true)
  }
  
  const onCloseDeleteGuest = ()=>{
    setActiveGuest(undefined)
    setOpenDeleteUserModal(false)
  }
  
  const onEditGuest = (guest:Guest)=>{
    setActiveGuest(guest)
    setOpenEditUserModal(true)
  }

  const onCloseEditGuest = ()=>{
    setActiveGuest(undefined)
    setOpenEditUserModal(false)
  }


  
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const filteredGuests = searchByName(query);
  const slicedGuests = filteredGuests.slice(startIndex, endIndex);

  return (
    <>
      <Header name='Guests' Component={<ExcelUploader onUpload={()=>{}} />} />

      <TableWrapper>
        <Grid justifyContent={'space-between'} display={'flex'} width={'100%'}>
        <SearchTextField label="Search by name" variant="outlined" InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={handleClearSearch}>
                <ClearIcon />
                </IconButton>
            </InputAdornment>
            )
        }}onChange={handleSearch} value={query} />
        <StyledButton onClick={ ()=> setOpenEditUserModal(true)}>
            <AddIcon />
            Add Guest
        </StyledButton>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Side</TableCell>
                <TableCell>Mobile number</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedGuests.map((guest) => (
                <TableRow key={guest.id} sx={{'&:hover': { backgroundColor: '#f2f2f2'}}}>
                  <TableCell sx={{display:'flex'}}>
                    <Avatar sx={{mr:2, bgcolor: stringToColor(guest.name)}}>{<PersonIcon />}</Avatar>
                      {guest.name}
                  </TableCell>
                  <TableCell >
                    {guest.side}
                  </TableCell>
                  <TableCell>{guest.mobileNumber}</TableCell>
                  <TableCell>
                    <StyledStatusTag status={guest.attendingStatus}>{guest.attendingStatus}</StyledStatusTag>
                  </TableCell>
                  <TableCell >
                    <IconButton size="small" title='send an email' color='success' onClick={() => console.log(`Edit guest ${guest.id}`)}>
                      <EmailIcon color='inherit' />
                    </IconButton>
                    <IconButton size="small" title='send phone message' color='primary' onClick={() => console.log(`Edit guest ${guest.id}`)}>
                      <ChatBubbleIcon color="inherit" />
                    </IconButton>
                  </TableCell>
                  <IconButton size="small" color='secondary' onClick={()=>{onEditGuest(guest)}}>
                      <EditIcon color="inherit" />
                    </IconButton>
                    <IconButton size="small" onClick={()=>{onDeleteGuest(guest)}}>
                      <DeleteIcon color="error"/>
                    </IconButton>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={guests.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[]}
          sx={{
            justifyContent: 'space-between',
            '& .MuiTablePagination-caption': {
              fontSize: '14px',
              fontWeight: 'bold',
            },
            '& .MuiTablePagination-select': {
              fontSize: '14px',
              fontWeight: 'bold',
              marginRight: '16px',
            },
            '& .MuiPaginationItem-root': {
              fontSize: '14px',
              fontWeight: 'bold',
            },
            '& .Mui-selected': {
              backgroundColor: '#00897b',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#00695c',
              },
            },
          }}
        />
        <DeleteUserModal name={activeGuest?.name} openModal={openDeleteUserModal} handleClose={onCloseDeleteGuest} handleSubmit={()=>{}}  />
        <EditUserModal key={activeGuest?.id} guest={activeGuest} openModal={openEditUserModal} handleClose={onCloseEditGuest} />
      </TableWrapper>
    </>
  );
};

export default GuestList;

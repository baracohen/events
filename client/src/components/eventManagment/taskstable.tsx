import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Modal,
  Chip,
  Typography,
  SelectChangeEvent,
  MenuItemProps,
  Grid,
  Button
} from '@mui/material';
import ClearIcon from '@material-ui/icons/Clear';
import { DatePicker } from '@mui/lab';
import { styled as muiStyled } from '@mui/material/styles';
import { Search as SearchIcon } from '@mui/icons-material';
import AddTaskModal from './addTaskModal';

const Container = styled.div`
  padding: 24px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  transition: all 0.3s ease-in-out;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-right: 16px;
  }
`;

const StyledFormControl = styled(FormControl)`
  && {
    margin-right: 16px;
    min-width: 120px;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  && {
    margin-right: 16px;
  }
`;

const AddTaskButton = styled.button`
    background-color: #1976d2;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #135ba1;
    }
    `;

const StyledModal = muiStyled(Modal)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.8)',
    '& .modal-content': {
      background: '#fff',
      padding: theme.spacing(12),
      maxWidth: 500,
      textAlign: 'center',
      position: 'relative',
      '& h2': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        '& svg': {
          marginRight: theme.spacing(1),
        },
      },
      '& .modal-close': {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(0),
        color: "black"
      },
    },
  }));

type Task = {
  id: number;
  title: string;
  assignTo: string;
  status: string;
  priority: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
};

type Props = {
  tasks: Task[];
};

const TaskTable: React.FC<Props> = ({ tasks }) => {
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState<MenuItemProps['value']>('All');
  const [filterPriority, setFilterPriority] = useState<MenuItemProps['value']>('All');
  const [filterStartDate, setFilterStartDate] = useState<Date | null>(null);
  const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  
  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  
  const handleFilterStatusChange = (event: SelectChangeEvent<MenuItemProps['value']>) => {
    setFilterStatus(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handleFilterPriorityChange = (event: SelectChangeEvent<MenuItemProps['value']>) => {
    setFilterPriority(event.target.value);
  };

  const handleFilterStartDateChange = (date: Date | null) => {
    setFilterStartDate(date);
  };
  
  const handleOpen = (task: Task) => {
    setSelectedTask(task);
    setOpen(true);
    };

    const ModalContent = () => {
        return (
        <StyledModal open={open} onClose={() => setOpen(false)}>
          <div className="modal-content">
                <Grid sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant='h4'>{selectedTask?.title}</Typography>
                    <Chip label={selectedTask?.priority} variant='filled' color={selectedTask?.priority === 'Medium' ? 'secondary' : selectedTask?.priority === 'High' ? 'error' : 'info'} />
                </Grid>
                <Typography>Assign To: {selectedTask?.assignTo}</Typography>
                <Typography>Status: {selectedTask?.status}</Typography>
                <Typography>Description: {selectedTask?.description}</Typography>
                <Button className="modal-close" onClick={handleClose}>
                <ClearIcon />
                </Button>
            </div>
          </StyledModal>
        );
    };

    const handleClose = () => {
        setSelectedTask(null);
        setOpen(false);
    };

  const handleFilterEndDateChange = (date: Date | null) => {
    setFilterEndDate(date);
  };

  const filteredTasks = tasks.filter((task) => {
    let statusMatch = true;
    let priorityMatch = true;
    let startDateMatch = true;
    let endDateMatch = true;

    if (filterStatus !== 'All') {
      statusMatch = task.status === filterStatus;
    }

    if (filterPriority !== 'All') {
      priorityMatch = task.priority === filterPriority;
    }

    if (filterStartDate) {
      startDateMatch = task.startDate ? task.startDate >= filterStartDate : false;
    }

    if (filterEndDate) {
      endDateMatch = task.endDate ? task.endDate <= filterEndDate : false;
    }

    return statusMatch && priorityMatch && startDateMatch && endDateMatch && (
      searchText === '' ||
      task.title.toLowerCase().includes(searchText.toLowerCase()) ||
      task.assignTo.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <Container>
      <FilterContainer>
      <StyledTextField
        variant="outlined"
        label="Search"
        value={searchText}
        onChange={handleSearchTextChange}
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={handleClearSearch}>
                <ClearIcon />
                </IconButton>
            </InputAdornment>
            )
        }}
        />
        <StyledFormControl variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            value={filterStatus}
            onChange={handleFilterStatusChange}
            label="Status"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
            <MenuItem value="Open">Open</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl variant="outlined">
          <InputLabel>Priority</InputLabel>
          <Select
            value={filterPriority}
            onChange={handleFilterPriorityChange}
            label="Priority"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledDatePicker
          label="Start Date"
          value={filterStartDate}
          onChange={handleFilterStartDateChange}
          inputVariant="outlined"
          format="MM/dd/yyyy"
          placeholder="MM/DD/YYYY"
          clearText="Clear"
          cancelText="Cancel"
        />
        <StyledDatePicker
          label="End Date"
          value={filterEndDate}
          onChange={handleFilterEndDateChange}
          inputVariant="outlined"
          format="MM/dd/yyyy"
          placeholder="MM/DD/YYYY"
          clearText="Clear"
          cancelText="Cancel"
        />
        <AddTaskButton onClick={()=>{setOpenAddTaskModal(true)}}>Add Task</AddTaskButton>

      </FilterContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Assign To</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id} onClick={() => handleOpen(task)}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.assignTo}</TableCell>
                <TableCell>
                  <Chip label={task.status} variant='filled' color={task.status === 'In Progress' ? 'warning' : task.status === 'Done' ? 'success' : 'primary'} />
                </TableCell>
                <TableCell>
                  <Chip label={task.priority} variant='filled' color={task.priority === 'Medium' ? 'secondary' : task.priority === 'High' ? 'error' : 'info'} />
                </TableCell>
                <TableCell sx={{maxWidth:'20px'}}>{task.description}</TableCell>
                <TableCell>
                    <DatePicker
                      label="Start Date"
                      value={task.startDate}
                      inputVariant="outlined"
                      format="MM/dd/yyyy"
                      placeholder="MM/DD/YYYY"
                      clearText="Clear"
                      cancelText="Cancel"
                    />
                </TableCell>
                <TableCell>
                  {task.endDate && (
                    <DatePicker
                      label="End Date"
                      value={new Date()}
                      inputVariant="outlined"
                      format="MM/dd/yyyy"
                      placeholder="MM/DD/YYYY"
                      clearText="Clear"
                      cancelText="Cancel"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
            {filteredTasks.length !== tasks.length && (
            <Typography >Showing {filteredTasks.length} of {tasks.length} results</Typography>
            )}
        </TableBody>

        </Table>
      </TableContainer>
      <ModalContent />
      <AddTaskModal openModal={openAddTaskModal} handleClose={()=>{setOpenAddTaskModal(false)}}  />
    </Container>
  )}

  export default TaskTable
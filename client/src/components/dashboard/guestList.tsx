import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, Chip, Typography, Button } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useNavigate } from "react-router-dom";

interface GuestListProps {
  guests: Guest[];
}

const GuestListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #ffffff;
`;

const GuestListBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GuestListBox = styled.a`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const GuestListBoxName = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;

const GuestListHeader = styled.h2`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
`;

const GuestListBoxNumber = styled.p`
  font-size: 14px;
  color: #bfbfbf;
  margin-right: 16px;
`;

type Guest = {
  id: number;
  name: string;
  mobileNumber: string;
  status: string;
};

const GuestList: React.FC<GuestListProps> = ({guests}) => {
  const navigate = useNavigate();

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

  const renderGuest = (guest: Guest)=>{
    return(
      <GuestListBox href="#">
        <Avatar sx={{mr:2, bgcolor: stringToColor(guest.name)}}>{<PersonIcon />}</Avatar>
        <Grid sx={{display:'block'}} container>
          <GuestListBoxName>{guest.name}</GuestListBoxName>
          <Grid  sx={{ display: 'flex', alignItems:'center' }}>
            <GuestListBoxNumber>{guest.mobileNumber}</GuestListBoxNumber>
            <Chip size='small' color={guest.status === 'Attending' ? 'success' : guest.status === 'Maybe' ? 'warning' : 'error'} label={guest.status}></Chip>
          </Grid>
        </Grid>
      </GuestListBox>
    )
  }
  return (
    <GuestListContainer>
      <Grid sx={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
      <GuestListHeader>Guests List</GuestListHeader>
      <Button onClick={()=>{navigate("/Guests")}} size='small' variant='text'>See all</Button>
      </Grid>
      <Grid container sx={{display:'flex' , justifyContent:'space-around', mb:4, padding:2, background:'#F5F7FC'}}>
        <Grid item sx={{textAlign:'center'}}>
            <Grid sx={{display:'flex', textAlign:'center'}}>
              <Diversity3Icon sx={{mr:1}} color='success' />
              <Typography>Coming</Typography>
            </Grid>
            {521}
        </Grid>
        <Grid item sx={{textAlign:'center'}}>
            <Grid sx={{display:'flex'}}>
              <Diversity3Icon sx={{mr:1}} color='error' />
              <Typography>Not Coming</Typography>
            </Grid>
            {12}
        </Grid>
      </Grid>
      <GuestListBoxContainer>
      {guests.map((guest) => renderGuest(guest))}
    </GuestListBoxContainer>
    </GuestListContainer>);
};

export default GuestList;

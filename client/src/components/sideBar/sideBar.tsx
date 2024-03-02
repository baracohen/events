import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Button, TextField } from '@material-ui/core';
import { Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useForm } from 'react-hook-form';
import { EventFormData } from '../../interfaces/event.interface';
import { CreateEvent } from '../../apis/events';

import styled, { keyframes } from 'styled-components';

const events: any[] = [

];

const NeonButton = styled(Button)`
  background-color: black;
  line-height: 42px;
  padding: 0;
  border: none;

  &:before,
  &:after {
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    background: #21ebff;
    width:0;
      box-shadow:  0 0 5px #21ebff,  0 0 5px #21ebff inset;
    transition:400ms ease all;
  }

  &:before {
    top: 0;
  }

  &:after {
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }

  &:hover:before,
  &:hover:after {
    background: transparent;
    color: #21ebff;
    width:100%;
    transition:800ms ease all;
  }
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SidebarMenu = ({}) => {
  const { collapseSidebar } = useProSidebar();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit } =  useForm<EventFormData>();
  
  const onSubmit = (data: EventFormData) => {
    const event = CreateEvent(data)
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event: SelectChangeEvent) => {
  };
  
  const addEvent = () => {
  };

  const addEventModal =() => {
      return (

        <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add new event"}</DialogTitle>
        <DialogContent  sx={{gap:10}}>
        <TextField
          fullWidth
          label="Event name"
          {...register('title', { required: true })}
        />
        <TextField
          fullWidth
          label="Event description"
          {...register('description', { required: true })}
        />
        <TextField
          fullWidth
          label="Location"
          {...register('location', { required: true })}
        />
        <TextField
          id="date"
          label="EventDate"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          {...register('date', { required: true })}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOpenModal(false)}} >Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)} color='primary' type='submit'>Add</Button>
        </DialogActions>
      </Dialog>
      )
  }
  
  return (
    <div>
      <Sidebar
        transitionDuration={400}
        style={{ height: "100vh", position: "fixed", top: 0 }}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
          >
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem component={<Link to="/Dashboard" />} icon={<HomeOutlinedIcon />}>Dashboard</MenuItem>
          <MenuItem component={<Link to="/Guests" />} icon={<PeopleOutlinedIcon />}>Gusts</MenuItem>
          <MenuItem component={<Link to="/EventManagment" />} icon={<ContactsOutlinedIcon />}>Event Managment</MenuItem>
          <MenuItem component={<Link to="/Budget" />} icon={<ReceiptOutlinedIcon />}>Budget and Logistic</MenuItem>

        </Menu>
        {events && events.length > 0 ? (
        <FormControl  sx={{ width: "90%", m:1, position: "absolute", bottom: 0}}>
          <InputLabel>Event</InputLabel>
          <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={events[0].name}
              label="Event"
              onChange={handleChange}
            >
            <Menu>
                {events.map((event) => (
                  <MenuItem key={event.name}>
                    <img src={event.image} alt={event.name} />
                  </MenuItem>
                ))}
            </Menu>
          </Select>
        </FormControl>
        )
        : 
        <Stack sx={{ width: "90%", m:1, position: "absolute", bottom: 0}}>
          <NeonButton onClick={()=>{setOpenModal(true)}}>Add event</NeonButton>
          {addEventModal()}
        </Stack>
        }
        
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;

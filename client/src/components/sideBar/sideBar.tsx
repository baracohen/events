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
import theme from '../../theme';
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

const events: any[] = [

];

interface FormData {
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventImage: string;
}


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
  const { register, handleSubmit } =  useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    // handle form submission here
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
        <DialogContent>
          <TextField
          fullWidth
          label="Event name"
          {...register('eventName', { required: true })}
        />
        <TextField
          fullWidth
          label="Event date"
          {...register('eventDate', { required: true })}
        />
        <TextField
          fullWidth
          label="Location"
          {...register('eventLocation', { required: true })}
        />
        <TextField
          fullWidth
          label="Image"
          {...register('eventImage', { required: true })}
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

          <Button onClick={()=>{setOpenModal(true)}}>Add event</Button>
          {addEventModal()}
        </Stack>
        }
        
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;

import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import { useForm } from 'react-hook-form';

type Guest = {
  id: number;
  name: string;
  mobileNumber: string;
  status: string;
};

type EditUserModalProps = {
  openModal: boolean;
  guest?: Guest;
  handleClose: ()=> void
};



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FormData {
  name: string;
  mobileNumber: string;
  status:string
}

const EditUserModal: React.FC<EditUserModalProps> = ({ openModal,  guest, handleClose}) => {
  const { register, handleSubmit } =  useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // handle form submission here
  };
  
  return (
    <>
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Please edit your guest</DialogTitle>
      <DialogContent>
          <TextField
          fullWidth
          placeholder='Name'
          sx={{mb:2}}
          value={guest?.name} 
          {...register('name', {  value: guest?.name})}
        />
        <TextField
          fullWidth
          sx={{mb:2}}
          placeholder='Phone'
          value={guest?.mobileNumber} 
          {...register('mobileNumber', { value: guest?.mobileNumber })}
        />
        <TextField
          fullWidth
          sx={{mb:2}}
          placeholder='Status'
          value={guest?.status} 
          {...register('status', { value: guest?.status })}
        />
        </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='inherit' >Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} color='primary' type='submit'>Save</Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default EditUserModal;

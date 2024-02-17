import React from 'react';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';


type DeleteUserModalProps = {
  openModal: boolean;
  name?: string;
  handleSubmit: () => void
  handleClose: () => void
};



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ openModal,  handleClose, handleSubmit, name}) => {
  return (
    <>
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{`Are you sure you want to delete ${name}?`}</DialogTitle>
      <DialogContent>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} >Cancel</Button>
        <Button onClick={handleSubmit} color='error' type='submit'>Delete</Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default DeleteUserModal;

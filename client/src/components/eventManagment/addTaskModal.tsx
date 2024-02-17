import React, { useEffect } from 'react';
import { Button, TextField, Select, MenuItem, Chip } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import { useForm } from 'react-hook-form';


type AddTaskModalProps = {
  openModal: boolean;
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
  title: string;
  assignTo: string;
  status:string
  priority:string
  description:string
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({openModal, handleClose}) => {
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
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
          <TextField
          fullWidth
          label='Title'
          sx={{mb:2}}
          {...register('title', {  required: true})}
        />
        <TextField
          fullWidth
          sx={{mb:2}}
          label='Assign to'
          {...register('assignTo', { required: true })}
        />
        <Select
            fullWidth
            placeholder="Status"
            sx={{mb:2}}
            {...register('status', { required: false })}
          >
            <MenuItem value="Open">  <Chip variant='filled' label={'Open'} color='primary' /></MenuItem>
            <MenuItem value="In Progress">  <Chip variant='filled' label={'In Progress'} color='warning' /></MenuItem>
            <MenuItem value="Done">  <Chip variant='filled' label={'Done'} color='success' /></MenuItem>
        </Select>
        <Select
            fullWidth
            placeholder="Status"
            sx={{mb:2}}
            {...register('priority', { required: false })}
          >
            <MenuItem value="Low">  <Chip variant='filled' label={'Low'} color='info' /></MenuItem>
            <MenuItem value="Medium">  <Chip variant='filled' label={'Medium'} color='secondary' /></MenuItem>
            <MenuItem value="High">  <Chip variant='filled' label={'High'} color='error' /></MenuItem>
        </Select>

        <TextField
          fullWidth
          sx={{mb:2}}
          label='Description'
          multiline
          maxRows={3}
          {...register('description', { required: false })}
        />
        </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='inherit' >Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} color='primary' type='submit'>Add task</Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default AddTaskModal;

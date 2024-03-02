import React, {useEffect} from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useForm } from 'react-hook-form';
import { GuestStatus } from '../../enums/guestStatus.enum';
import { Guest } from '../../interfaces/guest.interface';
import { StyledStatusTag } from './styledComponents';


type EditUserModalProps = {
  openModal: boolean;
  guest?: Guest | null; 
  handleClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditUserModal: React.FC<EditUserModalProps> = ({
  openModal,
  guest,
  handleClose,
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<Guest>(); // Removed defaultValues

  useEffect(() => {
    if (openModal) {
      if (guest) {
        setValue('name', guest.name);
        setValue('mobileNumber', guest.mobileNumber);
        setValue('side', guest.side);
        setValue('attendingStatus', guest.attendingStatus); // Set default value for attendingStatus
      } else {
        reset();
      }
    }
  }, [openModal, guest, setValue, reset]);

  const onSubmit = (data: Guest) => {
      
    
  };

  const handleCloseModal = () => {
    reset();
    handleClose()
  };

  return (
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{guest ? 'Edit' : 'Create'} Guest</DialogTitle> {/* Dynamic title */}
      <DialogContent >
        <TextField
          fullWidth
          placeholder="Name"
          sx={{ mb: 2 }}
          {...register('name')}
        />
        <TextField
          fullWidth
          placeholder="Phone"
          sx={{ mb: 2 }}
          {...register('mobileNumber')}
        />
        <TextField
          fullWidth
          placeholder="Side"
          sx={{ mb: 2 }}
          {...register('side')}
        />
        <TextField
          select
          fullWidth
          label="Attending status"
          sx={{ mb: 2 }}
          defaultValue={guest ? guest.attendingStatus : ''} // Use defaultValue instead of value
          {...register('attendingStatus')}
        >
          {Object.keys(GuestStatus).map((statusKey) => (
            <MenuItem key={statusKey} value={GuestStatus[statusKey as keyof typeof GuestStatus]}>
              <StyledStatusTag status={GuestStatus[statusKey as keyof typeof GuestStatus]}>
                {GuestStatus[statusKey as keyof typeof GuestStatus]}
              </StyledStatusTag>
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} color="primary" type="submit">
          {guest ? 'Save' : 'Create'} {/* Dynamic button label */}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserModal;

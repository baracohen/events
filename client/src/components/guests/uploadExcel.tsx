import React, { useRef, useState } from 'react';
import { Button, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloseIcon from '@mui/icons-material/Close';

const UploadButton = styled(Button)({
  backgroundColor: '#00A651',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#00873E',
  },
});

const StyledModal = styled(Modal)(({ theme }) => ({
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

const UploadInput = styled('input')({
  display: 'none',
});

interface ExcelUploaderProps {
  onUpload: (file: File) => void;
}

const StyledButton = styled(Button)({
  background: '#4caf50', // set the background color
  color: '#fff', // set the text color
  '&:hover': {
    background: '#388e3c', // set the background color on hover
  },
});

const ExcelUploader: React.FC<ExcelUploaderProps> = ({ onUpload }) => {
    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null); // add a ref to the input element
  
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        onUpload(event.target.files[0]);
        setIsOpen(false);
      }
    };
  
    const handleButtonClick = () => {
      // trigger a click event on the input element
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    return (
      <>
        <UploadButton onClick={() => setIsOpen(true)}>
          <InsertDriveFileIcon sx={{ mr: 1 }} />
          Upload Excel
        </UploadButton>
        <StyledModal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="modal-content">
            <h2>Upload Excel file</h2>
            <label htmlFor="file-upload">
              <StyledButton variant="contained" onClick={handleButtonClick}>
                {"upload your guests"}
              </StyledButton>
              <UploadInput
                id="file-upload"
                type="file"
                accept=".xlsx, .xls"
                onChange={handleUpload}
                ref={fileInputRef} // add the ref to the input element
              />
            </label>
            <Button className="modal-close" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </Button>
          </div>
        </StyledModal>
      </>
    );
  };

export default ExcelUploader;

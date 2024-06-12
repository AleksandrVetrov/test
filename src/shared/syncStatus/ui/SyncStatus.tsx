import { FC, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Stack from '@mui/material/Stack';
import { Modal, Typography } from '@mui/material';

type Props = {
  status: string;
  date: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
  display: 'block',
};


enum Status {
  success = 'success',
  warning = 'warning',
  error = 'error',
}


const SyncStatus: FC<Props> = (props: Props) => {
  const states: { [key: string]: JSX.Element } = {
    [Status.success]: <CheckCircleOutlineIcon></CheckCircleOutlineIcon>,
    [Status.warning]: <WarningAmberIcon></WarningAmberIcon>,
    [Status.error]: <ErrorOutlineIcon></ErrorOutlineIcon>,
  };


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Stack direction={'row'} spacing={2} onClick={handleOpen} sx={{ cursor: 'pointer' }}>
      <CheckCircleOutlineIcon/>
      <Typography>{props.date}</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} alignItems="center" justifyContent="center">
          <Typography>Test</Typography>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default SyncStatus;
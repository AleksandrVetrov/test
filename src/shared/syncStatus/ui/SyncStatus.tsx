import { FC, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Stack from '@mui/material/Stack';
import {  Typography } from '@mui/material';
import GetLogs from '../../../features/getLogs/ui/GetLogs';

type Props = {
  status: string;
  date: string;
  systemId: string;
}


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
  const handleClose = () => {
    setOpen(false);

  };


  return (
    <Stack direction={'row'} spacing={2} onClick={handleOpen} sx={{ cursor: 'pointer' }}>
      {states[props.status]}
      <Typography>{props.date}</Typography>
      <GetLogs handleClose={handleClose} open={open} systemId={props.systemId}></GetLogs>
    </Stack>
  );
};

export default SyncStatus;
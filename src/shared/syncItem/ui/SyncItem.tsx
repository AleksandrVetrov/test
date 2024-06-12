import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import ControlledCheckbox from '../../checkbox/ui/Checkbox';
import ControlledSwitches from '../../switch/ui/Switch';

type Props = {
  label: string;
  date: string;
}

const SyncItem:FC<Props> = (props:Props) => {
  return(
    <Stack direction={'row'} alignItems={'center'} spacing={2}>
      <ControlledCheckbox label={'label'}></ControlledCheckbox>
      <Typography>{props.label}</Typography>
      <Typography>Последняя синхронизация: {props.date}</Typography>
      <ControlledSwitches></ControlledSwitches>
      <ControlledSwitches></ControlledSwitches>
    </Stack>
  )
}

export default SyncItem;
import { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button, Typography } from '@mui/material';
import SyncStatus from '../../../shared/syncStatus/ui/SyncStatus';
import SyncItem from '../../../shared/syncItem/ui/SyncItem';
import ControlledCheckbox from '../../../shared/checkbox/ui/Checkbox';
import { System } from '../../../shared/Types';

type Props = {
  title: string;
  description: string;
  status: string;
  date: string;
}


const InfoPanelItem: FC<System> = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack sx={{}}>
      <Stack direction={'row'} spacing={2}>
        {open ? <ExpandLess sx={{}} onClick={handleClick}/> : <ExpandMore sx={{}} onClick={handleClick}/>}
        <Typography>{props.title}</Typography>
        <Typography>{props.description}</Typography>
        <SyncStatus status={props.status} date={props.date}></SyncStatus>
      </Stack>
      <Stack sx={{ pl: 5, mt: 3 }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Stack spacing={3}>
            <SyncItem label={'Детализация полномочий'} date={'29/04/2023'}></SyncItem>
            <Typography>Объекты репозитория</Typography>
            <SyncItem label={'Профили'} date={'29/04/2023'}></SyncItem>
            <SyncItem label={'Роли'} date={'29/04/2023'}></SyncItem>
            <SyncItem label={'Пользователи'} date={'29/04/2023'}></SyncItem>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{ pr: 15 }}>
              <ControlledCheckbox label={'Выбрать все'}></ControlledCheckbox>
              <Button>Отправить</Button>
            </Stack>
          </Stack>
        </Collapse>
      </Stack>
    </Stack>
  );
};
export default InfoPanelItem;
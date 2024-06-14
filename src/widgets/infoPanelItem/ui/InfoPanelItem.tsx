import { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider, Grid, Typography } from '@mui/material';
import SyncStatus from '../../../shared/syncStatus/ui/SyncStatus';
import SyncItem from '../../../shared/syncItem/ui/SyncItem';
import SyncInformation from '../../../features/syncInformation/ui/SyncInformation';
import { useDispatch } from 'react-redux';
import { setToggle } from '../../../store/informationSlice';

type Props = {
  systemId: string;
  title: string;
  description: string;
  status: string;
  date: string;
  detalization:{
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  };
  profile: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  };
  roles: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  };
  users: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  };

}


const InfoPanelItem: FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheckbox = (propName:string, result:boolean, innerPropName:string) =>{
    dispatch(setToggle({
      systemId: props.systemId,
      key: propName,
      value: result,
      innerKey: innerPropName,
    }));
  }

  return (
    <Stack sx={{ mt: 5 }}>
      <Stack direction={'row'} spacing={2}>
        {open ? <ExpandLess sx={{}} onClick={handleClick}/> : <ExpandMore sx={{}} onClick={handleClick}/>}
        <Typography>{props.title}</Typography>
        <Typography>{props.description}</Typography>
        <SyncStatus status={props.status} date={props.date} systemId={props.systemId}></SyncStatus>
      </Stack>
      <Divider sx={{ mt: 5 }}/>
      <Stack sx={{ pl: 3, mt: 3 }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container>
            <Grid item xs={4.8}></Grid>
            <Grid item xs={2.4}><Typography>Загрузка дельты</Typography></Grid>
            <Grid item xs={2.4}><Typography>Синх. будущих присвоений</Typography></Grid>
            <Grid item xs={4.8}></Grid>
            <Grid item xs={12}>
              <SyncItem propName={'detalization'} value={props.detalization} handleCheckbox={(value)=>{handleCheckbox('detalization', value, 'checked')}} systemId={props.systemId} label={'Детализация полномочий'} date={props.date}></SyncItem>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <Typography>Объекты репозитория</Typography>
            </Grid>
            <Grid item xs={12}>
              <SyncItem propName={'profile'} value={props.profile} handleCheckbox={(value)=>{handleCheckbox('profile', value, 'checked')}} systemId={props.systemId} label={'Профили'} date={props.date}></SyncItem>
            </Grid>
            <Grid item xs={12}>
              <SyncItem propName={'roles'} value={props.roles} handleCheckbox={(value)=>{handleCheckbox('roles', value, 'checked')}} systemId={props.systemId} label={'Роли'} date={props.date}></SyncItem>
            </Grid>
            <Grid item xs={12}>
              <SyncItem propName={'user'} value={props.users} handleCheckbox={(value)=>{handleCheckbox('users', value, 'checked')}} systemId={props.systemId} label={'Пользователи'} date={props.date}></SyncItem>
            </Grid>
            <Grid item xs={2.4} >
            </Grid>
            <Grid item xs={7.2}></Grid>
            <Grid item xs={2.4} sx={{ mt: 5 }}>
              <SyncInformation systemId={props.systemId}></SyncInformation>
            </Grid>
          </Grid>
        </Collapse>
      </Stack>

    </Stack>
  );
};
export default InfoPanelItem;
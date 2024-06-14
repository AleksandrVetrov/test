import Typography from '@mui/material/Typography';
import { FC } from 'react';
import ControlledCheckbox from '../../checkbox/ui/Checkbox';
import ControlledSwitches from '../../switch/ui/Switch';
import { Grid } from '@mui/material';
import * as React from 'react';
import { setToggle } from '../../../store/informationSlice';
import { useDispatch } from 'react-redux';


type Props = {
  propName: string;
  systemId: string;
  label: string;
  date: string;
  value: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  };
  handleCheckbox: (value: boolean) => void;
}


const SyncItem: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleCheckbox(event.target.checked);
  };

  const handleToggle = (result: boolean, innerPropName: string) => {
    dispatch(setToggle({
      systemId: props.systemId,
      key: props.propName,
      value: result,
      innerKey: innerPropName,
    }));
  };


  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={2.4}>
        <ControlledCheckbox value={props.value.checked} handleCheckbox={handleChange} label={props.label}
                            systemId={props.systemId}></ControlledCheckbox>
      </Grid>
      <Grid item xs={2.4}>
        <Typography>Последняя синхронизация: {props.date}</Typography>
      </Grid>
      <Grid item xs={2.4}>
        <ControlledSwitches value={props.value.toggleDown} handleToggle={(value) => {
          handleToggle(value, 'toggleDown');
        }}></ControlledSwitches>
      </Grid>
      <Grid item xs={2.4}>
        <ControlledSwitches value={props.value.toggleSync} handleToggle={(value) => {
          handleToggle(value, 'toggleSync');
        }}></ControlledSwitches>
      </Grid>
      <Grid item xs={2.4}></Grid>
    </Grid>
  );
};

export default SyncItem;
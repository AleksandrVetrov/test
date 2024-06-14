import * as React from 'react';
import Switch from '@mui/material/Switch';
import { FC } from 'react';

type Props = {
  handleToggle: (value:boolean) => void;
  value:boolean;
}

const ControlledSwitches:FC<Props> = (props:Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleToggle(event.target.checked);
  };

  return (
    <Switch
      checked={props.value}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
export default ControlledSwitches;
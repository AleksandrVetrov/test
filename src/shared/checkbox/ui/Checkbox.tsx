import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FC } from 'react';


type Props = {
  systemId: string;
  label: string;
  handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value:boolean;
}

const ControlledCheckbox:FC<Props> = (props:Props) => {
  return (
    <FormControlLabel control={<Checkbox onChange={props.handleCheckbox} checked={props.value} />} label={props.label} />
  );
}
export default ControlledCheckbox;
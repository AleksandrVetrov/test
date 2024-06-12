import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FC } from 'react';

type Props = {
  label: string;
}

const ControlledCheckbox:FC<Props> = (props:Props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel control={<Checkbox onChange={handleChange} checked={checked} />} label={props.label} />
  );
}
export default ControlledCheckbox;
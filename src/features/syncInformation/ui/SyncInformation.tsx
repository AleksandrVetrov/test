import { FC } from 'react';
import axiosConfig from '../../../shared/api/axiosConfig';
import { Button } from '@mui/material';
import { useAppSelector } from '../../../hooks';
type Props = {
  systemId:string;
}

const SyncInformation: FC<Props> = (props:Props) => {
  const state = useAppSelector(state => state.information);

  const sync = () => {
    console.log()
    axiosConfig.post('/sync', state[props.systemId]);
  };

  return (
    <Button onClick={sync}
            variant="contained"
            sx={{ backgroundColor: '#5A5A5A', p: '7, 16, 8, 16', color: 'white' }}>Запустить синхр данных</Button>
  );
};

export default SyncInformation;
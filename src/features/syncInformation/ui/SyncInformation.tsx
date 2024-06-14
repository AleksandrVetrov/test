import {FC} from 'react';
import axiosConfig from '../../../shared/api/axiosConfig';
import { Button } from '@mui/material';
import { useAppSelector } from '../../../hooks';

const SyncInformation:FC = () => {
  const state = useAppSelector(state => state.information);

  const sync = () => {
    axiosConfig.post('/sync', state)
  }

  return (
    <Button onClick={sync}></Button>
  )
}
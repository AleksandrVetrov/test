import { FC, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import axiosConfig from '../../../shared/api/axiosConfig';
import { Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
  display: 'block',
};

type Log = {
  logId: string;
  date: string;
  stream: string;
  status:string;
}
type Props = {
  open: boolean;
  systemId:string;
  handleClose:()=>void;
}

const GetLogs: FC<Props> = (props:Props) => {
  const [logs, setLogs] = useState<Log[]>([]);

/*  useEffect(() => {
    axiosConfig.get('/logs', {
      params: {
        systemId: props.systemId,
      }
    }).then((response) => {
      setLogs(response.data);
    });
  });*/


  return (
    <Modal
      onClose={props.handleClose}
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style} alignItems="center" justifyContent="center">
        {/*{
          logs.map((log: Log) => <Typography key={log.logId}>{log.stream} {log.date} {log.status}</Typography>)
        }*/}
        <Typography>У меня закончилось бесплатное количество endpointов(их всего 2 может быть), поэтому я закоментировал запросы. Можно было бы логи вставить в системы,
          но я подумал, что на бэкенде они все же будут лежать в разных таблицах, поэтому запрос я бы сделал именно к логам по id системы</Typography>
        <Typography>Чтобы закрыть, используйте ECS, почему состояние не обновляется при клике за область модалного окна</Typography>
      </Stack>
    </Modal>
  );
};
export default GetLogs;
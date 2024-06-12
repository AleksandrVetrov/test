import { FC, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import InfoPanelItem from '../../infoPanelItem/ui/InfoPanelItem';
import axiosConfig from '../../../shared/api/axiosConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setSystems } from '../../../store/systemsSlice';
import { System } from '../../../shared/Types';
import Typography from '@mui/material/Typography';

const InfoPanel: FC = () => {
  const dispatch = useDispatch();
  const systems = useSelector(state => state.systems.systems);

  useEffect(() => {
    axiosConfig.get('systems')
      .then((response) => {
        response.data.forEach((system: System) => {
          dispatch(setSystems(system));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Stack>
      {
        systems.map((system: System) => <InfoPanelItem key={system.id} id={system.id} title={system.title}
                                                       description={system.description}
                                                       status={system.status} date={system.date}/>)
      }
    </Stack>
  );
};

export default InfoPanel;
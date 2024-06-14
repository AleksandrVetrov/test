import { FC, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import InfoPanelItem from '../../infoPanelItem/ui/InfoPanelItem';
import axiosConfig from '../../../shared/api/axiosConfig';
import { useDispatch } from 'react-redux';
import { setSystems } from '../../../store/systemsSlice';
import { System } from '../../../shared/Types';
import { useAppSelector } from '../../../hooks';
import { setInformation, SystemInfo } from '../../../store/informationSlice';

const InfoPanel: FC = () => {
  const dispatch = useDispatch();
  const systems = useAppSelector(state => state.systems);

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

  useEffect(() => {
    dispatch(setInformation(systems.map((system): SystemInfo => ({
      systemId: system.systemId,
      title: system.title,
      description: system.description,
      status: system.status,
      date: system.date,
      detalization: {
        checked: false,
        toggleDown: false,
        toggleSync: false,
      },
      profile: {
        checked: false,
        toggleDown: false,
        toggleSync: false,
      },
      roles: {
        checked: false,
        toggleDown: false,
        toggleSync: false,
      },
      users: {
        checked: false,
        toggleDown: false,
        toggleSync: false,
      },
    }))));
  }, [systems]);


  const information = useAppSelector(state => state.information);
  return (
    <Stack>
      {
        Object.entries(information).map(([key, value]) => <InfoPanelItem key={value.systemId}
                                                                         systemId={value.systemId}
                                                                         title={value.title}
                                                                         description={value.description}
                                                                         status={value.status} date={value.date}
                                                                         detalization={value.detalization}
                                                                         profile={value.profile}
                                                                         roles={value.roles}
                                                                         users={value.users}/>)

      }
    </Stack>
  );
};

export default InfoPanel;
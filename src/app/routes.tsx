import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import InfoPanel from '../widgets/InfoPanel/ui/InfoPanel';

function Routers() {
  return (
    <Routes>
      <Route path={routes.root.index} element={<InfoPanel></InfoPanel>} />
    </Routes>
  );
}

export default Routers;

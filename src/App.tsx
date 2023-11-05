import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import Colors from './pages/Colors';
import Typography from './pages/Typography';
import Spaces from './pages/Spaces';
import Buttons from './pages/Buttons';
import Inputs from './pages/Inputs';
import Grid from './pages/Grid';

import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="colors" element={<Colors />} />
          <Route path="typography" element={<Typography />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="grid" element={<Grid />} />
          <Route path="*" element={<Navigate to="/buttons" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

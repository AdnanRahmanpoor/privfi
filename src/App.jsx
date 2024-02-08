import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Intro from './components/Intro';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/intro' element={<Intro />} />
          {/* <Route element={<Home />} /> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

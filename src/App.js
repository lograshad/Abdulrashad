import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './screens/home/home';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/preloader/preloader';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence 
    // initial={false}
     mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/home"
          element={
            <Home />
          }
        />
        <Route
          exact
          path="/"
          element={
            <Preloader />
          }
        />
        {/* <Route path="*" element={<NotFound />} /> 404 PAGE */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;

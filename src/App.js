import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './screens/home/home';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/preloader/preloader';
import { useState } from 'react';
import Cursor from './components/Cursor/cursor';
import Lenis from '@studio-freight/lenis';

function App() {
  const location = useLocation();
  const [curse, setCurse] = useState(false);
  const updateCurse = () => {
    setCurse(true);
  }
  const updateLeave = () => {
    setCurse(false);
  }
  const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);
  return (
    <div>
      <Cursor />
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
    </div>
  );
}

export default App;

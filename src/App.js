import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        // element={
        //   <Home />
        // }
      />
      {/* <Route path="*" element={<NotFound />} /> 404 PAGE */}
    </Routes>
  );
}

export default App;

import Map from './components/Map.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

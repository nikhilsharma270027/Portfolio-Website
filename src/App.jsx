import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import HomeSection from './components/HomeSection';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSection />} /> {/* 👈 Renders at / */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

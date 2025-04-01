import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import './App.css';
import HomeSection from './components/HomeSection';

// Initialize Google Analytics with a fallback
ReactGA.initialize("G-X65Z2HQ11C"); // ✅ Fix applied

// Component to track route changes
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <AnalyticsTracker /> {/* 👈 Tracks page views */}
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

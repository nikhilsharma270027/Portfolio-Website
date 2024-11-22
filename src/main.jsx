import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { InfoBarProvider } from './Context/InfoBarProvider.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InfoBarProvider> */}

    <App />
    {/* </InfoBarProvider> */}
  </StrictMode>,
)

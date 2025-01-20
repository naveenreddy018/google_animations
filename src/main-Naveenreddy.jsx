import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepart2 from './components/Navpages/Home/homepart2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/global.css";
import FavouriteProvider
    from "./context/FavouriteProvider";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavouriteProvider>
      <App />
    </FavouriteProvider>
  </StrictMode>,
)

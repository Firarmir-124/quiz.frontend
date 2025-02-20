import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {PointsProvider} from "./context/PointsContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <PointsProvider>
              <App />
          </PointsProvider>
      </BrowserRouter>
  </StrictMode>,
)

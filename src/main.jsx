import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { initGA } from './hooks/analytics'

// Only initialize in production
if (import.meta.env.PROD) {
  initGA()
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>,
)
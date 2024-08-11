import { StrictMode as ReactStrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ReactStrictMode>
    <App />
  </ReactStrictMode>,
)

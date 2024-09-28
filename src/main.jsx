/* Filename: main.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tutorial.css'
import AppTutorial from './AppTutorial'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTutorial />
  </StrictMode>,
)

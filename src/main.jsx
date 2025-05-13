import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/style.css'
import App from './App.jsx'
import { LanguageProvider } from './components/Language-Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)

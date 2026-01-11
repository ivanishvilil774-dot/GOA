import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemProvider } from './context/ThemContext.jsx'


createRoot(document.getElementById('root')).render(
  <ThemProvider>
      <App />
  </ThemProvider>
)

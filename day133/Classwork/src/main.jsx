import { createRoot } from 'react-dom/client'
import './index.css'
import MyWrapper from './context/MyWrapper.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MyWrapper>
    <App />
  </MyWrapper>
)

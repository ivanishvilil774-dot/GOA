import { StudentsContext } from './context/StudentsContext.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const students = [
  "Luka",
  "Giorgi",
  "Ana",
  "Tamar",
  "David",
  "Saba",
  "Mari",
  "Levan",
  "Ketevan"
];


createRoot(document.getElementById('root')).render(
    <StudentsContext.Provider value={[students]}>
      <App />
    </StudentsContext.Provider>
)

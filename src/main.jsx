import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//this is Functional Component
// function Clock({ locale }) {
//   return (
//     <h2 className="clock">
//       Current Time: {new Date().toLocaleTimeString(locale)}
//     </h2>
//   );
// }
//this is Class Component



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <App />
  </StrictMode>
);

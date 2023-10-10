import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>  // Quite el modo estricto, para que no me aparezca el error del video 526 que no me muestra que esta confirmado el usuario
);

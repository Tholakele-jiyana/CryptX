//Configuring the main.jsx file to include the index.css file for styling

import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import './index.css';

const root=ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
  <App/>
  </React.StrictMode>
);

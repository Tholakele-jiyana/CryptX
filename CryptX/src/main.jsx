//Configuring the main.jsx file to include the index.css file for styling

import React from 'react';
import App from './App.jsx';
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
  <App/>
  </React.StrictMode>
);

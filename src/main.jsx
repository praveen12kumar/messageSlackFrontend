import './index.css';

import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <Toaster position="bottom-right" />
  </Router>
);

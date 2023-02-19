import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//Get a reference to the div with ID root
const el = document.getElementById('root');

//Tell React to take control of that element
const root  = ReactDOM.createRoot(el);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
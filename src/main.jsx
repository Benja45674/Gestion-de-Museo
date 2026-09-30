import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <Notifications position="top-right" zIndex={1000} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);

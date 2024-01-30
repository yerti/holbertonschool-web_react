import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';

const root = createRoot(document.getElementById('root'));
root.render(<div>
  <StrictMode>
    <App isLoggedIn={false}  />
  </StrictMode>
</div>);


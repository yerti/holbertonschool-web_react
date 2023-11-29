import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notification from './Notifications/Notifications'

ReactDOM.render(<div>
    <Notification/>
    <App />
</div>, document.getElementById('root'));
registerServiceWorker();

import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  const focusInput = (inputId) => {
    const inputElement = document.getElementById(inputId);

    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className="App">
      <div className="App">
        <div className="App-header">
          <img src="/assets/image/logo-holberton.jpg" alt="" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>

          <div>
            {/* label and input for email */}
            <div>
              <label htmlFor='email' onClick={() => focusInput('email')}>Email:</label>
              <input type='email' id='email' />
            </div>
            {/* label and input for password */}
            <div>
              <label htmlFor='password' onClick={() => focusInput('password')}>Password:</label>
              <input type='password' id='password' />
            </div>

            <button>Ok</button>
          </div>
        </div>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy('isIndex')}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

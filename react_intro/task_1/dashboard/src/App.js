import logo from './images/holberton-logo.jpg'
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} alt='logo of holberton school'/>
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      <div className='App-footer'>
        <p><i>Copyright {getFullYear()} - {getFooterCopy("isIndex")}</i></p>
      </div>
    </div>
  );
}

export default App;

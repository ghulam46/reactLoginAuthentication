// import logo from './logo.svg';
import '../src/component/Wrapper.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from '../src/component/Dashboard';
import Preferences from '../src/component/Preferences';
import { useState } from 'react';
import Login from './component/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/preferences' element={<Preferences/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

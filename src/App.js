// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';

function App() {
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

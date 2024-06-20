import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserLogin from './UserLogin';
import Register from "./Register"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
       <Route path="/" element={<UserLogin/>}/>
       <Route path="/Register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

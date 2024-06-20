import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserLogin from './UserLogin';
import Register from "./Register"
import Admin_dashboard from './Admin_dashboard';
import Student_dashboard from './Student_dashboard';
import Teacher_dashboard from "./Teacher_dashboard"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
       <Route path="/" element={<UserLogin/>}/>
       <Route path="/Register" element={<Register/>}/>
       <Route path='/admin-dashboard' element={<Admin_dashboard/>}/>
       <Route path="/student-dashboard" element={<Student_dashboard/>}/>
       <Route path="/teacher-dashboard" element={<Teacher_dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

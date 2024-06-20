import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserLogin from './Loginsystem/UserLogin';
import Register from "./Register"
import Admin_dashboard from './AdminComponent/Admin_dashboard';
import Student_dashboard from './StudentComponent/Student_dashboard';
import Teacher_dashboard from "./TeacherComponent/Teacher_dashboard"
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

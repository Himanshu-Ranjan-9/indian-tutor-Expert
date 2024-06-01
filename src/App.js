import './App.css';
import Home from './Screens/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Paymentsuccess from './component/payments/Paymentsuccess';
import PaymentMain from './component/payments/PaymentMain';
import TutorDashBoard from './component/TutorDashBoard/TutorDashBoard';
import TutorProfile from './component/TutorDashBoard/TuterProfile/TutorProfile';
import StudentProfile from './component/StudentDashBoard/StudentProfile/StudentProfile';
import StudentDashBoard from './component/StudentDashBoard/StudentDashBoard';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exect path='/' element={<Home />} />    
            <Route path="/paymentsuccess" element={<Paymentsuccess />} />        
            <Route path="/Payment" element={<PaymentMain />} />  
            <Route path="/TutorProfile" element={<TutorProfile />} />  
            <Route path="/TutorDashBoard" element={<TutorDashBoard />} />  
            <Route path="/StudentProfile" element={<StudentProfile/>} />  
            <Route path="/StudentDashBoard" element={<StudentDashBoard />} />  


          </Routes>
        </div>
      </Router>

  );
}

export default App;

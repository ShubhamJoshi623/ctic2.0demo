import './css/index.47ca9330.css';
import './css/index.3ca998d7.css';
import Headernavbar from './components/Headernavbar';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import QuickRegister from './components/QuickRegister/QuickRegister';
import Home from './components/Home';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';



function App() {
  return (
    <>
<Router>

<Headernavbar/>

    

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route exact path="/quickregister" element={<QuickRegister/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/Dashboard" element={<Dashboard/>}/>


     
    </Routes>
  
              
    
   <Footer/>

   

    </Router>
    </>
  );
}

export default App;

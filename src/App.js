import './css/index.47ca9330.css';
import './css/index.3ca998d7.css';


import {
  BrowserRouter ,
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
import TestingComp from './components/TestingComp/TestingComp';
import Mainheader from './components/Mainheader';
import ReactHookForm from './components/TestingComp/ReactHookForm';
import FormikFormDemo from './components/TestingComp/FormikFormDemo';
import QuickRegisterHookForm from './components/QuickRegister/QuickRegisterHookForm';
import ReactHookDynamicForm from './components/TestingComp/ReactHookDynamicForm';




function App() {
  return (
    <>
<BrowserRouter>

    <Routes>
      <Route  path="/" element={<Mainheader/>}>
      <Route index element={<Home/>}/>
      <Route  path="login" element={<Login/>}/>
      <Route  path="ForgotPassword" element={<ForgotPassword/>}/>
      <Route  path="quickregister" element={<QuickRegister/>}/>
      <Route  path="QuickRegisterHookForm" element={<QuickRegisterHookForm/>}/>
      <Route  path="registration" element={<Registration/>}/>
      <Route  path="Dashboard" element={<Dashboard/>}/>
      <Route  path="TestingComp" element={<TestingComp/>}/>
      <Route  path="ReactHookForm" element={<ReactHookForm/>}/>
      <Route  path="ReactHookDynamicForm" element={<ReactHookDynamicForm/>}/>
      <Route  path="FormikFormDemo" element={<FormikFormDemo/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/pages/HomePage"
import Login from "./components/pages/Auth/Login"
import Register from "./components/pages/Auth/Register"
import Admin from "./components/pages/dashboard/Admin"
import Graph from './components/pages/dashboard/Graph';
 
function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/admin' element={<Admin/>}/>
        <Route path='/graph' element={<Graph/>}/>
         
         


      </Routes>
     </>
  );
}

export default App;

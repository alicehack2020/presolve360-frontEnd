import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/pages/HomePage"
import Login from "./components/pages/Auth/Login"
import Register from "./components/pages/Auth/Register"
import Admin from "./components/pages/dashboard/Admin"
 
function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/admin' element={<Admin/>}/>
        {/* <Route path='/student' element={<Student/>}/>
        <Route path='/teacher' element={<Teacher/>}/>

        <Route path='/admin/addteacher' element={<AddTeacher/>}/>

        <Route path='/admin/addcourse' element={<AddCourse/>}/>
        <Route path='/admin/videolist/:course_id' element={<VideoList/>}/>
        <Route path='/admin/addvideo/:course_id' element={<AddVideo/>}/>
        <Route path='/admin/addstudent' element={<AddStudent/>}/> */}

         


      </Routes>
     </>
  );
}

export default App;

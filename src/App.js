import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './Components/Add_image';
import AllPic from './Components/AllPic';
import Dashboard from './Components/Dashboard';
import Edit_Profile from './Components/Edit_Profile';
import Family from './Components/Family';
import Fest from './Components/Fest_pic';
import Login from './Components/Login';
import Main from './Components/Main';
import Nature from './Components/Nature';
import Nav from './Components/Nav';
import Personal from './Components/Personal';
import Reg from './Components/Registration';
import Form from './Components/Reviewform';
import Your_Profile from './Components/Your_Profile';
import Public from './Components/public';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />

        {/* working on it */}
        <Route exact path="/publicImage/:type" element={<Public />} />



        <Route exact path="/form" element={<Form />} />
        <Route exact path="/Reg" element={<Reg />} />
        <Route exact path="/Add" element={<Add />} />
        
        <Route  exact path="/personalImage/:type" element={<Personal />} >
          <Route exact index element={<Personal />} />
          <Route exact path="Fest" element={<Fest />} />
        </Route>

        <Route exact path="/family" element={<Family />} />
        <Route exact path="/nature" element={<Nature />} />

        <Route path="/dashboard" element={<Dashboard />}>
            <Route path="yp" element={<Your_Profile />} />
            <Route path="/dashboard/update_profile" element={<Edit_Profile />} />
            {/* <Route path="change_password" element={<ChangePassword />} /> */}
            <Route path="/dashboard/all_pic" element={<AllPic />} />
        </Route>
      </Routes>

    </>
  )
}

export default App;

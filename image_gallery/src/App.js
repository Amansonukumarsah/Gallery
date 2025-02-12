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
import Notification from './Components/Notification';
import Personal from './Components/Personal';
import Public from './Components/public';
import Reg from './Components/Registration';
import Form from './Components/Reviewform';
import Search from './Components/Search';
import Your_Profile from './Components/Your_Profile';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />

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
            <Route path="/dashboard/all_pic" element={<AllPic />} />
            <Route path="/dashboard/Notification" element={<Notification />} />
        </Route>

        <Route exact path="/search" element={<Search />} />
      </Routes>

    </>
  )
}

export default App;

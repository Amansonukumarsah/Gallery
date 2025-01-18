import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const token = useSelector((state) => state.auth.token)
  // const dispatch=useDispatch()
  // const [inputSeach,setinput]=useState('');

  // const handleDispatch=()=>{
  //   dispatch(searchItem(inputSeach))
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Gallery</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {token ? (
            <>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/personalImage/Personal">Personal_Pic</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/family">Family_Pic</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/publicImage/Public">Public</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Add">Add_Image</NavLink>
              </li>


             <li className="nav-item" style={{ marginLeft: 800 }}>
              <NavLink className="nav-link" to="/search"><CiSearch /></NavLink>
             </li>

              <li className="nav-item" style={{ marginLeft: 30 }}>
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>
            </>
          ) : (
            <li className="nav-item navbar-right" style={{ marginLeft: 5 }}>
              <NavLink className="nav-link" to="/login">Login</NavLink>
              <NavLink className="nav-link" to="/Reg">Register</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '../service/HandleLoginUserApi';
const Dashboard = () => {
    const navigate=useNavigate();
    const [logoutUser] = useLogoutUserMutation();
    const logout = async()=>{
        const token = localStorage.getItem('authToken');
        try {
            const response = await logoutUser({token});
            if(response.error.data){
                localStorage.removeItem("authToken");
                alert(response.error.data);
                navigate('/login');
                window.location.reload();
            }
            else{
                console.log("Logout Failed");
            }
        } catch (error) {
            console.log(".....error...",error);
        }
       
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 border'>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/dashboard/yp" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Your_Profile</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard/update_profile" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Update_Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Change_Password</span></a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard/all_pic" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Pics</span>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-people"></i>
                                <span onClick={logout} class="ms-1 d-none d-sm-inline">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-8'>
                <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

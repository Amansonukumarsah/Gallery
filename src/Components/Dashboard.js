import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import Your_Profile from './Your_Profile'
const Dashboard = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 border'>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <NavLink to="/dashboard/yp" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Your_Profile</span>
                            </NavLink>
                        </li>


                        <li class="nav-item">
                            <NavLink to="/dashboard/update_profile" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Update_Profile</span>
                            </NavLink>
                        </li>

                        
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Change_Password</span></a>
                        </li>


                        <li class="nav-item">
                            <NavLink to="/dashboard/all_pic" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Pics</span>
                            </NavLink>
                        </li>
                        
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Logout</span> </a>
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

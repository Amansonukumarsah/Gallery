import React from 'react';
import { useFetchDataQuery } from '../service/HandleAddImageApi';
import aman from './Image/Aman.jpg';
const Edit_Profile = () => {

    
    const { data, error, isLoading } = useFetchDataQuery();
    if (isLoading) return <div>Looding........</div>
    if(error) return <div>Error :{error.message}</div>
    return (
        <>
        {
            data.map((data,key)=>(
                <div>
                    {data.type}
                </div>
            ))
        }
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" style={{width:'150px',height:'150px'}} src={aman} />
                        <span class="font-weight-bold">Aman kumar sah</span>
                        <span class="text-black-50">amankumarshah8102@gmail.com</span>
                        <span> </span>
                    </div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5"> <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profile Settings</h4> </div> <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">Name</label>
                                <input type="text" class="form-control" placeholder="first name" value="" />
                            </div> <div class="col-md-6"><label class="labels">Surname</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                value=""
                                placeholder="surname" />
                            </div>
                        </div> <div class="row mt-3"> <div class="col-md-12">
                            <label class="labels">PhoneNumber</label>
                            <input type="text" class="form-control" placeholder="enter phone number" value="" />
                        </div> <div class="col-md-12"><label class="labels">Address</label>
                                <input type="text" class="form-control" placeholder="enter address" value="" />
                            </div> <div class="col-md-12"><label class="labels">Email ID</label>
                                <input type="text" class="form-control" placeholder="enter email id" value="" />
                            </div> <div class="col-md-12">
                                <label class="labels">Education</label>
                                <input type="text" class="form-control" placeholder="education" value="" />
                            </div> </div> <div class="row mt-3">
                            <div class="col-md-6">
                                <label class="labels">Country</label>
                                <input type="text" class="form-control" placeholder="country" value="" />
                            </div> <div class="col-md-6"><label class="labels">State/Region</label>
                                <input type="text" class="form-control" value="" placeholder="state" />
                            </div> </div>
                        <div class="mt-5 text-center">
                            <button class="btn btn-primary profile-button" type="button">Save Profile</button>
                        </div> </div> </div> <div class="col-md-4">
                </div>
            </div>
        </div>
        </>
    )
}

export default Edit_Profile 
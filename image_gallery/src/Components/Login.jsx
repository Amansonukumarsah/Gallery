import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from '../service/HandleLoginUserApi';
import "./CSS/Login.css";
import Footer from './Footer';


const Login = () => {
    const formData = new FormData();
    const [loginUser, { isLoading }] = useLoginUserMutation()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const navigate = useNavigate()
    const submit = async (event) => {
        event.preventDefault()
        formData.append("username",email);
        formData.append("password",password);
        try {
            const res = await loginUser(formData);
            if(res && res.error.data)
                {   
                    if(res.error.data==='User not found'){
                        alert(res.error.data);
                        navigate('/login');
                    }
                    else{
                        alert("Login Successfully");
                        localStorage.setItem('authToken', res.error.data);
                        navigate('/dashboard/yp');
                        window.location.reload();
                    }
                    setemail("");
                    setpassword("");
                }
            else{
                console.log("Login is Fail");
            }
        } catch (error) {
            console.log("Form Data is Failed to Load....")
        }
    }
    return (
        <>
            <div>
                <div className="whole log">

                    <div className="box">
                        <div className="form">
                            <h2>Login</h2>

                            <div className="inputBox">
                                <input required="required"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                />
                                <span>Email</span>
                                <i></i>
                            </div>
                            <div className="inputBox">
                                <input required="required"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                                <span>Password</span>
                                <i></i>
                            </div>

                            <div className="signDiv">
                                <p>Have You Not Register Yes?</p>
                                <h6 className="sign">Register</h6>
                            </div>

                            <div>
                                <button className="btn btn-primary" onClick={submit}>Login</button>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
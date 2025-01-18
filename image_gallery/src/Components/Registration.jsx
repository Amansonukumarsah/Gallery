import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../service/HandleRegusterUserApi'
import "./CSS/Reg.css"
import Footer from './Footer'
// import { storeToken } from '../service/localStorageService'

const Register = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
    const navigate=useNavigate()
    const [registerUser, { isLoading }] = useRegisterUserMutation()

    const submit = async(event) => {
        event.preventDefault()

        const formData = new FormData();
        formData.append("name", name);
        formData.append("username", email);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        // console.log(user)
        try {
            const res = await registerUser(formData);
            // console.log("............",res.error.data);
            if(res && res.error.data)
                {
                    console.log(res.data)
                    // storeToken(res.data.token)
                    alert(res.error.data);
                    setconfirmPassword("");
                    setemail("");
                    setpassword("");
                    setname("");
                    navigate('/login');
                }
            else{
                console.log("Registration is Fail");
            }
        } catch (error) {
            console.log("Form Data is Failed to Load....")
        }
        
    }


    return (
        <>
            <div className="">
                <div className="whole reg">

                    <div className="reg_box">
                        <div className="form">
                            <h2>Register_here</h2>
                            <div className="inputBox">
                                <input required="required"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                                <span>Name</span>
                                <i></i>
                            </div>

                            <div className="inputBox">
                                <input
                                    required="required"
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

                            <div className="inputBox">
                                <input required="required"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setconfirmPassword(e.target.value)}

                                />
                                <span>Confirm-Password</span>
                                <i></i>
                            </div>

                                <div className="signDiv">
                                    <p>Login here?</p>
                                    <NavLink className="sign" to="/login">Login</NavLink>
                                </div>

                                <div>
                                    <button className="btn btn-primary" onClick={submit}>Register</button>
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

export default Register;
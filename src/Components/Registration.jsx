import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./CSS/Reg.css"
import Footer from './Footer'
// import { useRegisterUserMutation } from '../service/userauth'
// import { storeToken } from '../service/localStorageService'


// import { storeToken } from "../service/localStorageService"

const Register = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    
//     const navigate=useNavigate()

//     const [registerUser, { isLoading }] = useRegisterUserMutation()
        
        const submit =()=>{

        }
//     const submit = async(event) => {
//         event.preventDefault()
//         const user = {
//             name: name,
//             email: email,
//             password: password,
//             password2: cpassword,
//             tc:true
//         }
//         console.log(user)
//         const res=await registerUser(user)
//         console.log(res);
//         if(res.error)
//         {
//            console.log(res.error.data.errrors)
//         }
//         if(res.data)
//         {
//             console.log(res.data)
//             storeToken(res.data.token)
//             navigate('/login')
//         }
//     }


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
                                    name="cpassword"
                                    value={cpassword}
                                    onChange={(e) => setcpassword(e.target.value)}

                                />
                                <span>Confirm-Password</span>
                                <i></i>
                            </div>


                            {/* <div className="inputBox">
                            <input class="form-check-input text-white" type="checkbox" value="" id="flexCheckIndeterminate"/>
                                <label class="form-check-label text-white" for="flexCheckIndeterminate">
                                    Indeterminate checkbox
                                </label>
                            </div>
                             */}



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
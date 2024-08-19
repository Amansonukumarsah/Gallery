// import Navbar from "./Navbar";
// import { useToast, Button } from "@chakra-ui/react";
import "./CSS/Login.css"
import Footer from './Footer'
// import { useLoginUserMutation } from '../service/userauth'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
// import { getToken, storeToken } from '../service/localStorageService'
import { useDispatch } from 'react-redux'


const Login = () => {
    // const [loginUser, { isLoading }] = useLoginUserMutation()
    
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const navigate = useNavigate()
    const usedispatch=useDispatch()
const submit = async(event)=>{

}
    // const submit = async (event) => {
    //     event.preventDefault()
    //     const user = {
    //         email: email,
    //         password: password
    //     }
        
    //     // const res = await loginUser(user)
    //     if (res.data) {
    //         console.log(res.data.token)
    //         // storeToken(res.data.token)
    //         // const {access_token}=getToken()
    //         usedispatch(setUserToken({access_token:access_token}))
    //         navigate('/Personal')
    //     }
    // }

    // let {access_token}=getToken()
    // useEffect(()=>{
    //     const {access_token}=getToken()
    //     usedispatch(setUserToken({access_token:access_token}))
    // },[access_token,usedispatch])

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
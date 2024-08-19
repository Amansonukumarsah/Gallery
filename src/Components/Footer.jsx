import { AiOutlineInstagram ,AiFillFacebook,AiFillLinkedin,AiFillGithub,AiFillHome,AiFillPhone,AiOutlineMail} from "react-icons/ai";
const Footer = () => {
    return (
        <>

            <div className="container-fluid my-2"
                style={{ backgroundColor: "black" }}
            >

                <footer
                   className="text-center text-lg-start text-white"

              
                >

                    <section
                        className="d-flex justify-content-between p-4 text-white"
                        style={{ backgroundColor: "rgb(162, 0, 255)" }}
                    >

                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href="https://www.instagram.com/8978aman/" className="text-white me-4">
                                <AiOutlineInstagram size={25}/>
                            </a>
                            <a href="https://www.facebook.com/aman.sah.7921975" className="text-white me-4">
                                <AiFillFacebook size={25}/>
                            </a>
                          
                            <a href="https://www.linkedin.com/in/aman-kumar-sah-90b433218/" className="text-white me-4">
                               <AiFillLinkedin size={25}/>
                            </a>
                            <a href="https://github.com/Amansonukumarsah" className="text-white me-4">
                               <AiFillGithub size={25}/>
                            </a>
                        </div>

                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Company name</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "130px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p className="text-white">
                                        A-GALLERY
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase text-white fw-bold"> Images</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "70px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Birds</a>
                                    </p>
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Perosnal_Pic</a>
                                    </p>
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Family_Pic</a>
                                    </p>
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Nature</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "120px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" style={{textDecoration:'None'}} className="text-white">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "80px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p><AiFillHome/> Bihar Madhubani India</p>
                                    <p><AiOutlineMail/> amankumarshah8102@gmail.com</p>
                                    <p><AiFillPhone/> 6200894044</p>
                                    <p><AiFillPhone/> 7808435522</p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgb(162, 0, 255)" }}
                    >
                        © 2023 Copyright:
                    </div>

                </footer>

            </div>

        </>

    )
}

export default Footer;
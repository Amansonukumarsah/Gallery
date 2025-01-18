import Aman from './Image/IMG_5598.jpg'
import './CSS/Family.css'
// import { useState } from 'react'
import Footer from './Footer'
import data from './Imagegallery'
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
const Family = () => {

    const [fmodel, setfmodel] = useState(false)
    const [tempimg, settempimg] = useState(Aman);
    const [tempimg1, settempimg1] = useState(Aman);
    const [count, setcount] = useState(0)
    const [count2, setcount2] = useState(0)

    const [model, setmodel] = useState(false);
    

    var arr1 = []
    data.map((img, key) => (
        arr1.push(img.img)
    ))

    
    const [count1, setcount1] = useState(arr1.length - 1)

    const next = () => {
        settempimg(arr1[count])
        setcount(count + 1)
        if (count == arr1.length - 1) {
            setcount(0)
        }
    }

    const prev = () => {
        settempimg(arr1[count1])
        setcount1(count1 - 1)
        if (count1 == 0) {
            setcount1(arr1.length - 1)
        }
    }


    const change = () => {
        setfmodel(true)
    }

    const change1 = () => {
        setfmodel(false)
    }

    const getImgage = (imgsrc) => {
        settempimg(imgsrc)
        setmodel(true)
    }

    var arr = []
    data.map((img, key) => (
        arr.push(img.img)
    ))

    const nextnext = () => {
        settempimg1(arr[count2])
        setcount2(count2 + 1)
        if (count2 == arr.length - 1) {
            setcount2(0)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            nextnext();
        }, 4000);
        // return () => clearTimeout(timer);
    },)


    return (
        <>
            <div className={model ? "model open" : "model"}>
                <h1 className="prev" onClick={prev}>&#60;</h1>
                <img className="full_img" onClick={() => setmodel(false)} src={tempimg} alt="" />
                <ImCross size={45} onClick={() => setmodel(false)} />

                <h1 className="next" onClick={next}>&#62;</h1>

            </div>

            <div className="container-fluid fsbody">
                <div className="row">
                    <div className="fsimage">
                        <div className='fsimage1'>
                            <img src={tempimg1} alt="" />
                        </div>
                        <div className='left'>
                            <strong>sonu</strong>
                        </div>


                    </div>
                </div>
            </div>



            <div className="container-fluid family_body my-1">
                <div className="row">
                    {
                        data.map((img, key) => (
                            <div className="col-4 my-5">

                        <div onMouseEnter={change}
                            onMouseLeave={change1}
                            className="family_content_body card">


                            <div className={fmodel ? 'family_content' : 'family_content1'}>
                                <div className='text-center'>
                                    <h1 className='text-center' style={{ 'marginLeft': '50px' }} >Aman</h1>
                                </div>

                                <div className='text-center'>
                                    <img onClick={() => getImgage(img.img)} style={{ 'width': '400px', 'height': '400px' }} src={tempimg} alt="" />
                                </div>
                            </div>


                            <div className={fmodel ? 'family_content1' : 'family_content'}>
                                <img className='f_image' src={tempimg} alt="aman" />
                                <h1>Aman</h1>
                            </div>

                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Family
import React, { useState } from 'react'
// import Slider from './Compimg/Slider';
// import Aman from './Image/Antika.jpeg'
import logo from './Image/IMG_0502.JPG'
import img from './Image/IMG_0880.JPG'
import img2 from './Image/IMG_3144.JPG'


// import Aman from './Image/IMG_3417.JPG'
// import img from "../src/img/Aman.jpeg"
// import logo from "../src/img/Logo.jpeg"
// import man from "../src/img/man.jpg"
// import edu from "../src/img/edu.jpg"
// import Slidata from "./Slidata";



const Slidert = () => {
  const [data,setdata]=useState('')
  const [count,setcount]=useState(0)
  const click=()=>{
    setcount(count + 1)
    if(count===1)
    {
      setdata(img)
    }
    else if(count===2)
    {
      setdata(logo)
    }
    else{
      setdata(img2)
      if(count===3)
      {
        setcount(0)
      }
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="hello">
              <img style={{height:'auto',width:'100%'}} src={(count===0)?img:data} alt="aman" />
            </div>
            <button onClick={click} className="btn btn-primary my-3">Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slidert;
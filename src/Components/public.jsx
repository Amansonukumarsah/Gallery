import { useState } from 'react';
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useFetchDataQuery } from '../service/HandleAddImageApi';
import "./CSS/Birds.css";
import Comment from './Comment';
import Footer from './Footer';
const Public = () => {
  const [model, setmodel] = useState(false);
  const [tempimg, settempimg] = useState('');
  const {type} = useParams();
  console.log(".........pubic type......",type)
  // will cause the destructuring { type }
  const { data: fetchData } = useFetchDataQuery({type});

  console.log("........fetchData...public...........",fetchData);
  
  const getImg = (imgsrc) => {
    settempimg(imgsrc)
    setmodel(true)
  }
  return (
    <>
      <div className='gallery_body'>
        <div className={model ? "model open" : "model"}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <img src={tempimg} onClick={() => setmodel(false)} alt="" className="img-fluid" />
              </div>
              <div className="col-6">
                <Comment />
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid">
          <div className="row">

            {fetchData && fetchData.length > 0 ? (
              fetchData.map(item => (
                <div key={item.id}className="col-6 card card_gallery my-3 offset-md-3" >
                  <img src={`data:${item.mimeType};base64,${item.image}`} alt="" className="card-img-top" />
                  <h1>{item.description}</h1>
                  <div className="card-body">
                    <p className="card-text">Images Are Good</p>
                  </div>
                  <div className="">
                    <span className="mx-2"><AiFillLike size={30} /></span>
                    <span className="mx-3"><AiFillDislike size={30} /></span>
                    <span onClick={() => getImg(item.image)}  >comment</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No Image available</p>
            )}



            {/* {
              data.map((img, ind) => (
                <div className="col-6 card card_gallery my-3 offset-md-3" >
                  <img src={img.img} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div className="">
                    <span className="mx-2"><AiFillLike size={30} /></span>
                    <span className="mx-3"><AiFillDislike size={30} /></span>
                    <span onClick={() => getImg(img.img)}  >comment</span>
                  </div>
                </div>
              ))
            } */}


          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Public;
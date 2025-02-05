import { useState } from 'react';
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useFetchDataQuery } from '../service/HandleAddImageApi';
import "./CSS/Public.css";
import Comment from './Comment';
const Public = () => {
  const [model, setmodel] = useState(false);
  const [tempimg, settempimg] = useState('');
  const {type} = useParams();
  const [page,setPage] = useState(0);
  const [limit] = useState(10);
  const { data: fetchData } = useFetchDataQuery({type,page,limit});
  const getImg = (imgsrc) => {
    settempimg(imgsrc)
    setmodel(true)
  }
  // console.log("public......"+fetchData);
  return (
    <>
    {/* get single image */}
      <div className='gallery_body'>
        <div className={model ? "model open" : "model"}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
              <img
              src={`data:image/png;base64,${tempimg}`}
              alt="Alter Pic"
              className="img-fluid"
              onClick={() => setmodel(false)}
              />
              </div>
              <div className="col-6">
                <Comment />
              </div>
            </div>
          </div>
        </div>

        {/* Normal form get All image*/}
        <div className="container-fluid">
          <div className="row">
            {fetchData && fetchData.length > 0 ? (
              fetchData.map(item => (
                <div key={item.id} className="col-6 card card_gallery my-3 offset-md-3" >
                  <div className = "card-header">{item.userName}</div>
                  <img
                  src={`data:${item.mimeType};base64,${item.image}`}
                  alt=""
                  className="card-img-top"
                  />
                  <h1>{item.description}</h1>
                  <div className="card-body">
                    <p className="card-text">Images Are Good</p>
                  </div>
                  <div className="">
                    <span className="mx-2"><AiFillLike size={30} /></span>
                    <span className="mx-3"><AiFillDislike size={30} /></span>
                    <span onClick={() => getImg(item.image)}>comment</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No Image available</p>
            )}

          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Public;

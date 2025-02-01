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
  const [page,setPage] = useState(0);
  const [limit] = useState(10);
  const { data: fetchData } = useFetchDataQuery({type,page,limit});

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
                  <div className = "card-header">Aman</div>
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

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Public;
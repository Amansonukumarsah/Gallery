import React, { useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
// import { useFetchDataQuery } from '../service/HandleAddImageApi';
import { useFetchDataQuery } from '../service/HandleAddImageApi';
import "./CSS/Personal.css";
// import Footer from './Footer';
const Personal = () => {

    // const [model, setmodel] = useState(false);
    // const [tempimg, settempimg] = useState('');
    // const [count, setcount] = useState(0);
    
    const [page,setPage] = useState(0);
    const [limit] = useState(10);
    const {type}  = useParams();

    // console.log("....useParams......",type)

    const { data: fetchData,isLoading,isError } = useFetchDataQuery({type,page,limit});

    // console.log(",,,,,,,,,,,,,,,",fetchData)

    // var arr = []
    // fetchData.map((img, key) => (
    //     arr.push(img.image)
    // ))

    // const [count1, setcount1] = useState(arr.length - 1);

    // console.log(".........",fetchData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !fetchData) {
        return <div>Error loading data</div>;
    }

    // Add the functationality of pagination.

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 0)); // Ensure page doesn't go below 0
      };

    // const getImgage = (imgsrc) => {
    //     settempimg(imgsrc)
    //     setmodel(true)
    // }


    // const next = () => {
    //     settempimg(arr[count])
    //     setcount(count + 1)
    //     if (count == arr.length - 1) {
    //         setcount(0)
    //     }
    // }

    // const prev = () => {
    //     settempimg(arr[count1])
    //     setcount1(count1 - 1)
    //     if (count1 == 0) {
    //         setcount1(arr.length - 1)
    //     }
    // }

    return (
        <>
             {/* <div className={model ? "model open" : "model"}>
                   <h1 className="prev" onClick={prev}>&#60;</h1>
                  <img className="full_img" onClick={() => setmodel(false)} src={tempimg} alt="" />
                   <ImCross size={45} onClick={() => setmodel(false)} />

                     <h1 className="next" onClick={next}>&#62;</h1>

                </div> */}
            
            <div className="pagination-controls">
                <button onClick={handlePrevPage} disabled={page === 0}>
                Previous
                </button>
                <button onClick={handleNextPage} disabled={fetchData.last}>
                Next
                </button>
            </div>

            <div className="personalbody">
                <div className="container personalbody1">
                    <div className="row">
                        <div className="col-12 card p1">
                            <h1 className="colortext my-2">Photos</h1>
                            <div className="d-flex my-4 NF_pic_link">
                                <NavLink to="/Personal" className="mx-2">Normal_pic</NavLink>
                                <NavLink to="/Personal/Fest" className="mx-1">Fest_pic</NavLink>
                            </div>


                            <div className="container-fluid">
                                <div className="row">
                                     {
                                         fetchData.map((img, key) => (
                                             <div className="col-3 p3 my-1" key={key}>
                                                <img src={`data:${img.mimeType};base64,${img.image}`} alt="" />
                                                {/*  onClick={getImgage(img.image)} */}
                                             </div>
                                         ))
                                     }
                                      
                                 </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
            </div>  */}

             {/* <Footer/> */}

        </>
    )
}
export default Personal;




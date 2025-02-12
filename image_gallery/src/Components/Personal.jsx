import React, { useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useFetchDataQuery } from '../service/HandleAddImageApi';
import "./CSS/Personal.css";

const Personal = () => {
    const [page, setPage] = useState(0);
    const [limit] = useState(10);
    const { type } = useParams();
    const { data: fetchData, isLoading, isError } = useFetchDataQuery({ type, page, limit });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError || !fetchData) {
        return <div>Error loading data</div>;
    }
    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };
    const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
    };
    const getimage=(image)=>{
        console.log("..........getimage............");
    }
    return (
        <>
            <div className="container-fluid personalbody1">
                <div className="row">
                    <div className="col-12 card p1">
                        <h1 className="colortext my-2">Photos</h1>
                        <div className="pagination-controls">
                            <button onClick={handlePrevPage} disabled={page === 0}>
                                Previous
                            </button>
                            <button onClick={handleNextPage} disabled={fetchData.last}>
                                Next
                            </button>
                        </div>
                        <div className="d-flex my-4 NF_pic_link">
                            <NavLink to="/Personal" className="mx-2">Normal_pic</NavLink>
                            <NavLink to="/Personal/Fest" className="mx-1">Fest_pic</NavLink>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                {
                                    fetchData.map((img, key) => (
                                        <div className="col-4 p3 my-5" key={key}>
                                            <img src={`data:${img.mimeType};base64,${img.image}`} alt="" />
                                            onClick={getimage(img.image)}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default Personal;

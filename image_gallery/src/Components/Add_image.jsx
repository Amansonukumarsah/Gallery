import React, { useState } from "react";
import { usePostDataMutation } from "../service/HandleAddImageApi";

import "./CSS/Add.css";
import Footer from './Footer';

const Add_Image = () => {
    const [description, setDesc] = useState("");
    const [picClickBy, setPic] = useState("");
    const [type, settype] = useState("");
    const [image,setImage] =useState("");
    const [postData, { isLoading, error, isSuccess }] = usePostDataMutation();
    // const [PostImageData] = usePostImageDataMutation();


    const submit = async (e) => {
        e.preventDefault();
        console.log("Form data:", description, picClickBy, image,type);
        // console.log(typeof description);
        const formData = new FormData();
        formData.append("description", description);
        formData.append("picClickBy", picClickBy);
        formData.append("type", type);
        formData.append("image", image); // Assuming `image` is a file object
        try {
            const res = await postData(formData);
                if (res && res.data ) {
                    alert("Image have been uploaded successfully");
                    console.log("Data submitted successfully:", res.data);
                    // Optionally handle success here (e.g., show a success message, redirect, etc.)
                    setDesc(""); // Clear form fields after successful submission
                    setPic("");
                    settype("");
                    setImage(""); // Clear the image state after successful submission
                } else {
                    console.log("Failed to submit image data",res);
                }
        } catch (error) {
            console.error("Error submitting data:", error.message);
        }
    };
    

    return (
        <>
            <div className="container-fluid add">
                <div className="row">
                    <div className="col-12 my-2">
                        <h1 className="head">Add the image in Gallery...</h1>
                        <form className="my-5"encType="multipart/form-data" >

                            <div className="mb-1" >
                            <label className="colortext">Upload Image : </label>
                                <input 
                                type="file" 
                                id="file-input" 
                                name="image"
                                onChange={(e) => setImage(e.target.files[0])} 
                                />
                            </div>

                            <div className="form-group my-3">
                                <label className="colortext">Pic_Click_By : </label>
                                <input
                                    type="text"
                                    className="form-control-text mx-2"
                                    id="exampleFormControlFile1"
                                    name="picClickBy"
                                    value={picClickBy}
                                    onChange={(e) => setPic(e.target.value)}
                                />
                            </div>

                            <div className="form-group my-3">
                                <label htmlFor = "access right" className="colortext">Type : </label>
                                    <select name = "access right" value={type} onChange={(e) => settype(e.target.value)}>
                                        <option value="">Select Type</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Public">Public</option>
                                    </select>
                            </div>

                            <div className="form-group my-3">
                                <label className="colortext">Description_about_image</label>
                                <textarea
                                    type="text"
                                    className="form-control-text mx-2"
                                    id="exampleFormControlFile1"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </div>

                            <button onClick={submit}  className="btn btn-warning">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Add_Image;


const Comment = () => {
    // const [msg, setmsg] = useState("");

    // const [PostCommentData, { isLoading, error, isSuccess }] = usePostCommentDataMutation()

    // const { data: fetchData } = useFetchDataQuery();



    // const submit = async (e) => {
    //     e.preventDefault();

    //     console.log("....Form data:", msg);

    //     try {
    //         const res = await PostCommentData({
    //             comment: msg,
    //         });
    //         if (res && res.data) {
    //             console.log("Data submitted successfully:", res.data);
    //             // Optionally handle success here (e.g., show a success message, redirect, etc.)
    //             setmsg("")
    //         } else {
    //             console.log("Failed to submit image data");
    //         }
    //     } catch (error) {
    //         console.error("Error submitting data:", error.message);
    //     }
    // }
    return (
        <>

            <div>
                <h1>COMMENT</h1>
            </div>
        </>
    )

}

export default Comment;




{/* <section style={{ backgroundColor: '#eee' }}>
                <div className="container-fluid my-5 py-5">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="">
                                        <img className="rounded-circle shadow-1-strong "
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="10px"
                                            height="10px" />
                                        <div>
                                            <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                                            <p className="text-muted small mb-0">
                                                Shared publicly - Jan 2020
                                            </p>
                                        </div>
                                    </div>

                                    {fetchData && fetchData.length > 0 ? (
                                        fetchData.map(item => (
                                            <p key={item.id}>Data: {item.comment}</p>
                                        ))
                                    ) : (
                                        <p>No data available</p>
                                    )}


                                    <div className="small d-flex justify-content-start">
                                        <a href="#!" className="d-flex align-items-center me-3">
                                            <i className="far fa-thumbs-up me-2"></i>
                                            <p className="mb-0">Like</p>
                                        </a>

                                        <a href="#!" className="d-flex align-items-center me-3">
                                            <i className="fas fa-share me-2"></i>
                                            <p className="mb-0">Share</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }} >
                                    <div className="d-flex flex-start w-100">
                                        {/* <img className="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                                            height="40" /> */}
            //                             <div data-mdb-input-init className="form-outline w-100">
            //                                 <textarea
            //                                     className="form-control"
            //                                     id="textAreaExample"
            //                                     rows="4"
            //                                     style={{ background: '#fff' }}
            //                                     value={msg}
            //                                     onChange={(e) => setmsg(e.target.value)}
            //                                 >
            //                                 </textarea>
            //                                 <label className="form-label" for="textAreaExample">Message</label>
            //                             </div>
            //                         </div>
            //                         <div className="float-end mt-2 pt-1">
            //                             <button onClick={submit} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm">Post comment</button>
            //                             <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary btn-sm">Cancel</button>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section> */}
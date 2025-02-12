import { useState } from "react";

const Comment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Comment submitted:", formData);
        // Here, you can handle comment submission (e.g., send to an API)
    };

    return (
        <section className="comment-section py-5" style={{ maxWidth: "460px" }}>
            <div className="container">
                <div className="comments-list">
                    {/* Comment 1 */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <img src="https://via.placeholder.com/50" className="rounded-circle me-3" alt="User Avatar" />
                                <div>
                                    <h5 className="card-title mb-0">John Doe</h5>
                                    <small className="text-muted">Posted on July 17, 2024</small>
                                </div>
                            </div>
                            <p className="card-text">This is a great article! I learned a lot from it. Keep up the good work!</p>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-outline-primary me-2">
                                    <i className="bi bi-hand-thumbs-up"></i> Like
                                </button>
                                <button className="btn btn-sm btn-outline-secondary">
                                    <i className="bi bi-reply"></i> Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="commentContent" className="form-label">Comment</label>
                                <textarea 
                                    className="form-control" 
                                    id="comment" 
                                    rows="3" 
                                    placeholder="Your Comment"
                                    value={formData.comment}
                                    onChange={handleChange} 
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Post Comment</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comment;

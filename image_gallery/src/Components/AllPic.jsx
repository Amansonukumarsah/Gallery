import "./CSS/Birds.css";
const AllPic = () => {
  return (
    <>
<div class="container">

  <h1 class="fw-light text-center text-lg-start mt-4 mb-0">Thumbnail Gallery</h1>

  {/* <hr class="mt-2 mb-5"> */}

  <div class="row text-center text-lg-start">

    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{width: "150px", zIndex: "1"}}/>
      </a>
    </div>

    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{width: "150px", zIndex: "1"}}/>
      </a>
    </div>

    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{width: "150px", zIndex: "1"}}/>
      </a>
    </div>

    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{width: "150px", zIndex: "1"}}/>
      </a>
    </div>
    
  </div>

</div>
    </>
  )
}

export default AllPic;


const ReviewApplication = ({ user }) => {
  return (
    <label className="w-full md:w-1/3 lg:w-1/3 px-3 mb-6 md:mb-0">
      <div className="bg-white border border-dark rounded-lg shadow-md overflow-hidden m-1">
        <img src={user.image} alt="Applicant 1" className="w-full object-contain h-48" />
        <div className="p-2">
          <div className="font-bold text-xl">{`${user.name}  ${user.surname}`}</div>
          <p className="text-gray-700 text-base">{`${user.department} ${user.degree}.sınıf`} </p>
        </div>
        <div className="row text-center ms-2 me-2">
          <div className="p-1">
            <a href="/#" className="page-link">
              Download Transcript
            </a>
          </div>
          <div className="p-1">
            <a href="/#" className="page-link">
              Download Criminal Record
            </a>
          </div>
          <div className="p-1">
            <a href="/#" className="page-link">
              Download Political Party Document
            </a>
          </div>
          <div className="p-1">
            <a href="/#" className="page-link">
              Download Application Letter
            </a>
          </div>
        </div>
        <div className="row text-center p-2">
          <div className="col-md-6">
            <button className="btn btn-danger">Reject</button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-success">Approve</button>
          </div>
        </div>
      </div>
    </label>
  );
};

export default ReviewApplication;

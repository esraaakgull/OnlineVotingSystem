import { approveApplication, downloantTranscriptFromDatabase } from "../helpers/api";
import photo from '../assets/images/profilePhoto.png';
import UserContext from "../contexts/UserContext";


const ReviewApplication = ({user}) => {
  const handleApprove = async () => {
    const resp = await approveApplication(user.applicationId);
    console.log(resp);
  }
   
  
  
  return (
    <div className="w-full md:w-1/3 lg:w-1/3 px-3 mb-6 md:mb-0">
      <div className="bg-white border border-dark rounded-lg shadow-md overflow-hidden m-1">
        <img src={photo} alt="Applicant 1" className="w-full object-contain h-48" />
        <div className="p-2">
          <div className="font-bold text-xl">{`${user.studentName}  ${user.studentSurname}`}</div>
          <p className="text-gray-700 text-base">{`${user.departmentName} ${user.grade}.sınıf`} </p>
        </div>
        <div className="row text-center ms-2 me-2">
          <div className="p-1">
            <a href= {user.applicationRequest} className="page-link" target="_blank" >
              Download Transcript
            </a>
          </div>
          <div className="p-1">
            <a href = {user.studentCertificate} className="page-link" target="_blank">
              Download Student Certificate
            </a>
          </div>
          <div className="p-1">
            <a href={user.political} className="page-link" target="_blank">
              Download Political Party Document
            </a>
          </div>
          <div className="p-1">
            <a href={user.applicationRequest} className="page-link" target="_blank">
              Download Application Letter
            </a>
          </div>
        </div>
        <div className="row text-center p-2">
          <div className="col-md-6">
            <a className="btn btn-danger">Reject</a>
          </div>
          <div className="col-md-6">
            <a className="btn btn-success" onClick={handleApprove} >Approve</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewApplication;

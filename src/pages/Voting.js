import profilePhoto from '../assets/images/profilePhoto.png';
import ApplicantCard from '../components/ApplicantCard';

const Voting = () => {
  return (
    <div className="flex-grow flex flex-col justify-center pb-3">
      <div className="flex justify-between items-center bg-gray-100 py-4 px-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 border-2 border-gray-300 rounded-full py-2 px-4"
          />
        </div>
        <div className="flex items-center">
          <button className="py-2 px-4 ml-4">
            <i className="fa-regular fa-bell"></i>
          </button>
          <img src={profilePhoto} alt="" className="h-8 w-8 object-cover rounded-full mr-2" />
          <span className="text-gray-700 font-medium">Ali Dönmez</span>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold p-2">Applicants</h1>
        <form className="flex flex-col">
          <div className="flex flex-wrap -mx-3 mb-4">
            <ApplicantCard />
            <ApplicantCard />
            <ApplicantCard />
            <ApplicantCard />
            <ApplicantCard />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              Submit Selection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Voting;

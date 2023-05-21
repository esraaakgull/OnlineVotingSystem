import profilePhoto from '../assets/images/profilePhoto.png';
import Footer from '../layouts/Footer';

const Applications = () => {
  return (
    <div className="flex-grow flex flex-col justify-center-top">
      <div className="flex justify-between items-center bg-gray-200 py-4 px-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 border-2 border-gray-300 rounded-lg py-2 px-4"
          />
        </div>
        <div className="flex items-center">
          <button className="py-2 px-4 ml-4">
            <i className="fa-regular fa-bell"></i>
          </button>
          <img src={profilePhoto} className="h-8 w-8 object-cover rounded-full mr-2" alt="" />
          <span className="text-gray-700 font-medium">Ali Dönmez</span>
        </div>
      </div>
      <div className="main mt-5">
        <form className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="transcript">
              Transcript
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="transcript"
              type="file"
            />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="PartyDocument">
              Political Party Document
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="PartyDocument"
              type="file"
            />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="transcript">
              Student Certificate
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="transcript"
              type="file"
            />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="PartyDocument">
              Letter of Application
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="PartyDocument"
              type="file"
            />
          </div>
          <button
            className="bg-red-500 rounded-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="submit">
            Submit Documents
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Applications;

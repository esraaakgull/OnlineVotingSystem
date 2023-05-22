import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Applications = () => {
  return (
    <div className="flex-grow flex flex-col justify-center-top">
      <Header />
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

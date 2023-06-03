import Header from '../../layouts/Header';

const EnterSchedule = () => {
  return (
    <div className="flex-grow flex-col justify-center-top vh-100 ">
      <Header />
      <div className="mt-4">
        <div className="text-center ms-4 me-4 border border-dark rounded ">
          <div className="m-2 p-2">
            <h1 className="text-2xl font-extrabold mb-6">Application Start and End Date</h1>
            <label htmlFor="start-date" className="font-bold mr-2">
              Start Date:
            </label>
            <input
              type="datetime-local"
              id="start-date"
              name="start-date"
              className="border border-gray-400 p-2"
            />
            <label htmlFor="end-date" className="font-bold mr-2">
              End Date:
            </label>
            <input
              type="datetime-local"
              id="end-date"
              name="end-date"
              className="border border-gray-400 p-2"
            />
            <button
              id="submit-btn"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Set
            </button>
          </div>
          <div className="m-2 p-2">
            <h1 className="text-2xl font-extrabold mb-6">Election Start and End Date</h1>

            <label htmlFor="start-date" className="font-bold mr-2">
              Start Date:
            </label>
            <input
              type="datetime-local"
              id="start-date"
              name="start-date"
              className="border border-gray-400 p-2"
            />
            <label htmlFor="end-date" className="font-bold mr-2">
              End Date:
            </label>
            <input
              type="datetime-local"
              id="end-date"
              name="end-date"
              className="border border-gray-400 p-2"
            />
            <button
              id="submit-btn"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterSchedule;

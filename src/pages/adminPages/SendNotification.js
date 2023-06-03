import Header from '../../layouts/Header';

const SendNotification = () => {
  return (
    <div className="flex-grow flex-col justify-content-center">
      <Header />
      <div className="row align-content-center p-4 ">
        <div className="col-md-12">
          <h5 className="text-center font-bold text-2xl mb-4">Send Notification</h5>
        </div>
        <div className="col"></div>
        <div className="col-md-6 p-2 ms-4 me-4 border border-dark rounded ">
          <form>
            <div className="col p-2">
              <label htmlFor="file" className="block font-medium">
                File:
              </label>
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Title.."
                className="w-full bg-gray-200 border-2 border-gray-300 rounded py-2 px-4"
              />
            </div>
            <div className="col p-2">
              <label htmlFor="title" className="block font-medium">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title.."
                className="w-full bg-gray-200 border-2 border-gray-300 rounded py-2 px-4"
              />
            </div>
            <div className="col p-2">
              <label htmlFor="message" className="block font-medium">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="10"
                className="w-full bg-gray-200 border-2 border-gray-300 rounded py-2 px-4"
                placeholder="Type your message here..."></textarea>
            </div>
            <div className="col-md-3 p-2 ">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default SendNotification;

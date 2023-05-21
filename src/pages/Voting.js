import profilePhoto from '../assets/images/profilePhoto.png';

const Voting = () => {
  return (
    <div className="flex-grow flex flex-col justify-center ">
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
        <h1 className="text-3xl font-bold mb-4">Applicants</h1>

        <form className="flex flex-col">
          <div className="flex flex-wrap -mx-3 mb-4">
            <label className="w-full md:w-1/3 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden m-1">
                <img src={profilePhoto} alt="Applicant 1" className="w-full object-cover h-48" />
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">Applicant 1</div>
                  <p className="text-gray-700 text-base">Bilgisayar Mühendisliği 3.sınıf</p>
                </div>
                <div className="px-4 py-3 bg-gray-100">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="applicant"
                      value="applicant1"
                    />
                    <span className="ml-2">Select Applicant 1</span>
                  </label>
                </div>
              </div>
            </label>

            <label className="w-full md:w-1/3 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden m-2">
                <img src={profilePhoto} alt="Applicant 2" className="w-full object-cover h-48" />
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">Applicant 2</div>
                  <p className="text-gray-700 text-base">Bilgisayar Mühendisliği 3.sınıf</p>
                </div>
                <div className="px-4 py-3 bg-gray-100">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="applicant"
                      value="applicant2"
                    />
                    <span className="ml-2">Select Applicant 2</span>
                  </label>
                </div>
              </div>
            </label>

            <label className="w-full md:w-1/3 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden m-1">
                <img src={profilePhoto} alt="Applicant 2" className="w-full object-cover h-48" />
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">Applicant 3</div>
                  <p className="text-gray-700 text-base">Bilgisayar Mühendisliği 3.sınıf</p>
                </div>
                <div className="px-4 py-3 bg-gray-100">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="applicant"
                      value="applicant3"
                    />
                    <span className="ml-2">Select Applicant 3</span>
                  </label>
                </div>
              </div>
            </label>

            <label className="w-full md:w-1/3 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden m-1">
                <img src={profilePhoto} alt="Applicant 2" className="w-full object-cover h-48" />
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">Applicant 4</div>
                  <p className="text-gray-700 text-base">Bilgisayar Mühendisliği 3.sınıf</p>
                </div>
                <div className="px-4 py-3 bg-gray-100">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="applicant"
                      value="applicant4"
                    />
                    <span className="ml-2">Select Applicant 4</span>
                  </label>
                </div>
              </div>
            </label>
            <label className="w-full md:w-1/3 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden m-1">
                <img src={profilePhoto} alt="Applicant 2" className="w-full object-cover h-48" />
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">Applicant 5</div>
                  <p className="text-gray-700 text-base">Bilgisayar Mühendisliği 3.sınıf</p>
                </div>
                <div className="px-4 py-3 bg-gray-100">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="applicant"
                      value="applicant4"
                    />
                    <span className="ml-2">Select Applicant 5</span>
                  </label>
                </div>
              </div>
            </label>
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

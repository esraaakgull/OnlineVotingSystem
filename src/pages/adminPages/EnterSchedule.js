import { useEffect, useState } from 'react';
import Header from '../../layouts/Header';
import { getAllApplicationDates, getAllElectionDates, setApplicationDates, setElectionDates } from '../../helpers/api';
import { showErrorNotification, showSuccessNotification } from '../../helpers/toasts';

const EnterSchedule = () => {

  const [electionStartDate,setElectionStartDate] = useState("");
  const [electionFinishDate,setElectionFinishDate] = useState("");
  const [applicationStartDate,setApplicationStartDate] = useState("");
  const [applicationFinishDate,setApplicationFinishDate] = useState("");


  const [alreadyApplications,setAlreadyApplications] = useState([]);
  const [alreadyElections, setAlreadyElectionDates] = useState([]);

  const handleTogetAllApplicationDates = async () => {
    const response = await getAllApplicationDates();
    
    setAlreadyApplications(response.data);
    console.log(alreadyApplications)
  }
  

  const handleToGetAllElectionDates = async () => {
    const response = await getAllElectionDates();
    setAlreadyElectionDates(response.data);
    console.log(alreadyElections)
  }

  useEffect( () => {
    handleTogetAllApplicationDates();
    handleToGetAllElectionDates();
  }, [])

  const handleDates = async () => {
    const electResponse= await setElectionDates(electionStartDate,electionFinishDate);
    const applicResponse = await setApplicationDates(applicationStartDate,applicationFinishDate);
    if(electResponse.status === 200 && applicResponse.status === 200) {
      showSuccessNotification("Tarihler başarılı bir şekilde kuruldu!");
    }else{
      showErrorNotification("Bir hata oluştu!");
    }
  }


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
              onChange={(e) => {setApplicationStartDate(e.target.value)}}
            />
            <label htmlFor="end-date" className="font-bold mr-2">
              End Date:
            </label>
            <input
              type="datetime-local"
              id="end-date"
              name="end-date"
              className="border border-gray-400 p-2"
              onChange={(e) => {setApplicationFinishDate(e.target.value)}}
            />
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
              onChange={(e) => {setElectionStartDate(e.target.value)}}
            />
            <label htmlFor="end-date" className="font-bold mr-2">
              End Date:
            </label>
            <input
              type="datetime-local"
              id="end-date"
              name="end-date"
              className="border border-gray-400 p-2"
              onChange={(e) => {setElectionFinishDate(e.target.value)}}
            />
            <br/>
            <br/>
            <br/>

            <button
              id="submit-btn"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleDates}>
              Set Dates
            </button>
          </div>
          <div className="table-container m-3">
            <p className='text-left font-bold'>Applications Dates</p>
            <table className="table rounded-lg border-collapse border border-black ">
              <tbody>
                {alreadyApplications.map((application) => {
                  <tr>
                    <td width="415">
                      <p className="text-left">
                        November 12th 2023 (09:00) – November 16th 2023 (17:00)
                        
                      </p>
                      <p className="text-left">
                        <strong>Application to be a candidate</strong>
                      </p>
                    </td>
                  </tr>
                })}
                
                
              </tbody>
            </table>
          </div>
          <div className="table-container m-3">
            <p className='text-left font-bold'>Election Dates</p>
            <table className="table rounded-lg border-collapse border border-black ">
              <tbody>
                {alreadyElections.map((election,index) => {
                  <tr key={index}>
                    <td width="415">
                      <p className="text-left">
                        November 12th 2023 (09:00) – November 16th 2023 (17:00)
                        
                      </p>
                      <p className="text-left">
                        <strong>Application to be a candidate</strong>
                      </p>
                    </td>
                  </tr>
                })}
                
                
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EnterSchedule;

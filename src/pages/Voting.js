import classNames from 'classnames';
import ApplicantCard from '../components/ApplicantCard';
import Header from '../layouts/Header';
import { applicants } from '../constants/applicants';
import { useContext, useEffect, useState } from 'react';
import { showSuccessNotification } from '../helpers/toasts';
import UserContext from '../contexts/UserContext';

const Voting = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(0);
  const userContext = useContext(UserContext);
  const handleClick = () => {
    userContext.setIsVoted(true);
    userContext.setVotedFor(selectedApplicant);
    showSuccessNotification('Thank you for voting!');
  };

  useEffect(() => {
    setSelectedApplicant(userContext.votedFor);
  }, []);

  return (
    <div className="flex-grow flex flex-col justify-center pb-3">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center">
        {userContext.isVoted && <p className="text-danger">You have voted.</p>}
        <h1 className="text-3xl font-bold p-2">Applicants</h1>
        <form className="flex flex-col">
          <div className="flex flex-wrap -mx-3 mb-4">
            {Object.keys(applicants).map((applicant, index) => {
              return (
                <ApplicantCard
                  key={`Applicant${index}`}
                  user={applicants[applicant]}
                  setSelectedApplicant={setSelectedApplicant}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={classNames('bg-red-700 text-white font-bold py-2 px-4 rounded-full', {
                'bg-red-400': userContext.isVoted
              })}
              onClick={handleClick}
              disabled={userContext.isVoted}>
              Submit Selection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Voting;

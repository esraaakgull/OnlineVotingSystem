import classNames from 'classnames';
import ApplicantCard from '../../components/ApplicantCard';
import Header from '../../layouts/Header';
import { applicants } from '../../constants/applicants';
import { useContext, useEffect, useState } from 'react';
import { showErrorNotification, showSuccessNotification } from '../../helpers/toasts';
import UserContext from '../../contexts/UserContext';

const Voting = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const userContext = useContext(UserContext);
  const handleClick = () => {
    if (!selectedApplicant) {
      showErrorNotification('You should select a candidate.');
      return;
    }
    userContext.setIsVoted(true);
    userContext.setVotedFor(selectedApplicant);
    showSuccessNotification('Voting successful!');
  };

  useEffect(() => {
    if (userContext.votedFor) setSelectedApplicant(userContext.votedFor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-grow flex flex-col justify-center pb-3">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center">
        <p
          className={classNames('h4 font-weight-bold p-2', {
            'text-success': userContext.isVoted,
            'text-danger': !userContext.isVoted
          })}>
          {userContext.isVoted
            ? 'Thank you! You have voted for this election.'
            : 'Please select one candidate for election.'}
        </p>
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
              type="button"
              className={classNames('bg-red-700 text-white font-bold py-2 px-4 rounded-full', {
                'bg-red-400': userContext.isVoted,
                'hover:bg-red-600': !userContext.isVoted
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

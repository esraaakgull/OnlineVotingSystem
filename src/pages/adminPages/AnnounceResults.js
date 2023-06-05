import Header from '../../layouts/Header';
import ElectionResultCard from '../../components/ElectionResultCard';
import { useEffect, useState } from 'react';
import { getAllResultsFromDatabase } from '../../helpers/api';

const AnnounceResults = () => {
  const [electionResults, setElectionResults] = useState([]);

  const getResults = async () => {
    const res = await getAllResultsFromDatabase();
    setElectionResults(res.data);
  };

  useEffect(() => {
    getResults();
  }, []);
  return (
    <div className="flex-grow flex flex-col justify-center-top">
      <Header />
      <div className="mt-4">
        <div className="row justify-content-center pb-2">
          <p className="h4 text-danger font-weight-bold">Election Results</p>
        </div>
        <div className="row justify-content-center pb-2">
          <button className="btn btn-danger rounded">Share Results</button>
        </div>
        {electionResults.map((dept, index) => {
          return <ElectionResultCard key={index} dept={dept} />;
        })}
      </div>
    </div>
  );
};

export default AnnounceResults;

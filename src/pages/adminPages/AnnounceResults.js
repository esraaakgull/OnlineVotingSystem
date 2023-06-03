import Header from '../../layouts/Header';
import ElectionResultCard from '../../components/ElectionResultCard';

const AnnounceResults = () => {
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
        <ElectionResultCard />
        <ElectionResultCard />
        <ElectionResultCard />
      </div>
    </div>
  );
};

export default AnnounceResults;

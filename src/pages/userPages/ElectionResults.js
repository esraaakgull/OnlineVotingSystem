import Header from '../../layouts/Header';
import ElectionResultCard from '../../components/ElectionResultCard';

const ElectionResults = () => {
  return (
    <div className="flex-grow flex flex-col justify-center-top">
      <Header />
      <div className="main mt-4">
        <div className="row justify-content-center pb-2">
          <p className="h4 text-danger font-weight-bold">Election Results</p>
        </div>
        <ElectionResultCard />
        <ElectionResultCard />
        <ElectionResultCard />
      </div>
    </div>
  );
};

export default ElectionResults;

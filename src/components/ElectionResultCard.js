import CandidateResult from './CandidateResult';

const ElectionResultCard = () => {
  return (
    <div className="w-full px-3 mb-6 md:mb-5">
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-2">
        <div>
          <div className="font-bold text-xl mb-2">Computer Engineering</div>
          <CandidateResult won />
          <CandidateResult />
          <CandidateResult />
        </div>
      </div>
    </div>
  );
};

export default ElectionResultCard;

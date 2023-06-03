import Header from '../layouts/Header';
import { useParams } from 'react-router-dom';
import { findAnnounce } from '../helpers/announcementHelper';

const Announcement = () => {
  const params = useParams();
  const announce = findAnnounce(parseInt(params.id));

  return (
    <div className="flex-grow flex-col justify-center-top vh-100 ">
      <Header />
      <div className="mt-4">
        <div className="rounded-lg bg-white shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-danger">{announce.title}</h1>
          <div>
            <div className="news">
              <div className="container">
                <p className="font-weight-bold">{announce.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Announcement;

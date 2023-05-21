import profilePhoto from '../assets/images/profilePhoto.png';
import AnnouncementCard from '../components/AnnouncementCard';
import Footer from '../layouts/Footer';

const Dashboard = () => {
  return (
    <div>
      <div className="flex-grow flex flex-col justify-center-top ">
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
        <br />
        <br />
        <div className="card-deck" style={{ marginLeft: -5, marginRight: 5 }}>
          <div className="row">
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
            <AnnouncementCard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

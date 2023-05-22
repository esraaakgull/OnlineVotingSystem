import AnnouncementCard from '../components/AnnouncementCard';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Dashboard = () => {
  return (
    <div className="flex-grow flex flex-col justify-center-top ">
      <Header />
      <div className="card-deck m-2">
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
  );
};

export default Dashboard;

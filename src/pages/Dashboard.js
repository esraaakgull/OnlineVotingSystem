import AnnouncementCard from '../components/AnnouncementCard';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import { announcements } from '../constants/announcements';
import NewsCard from '../components/NewsCard';
import { useEffect, useState } from 'react';
import { getAllAnnouncements, handleLogin } from '../helpers/api';

const Dashboard = () => {
  const [news, setNews] = useState([])

  const getAnnouncements = async () => {
    const res= await getAllAnnouncements();
    setNews(res.data);
  }
  useEffect(()=> {
    getAnnouncements();
    handleLogin("ahmetcan@std.iyte.edu.tr","33323");
  },[])

  return (
    <div className="flex-grow flex flex-col">
      <Header />
      <div className="row justify-content-center ">
        <AnnouncementCard data={announcements.electionCalendar} />
        <AnnouncementCard data={announcements.electionResults} />
        {news.map((announce , index) => (
          <NewsCard data={announce} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

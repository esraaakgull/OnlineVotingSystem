import { Link } from 'react-router-dom';
import { pages } from '../constants/pages';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';

const Sidebar = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="flex flex-col w-64 bg-red-700 overflow-y-auto flex-shrink-0">
      <div className="flex justify-center text-center mt-10 text-5xl text-white">
        IZTECH ONLINE VOTING SYSTEM
      </div>
      <nav className="flex flex-col mt-10 items-center">
        {Object.keys(pages.userPages).map((page, index) => {
          if (page !== 'logout') {
            return (
              <Link
                key={`sideBar${index}`}
                to={pages.userPages[page].path}
                className="px-4 py-2 text-gray-200 hover:bg-red-900">
                <i className={`fa ${pages.userPages[page].icon}`}></i> {pages.userPages[page].title}
              </Link>
            );
          }
          return (
            <Link key={`sideBar${index}`} to="#">
              <p
                key={`sideBar${index}`}
                className="px-4 py-2 text-gray-200 hover:bg-red-900"
                onClick={userContext.logout}>
                <i className={`fa ${pages.userPages[page].icon}`}></i> {pages.userPages[page].title}
              </p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

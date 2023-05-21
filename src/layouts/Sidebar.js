import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-red-700 overflow-y-auto flex-shrink-0">
      <div className="flex justify-center text-center mt-10 text-5xl text-white">
        IZTECH ONLINE VOTING SYSTEM
      </div>
      <nav className="flex flex-col mt-10 items-center">
        <Link to="/" className="px-4 py-2 text-gray-200 hover:bg-red-900">
          <i className="fas  fa-light fa-table-columns"></i> Dashboard
        </Link>
        <Link to="/" className="px-4 py-2 text-gray-200 hover:bg-red-900">
          <i className="fas fa-regular fa-user"></i>
          Profile
        </Link>
        <Link to="/voting" className="px-4 py-2 text-gray-200 hover:bg-red-900">
          <i className="fas fa-sharp fa-light fa-rectangle-list"></i> Voting
        </Link>
        <Link to="/applications" className="px-4 py-2 text-gray-200 hover:bg-red-900">
          <i className="fas fa-light fa-pen-to-square"></i> Applications
        </Link>
        <Link to="/" className="px-4 py-2 text-gray-200 hover:bg-red-900">
          <i className="fas fa-regular fa-arrow-right-from-bracket"></i> Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

import logo from '../assets/images/iyte.png';
import profilePhoto from '../assets/images/profilePhoto.png';

const Dashboard = () => {
  return (
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
        <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Election Calendar</h5>
            <p className="card-text">Election Calendar that published by YÖK.</p>
            <p className="card-text">
              <small className="text-muted"></small>
            </p>
            <br />
            <a href="/#" className="btn btn-danger">
              GO TO ANNOUNCEMENT
            </a>
          </div>
        </div>
        <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Election Calendar</h5>
            <p className="card-text">Election Calendar that published by YÖK.</p>
            <p className="card-text">
              <small className="text-muted"></small>
            </p>
            <br />
            <a href="/#" className="btn btn-danger">
              GO TO ANNOUNCEMENT
            </a>
          </div>
        </div>
        <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Election Calendar</h5>
            <p className="card-text">Election Calendar that published by YÖK.</p>
            <p className="card-text">
              <small className="text-muted"></small>
            </p>
            <br />
            <a href="/#" className="btn btn-danger">
              GO TO ANNOUNCEMENT
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" style={{ marginTop: 250 }}>
          About
        </div>
        <div className="card-body">
          <blockquote className="blockquote">
            <p>2022-2023 </p>
            <footer className="blockquote-footer">
              Cenge-316 <cite title="Source Title"></cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

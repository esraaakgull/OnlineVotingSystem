import logo from '../assets/images/iyte.png';

const AnnouncementCard = () => {
  return (
    <div className="col-md-4 mb-2">
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
  );
};

export default AnnouncementCard;

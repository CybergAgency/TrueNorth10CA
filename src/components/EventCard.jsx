import { Link } from "react-router-dom";

const EventCard = ({ image, title, description, to }) => {
  return (
    <>
      <div className="event_inner">
        <div className="event_img">
          <img src={image} alt="Big Fish Casino Game" />
        </div>
        <div className="event_cnt">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="h-btn">
            <Link to={to}>
              <i className="fa-regular fa-circle-play"></i>
              Play now
            </Link>
          </div>
        </div>
        <div className="ball"></div>
      </div>
    </>
  );
};

export default EventCard;

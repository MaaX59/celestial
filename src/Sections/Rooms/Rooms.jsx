import React from "react";
import "./Rooms.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import room1 from "../../pics/First-room.jpg";
import room2 from "../../pics/conferance.jpg";
import room3 from "../../pics/room3.jpg";
import room4 from "../../pics/room4.jpg";

const Rooms = () => {
  const images = [
    { image: room1, title: "Room 1", text: "awdawdadadad" },
    { image: room2, title: "Room 2", text: "awdawdadadad" },
    { image: room3, title: "Room 3", text: "awdawdadadad" },
    { image: room4, title: "Room 4", text: "awdawdadadad" },
  ];
  return (
    <div className="app_rooms">
      <div className="app_rooms_title"> Choose Your Destination</div>
      <div className="app_rooms_content">
        <Slide>
          <div className="each-slide-effect">
            <div className="slide-card">
              <span> {images[0].title} </span>
              <div
                className="image"
                style={{ backgroundImage: `url(${images[0].image})` }}
              ></div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="slide-card">
              <span> {images[1].title} </span>
              <div
                className="image"
                style={{ backgroundImage: `url(${images[1].image})` }}
              ></div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="slide-card">
              <span> {images[2].title} </span>
              <div
                className="image"
                style={{ backgroundImage: `url(${images[2].image})` }}
              ></div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Rooms;

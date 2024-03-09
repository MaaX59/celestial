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
    {
      image: room1,
      title: "Orbital Pod - Earth",
      text: "Hanging 40m below the Civilial Space Station, view Earth like you have never seen it before.",
    },
    {
      image: room2,
      title: "Conferance Hall - Mars",
      text: "We are excited to open our new conferance hall. In low orbit over terraformed Mars, our state of the art installation will povide a tailorded and flexible experiance your organisation wont soon forget",
    },
    {
      image: room3,
      title: "Venus Shuttle",
      text: "Spend two weeks in luxary making a full orbit of Venus. ",
    },
    {
      image: room4,
      title: "N7 Station",
      text: "Rent or buy property on the largest station in the known universe. Sustainable, reliable and completly able to provide it´s 27 Milion inhabitants with the best life in space has to offer.",
    },
  ];
  return (
    <div className="app_rooms">
      <div className="app_rooms_title"> Choose Your Destination</div>
      <div className="app_rooms_content">
        <Slide>
          <div className="each-slide-effect">
            <div className="slide-card">
              <span className="room-title"> {images[0].title} </span>
              <span className="room-text"> {images[0].text} </span>
              <button className="slider-button">Learn More</button>
            </div>
            <div
              className="image"
              style={{ backgroundImage: `url(${images[0].image})` }}
            ></div>
          </div>

          <div className="each-slide-effect">
            <div className="slide-card">
              <span className="room-title"> {images[1].title} </span>
              <span className="room-text"> {images[1].text} </span>
              <button className="slider-button">Learn More</button>
            </div>
            <div
              className="image"
              style={{ backgroundImage: `url(${images[1].image})` }}
            ></div>
          </div>

          <div className="each-slide-effect">
            <div className="slide-card">
              <span className="room-title"> {images[2].title} </span>
              <span className="room-text"> {images[2].text} </span>
              <button className="slider-button">Learn More</button>
            </div>
            <div
              className="image"
              style={{ backgroundImage: `url(${images[2].image})` }}
            ></div>
          </div>

          <div className="each-slide-effect">
            <div className="slide-card">
              <span className="room-title"> {images[3].title} </span>
              <span className="room-text"> {images[3].text} </span>
              <button className="slider-button">Learn More</button>
            </div>
            <div
              className="image"
              style={{ backgroundImage: `url(${images[3].image})` }}
            ></div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Rooms;

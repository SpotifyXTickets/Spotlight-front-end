import "../styles/components/_event-card-drag.scss";

import { useState } from "react";
import Image from "next/image";
import HeartIcon from "../assets/heart.svg";
import FullHeartIcon from "../assets/heart-red.svg";

export default function EventCardDrag(props: {
  key: number;
  data: {
    id: number;
    artist: string;
    artistImage: any;
    date: string;
    location: string;
  };
}) {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled);

  return (
    <div className="event-card-drag">
      <Image
        className="event-card-drag__image"
        src={props.data.artistImage}
        alt="Artist Image"
      />
      <div className="event-card-drag__info">
        <div className="event-card-drag__title">
          <h3>{props.data.artist}</h3>
          <Image
            className="event-card-drag__heart"
            onClick={toggleHeart}
            src={!isHeartFilled ? HeartIcon : FullHeartIcon}
            alt="Favourite Icon"
          />
        </div>
        <span className="event-card-drag__span">{props.data.date}</span>
        <span className="event-card-drag__span">{props.data.location}</span>
      </div>
    </div>
  );
}

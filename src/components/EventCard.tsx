import Image from "next/image";
import "../styles/components/_event-card.scss";
import HeartIcon from "../assets/heart.svg";

export default function EventCard(props: {
  key: number;
  data: {
    id: number;
    artist: string;
    artistImage: any;
    date: string;
    location: string;
  };
}) {
  return (
    <div className="event-card">
      <Image
        className="event-card__image"
        src={props.data.artistImage}
        alt="Artist Image"
      />
      <div className="event-card__info">
        <div className="event-card__title">
          <h3>{props.data.artist}</h3>
          <Image src={HeartIcon} alt="Favourite Icon" />
        </div>
        <span className="event-card__span">{props.data.date}</span>
        <span className="event-card__span">{props.data.location}</span>
        <button className="event-card__button">Learn More {">"}</button>
      </div>
    </div>
  );
}

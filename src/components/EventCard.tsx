import Image from "next/image";
import EventPlaceholder from "../assets/event-placeholder.jpg";
import "../styles/components/_event-card.scss";
import Button from "@/components/Button";

export default function EventCard() {
  return (
    <div className="event-card__wrapper">
      <Image
        className="event-card__image"
        src={EventPlaceholder}
        alt="event image"
      />
      <div className="event-card__content">
        <div className="event-card__description">
          <h2 className="text-h2 font-medium">Event Name</h2>
          <p className="description-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            ipsum corporis iste deleniti, pariatur amet itaque quibusdam
            eligendi quam cumque odio neque molestiae, vel inventore aperiam
            dolores reprehenderit! Saepe, quis.
          </p>
        </div>
        <div className="event-card__tags">
          <div className="tag-wrapper">
            <span className="tag">Tag</span>
            <span className="tag">Tag</span>
            <span className="tag">Tag</span>
          </div>
          <Button
            text={"Button"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            class={"event-card__button"}
          />
        </div>
      </div>
    </div>
  );
}

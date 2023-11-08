import Image from "next/image";
import EventPlaceholder from "../assets/event-placeholder.jpg";
import { EventType } from "@/types/types";
import "../styles/components/_event-card.scss";
import Button from "@/components/Button";

export default function EventCard(props: { event: EventType }) {
  const { event } = props;
  // console.log(event.images);
  const image = event.images.sort((a, b) => {
    return a.height < b.height ? 1 : -1;
  })[0];
  return (
    <div className="mt-12 grid grid-cols-3 rounded-lg border-2 border-black">
      <div className="relative">
        <Image
          className="rounded-l-md max-w-sm border-r-2 border-black"
          src={image.url ? image.url : EventPlaceholder}
          alt="event image"
          fill
        />
      </div>

      <div className="flex items-center justify-between col-span-2 p-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-medium">{event.name}</h2>
          <p className="max-w-md text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            ipsum corporis iste deleniti, pariatur amet itaque quibusdam
            eligendi quam cumque odio neque molestiae, vel inventore aperiam
            dolores reprehenderit! Saepe, quis.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between h-full p-4">
          {/* Repetition going to be replaced my mapping the actual tag items */}
          <div className="flex items-center justify-between gap-3">
            {event.classifications.map((classification) => {
              const genres = classification.genre.name
                .split("/")
                .filter((genre) => genre !== "Undefined" && genre !== "Other");
              const subGenres = classification.subGenre.name
                .split("/")
                .filter((genre) => genre !== "Undefined" && genre !== "Other");

              genres.push(
                ...subGenres.filter((genre) => !genres.includes(genre))
              );
              return genres.map((genre, index) => (
                <span
                  key={classification.genre.id + "-" + index}
                  className="bg-slate-400 p-1 px-4 rounded-lg"
                >
                  {genre}
                </span>
              ));
            })}
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

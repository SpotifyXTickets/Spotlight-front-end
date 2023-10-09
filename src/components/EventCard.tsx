import Image from "next/image";
import EventPlaceholder from "../assets/event-placeholder.jpg";

export default function EventCard() {
  return (
    <div className="mt-12 grid grid-cols-3 rounded-lg border-2 border-black">
      <Image
        className="rounded-l-md max-w-sm border-r-2 border-black"
        src={EventPlaceholder}
        alt="event image"
      />
      <div className="flex items-center justify-between col-span-2 p-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-medium">Event Name</h2>
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
            <span className="bg-slate-400 p-1 px-4 rounded-lg">Tag</span>
            <span className="bg-slate-400 p-1 px-4 rounded-lg">Tag</span>
            <span className="bg-slate-400 p-1 px-4 rounded-lg">Tag</span>
          </div>
          <button className="font-medium text-white bg-slate-700 p-2 px-3 rounded-lg ml-32">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

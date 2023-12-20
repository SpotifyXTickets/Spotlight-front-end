import Image from "next/image";
import Link from "next/link";

import coldplay from "@/assets/coldplay-artist.png";
import ariana from "@/assets/ariana-artist.png";
import theweeknd from "@/assets/theweeknd-artist.png";

const artistsData = [
  { id: 1, image: coldplay, title: "Coldplay", upcomingConcerts: 5 },
  { id: 2, image: ariana, title: "Ariana Grande", upcomingConcerts: 10 },
  { id: 3, image: theweeknd, title: "The Weeknd", upcomingConcerts: 7 },
];

export default function ArtistList() {
  return (
    <section className="flex flex-col gap-8 mb-16">
      {artistsData.map((item) => (
        <Link href="/artist-page" key={item.id}>
          <div className="rounded-md">
            <Image src={item.image} alt={item.title} />
            <h2 className="text-white font-semibold text-xl mt-2">
              {item.title}
            </h2>
            <span className="text-white">
              {item.upcomingConcerts} upcoming{" "}
              {item.upcomingConcerts > 1 ? "concerts" : "concert"}
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}

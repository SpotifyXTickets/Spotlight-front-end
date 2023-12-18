import "@/styles/components/_artist-concert-card-drag.scss";

import Image from "next/image";
import Link from "next/link";

export default function EventCardDrag(props: {
  key: number;
  smallClass?: boolean;
  data: {
    id: number;
    artist: string;
    artistImage: any;
    date: string;
    location: string;
  };
}) {
  return (
    <div className="artist-concert-card-drag">
      <Link href="/artist-page">
        <Image
          className="artist-concert-card-drag__image"
          src={props.data.artistImage}
          alt="Artist Image"
        />
        <div className="artist-concert-card-drag__info">
          <div className="artist-concert-card-drag__title">
            <h3>{props.data.artist}</h3>
          </div>
          <span className="artist-concert-card-drag__span">
            10 concerts soon
          </span>
        </div>
      </Link>
    </div>
  );
}

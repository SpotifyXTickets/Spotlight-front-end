import "@/styles/components/_artist-events.scss";

import Image from "next/image";

import ArrowIcon from "@/assets/icons/arrowSettings.svg";

export default function ArtistEvents({ data }: any) {
  const totalItems = data.length;

  return (
    <section className="artist-events">
      <h4 className="text-white font-medium text-lg">Netherlands</h4>
      <span className="text-[#888888] font-medium">2 events</span>

      {data.map((item: any, index: number) => (
        <div className="test" key={item.id}>
          <div className="artist-events__wrapper">
            <div className="artist-events__date">
              <span>{item.month}</span>
              <span className="font-medium">{item.day}</span>
              <span>{item.year}</span>
            </div>
            <div className="artist-events__description">
              <span>{item.time}</span>
              <span>{item.location}</span>
              <span>{item.tour}</span>
            </div>
            <Image src={ArrowIcon} alt="arrow right" />
          </div>
          {index !== totalItems - 1 && <hr className="artist-events__line" />}
        </div>
      ))}
    </section>
  );
}

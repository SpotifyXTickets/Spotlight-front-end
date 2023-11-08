import "../styles/components/_events-section-drag.scss";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import EventCardDrag from "@/components/EventCardDrag";

import BeyonceDrag from "../assets/BeyonceDrag.png";
import TheWeekndDrag from "../assets/TheweekndDrag.png";
import ArianaGrandeDrag from "../assets/ArianaDrag.png";

const data = [
  {
    id: 1,
    artist: "Beyonce",
    artistImage: BeyonceDrag,
    date: "15 November 19:00",
    location: "Johan Cruijff ArenA, Amsterdam",
  },
  {
    id: 2,
    artist: "The Weeknd",
    artistImage: TheWeekndDrag,
    date: "15 November 19:00",
    location: "Johan Cruijff ArenA, Amsterdam",
  },
  {
    id: 3,
    artist: "Ariana Grande",
    artistImage: ArianaGrandeDrag,
    date: "15 November 19:00",
    location: "Johan Cruijff ArenA, Amsterdam",
  },
];

export default function EventsSectionDrag() {
  const [width, setWidth] = useState(0);
  const dragSlider = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dragSlider.current) {
      const widthConstraint =
        dragSlider.current.scrollWidth - dragSlider.current.offsetWidth;
      setWidth(widthConstraint > 0 ? widthConstraint : 0);
    }
  }, []);

  return (
    <motion.section
      className="events-section-drag"
      ref={dragSlider}
      drag="x"
      dragConstraints={{ right: 0, left: -width - 90 }}
    >
      {data.map((item) => (
        <EventCardDrag key={item.id} data={item} />
      ))}
    </motion.section>
  );
}

import '../styles/components/_events-section-drag.scss'

import { useEffect, useRef } from 'react'
import EventCardDrag from '@/components/EventCardDrag'

import ArtistConcertCardDrag from '@/components/ArtistConcertCardDrag'

import BeyonceDrag from '../assets/BeyonceDrag.png'
import TheWeekndDrag from '../assets/TheweekndDrag.png'
import ArianaGrandeDrag from '../assets/ArianaDrag.png'
import { RecommendationEventType } from '@/types/types'

const data = [
  {
    ticketMasterId: '1',
    name: 'Beyonce',
    imageUrl: BeyonceDrag.src,
    startDate: '15 November 19:00',
    address: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
  },
  {
    ticketMasterId: '2',
    name: 'The Weeknd',
    imageUrl: TheWeekndDrag.src,
    startDate: '15 November 19:00',
    address: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
  },
  {
    ticketMasterId: '3',
    name: 'Ariana Grande',
    imageUrl: ArianaGrandeDrag.src,
    startDate: '15 November 19:00',
    address: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
  },
] as RecommendationEventType[]

export default function EventsSectionDrag(props: { concertCards?: boolean }) {
  const dragSlider = useRef<HTMLDivElement | null>(null)

  let content: JSX.Element[] | null

  switch (true) {
    case props.concertCards:
      content = data.map((item, i) => (
        <ArtistConcertCardDrag key={i} data={item} />
      ))
      break

    default:
      content = data.map((item, i) => <EventCardDrag key={i} data={item} />)
  }

  useEffect(() => {
    if (dragSlider.current) {
      const widthConstraint =
        dragSlider.current.scrollWidth - dragSlider.current.offsetWidth
      // setWidth(widthConstraint > 0 ? widthConstraint : 0)
    }
  }, [])

  return <div className="event-card-drag__wrapper">{content}</div>
}

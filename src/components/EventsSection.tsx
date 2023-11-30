import '../styles/components/_events-section.scss'

import EventCard from '@/components/EventCard'
import Beyonce from '../assets/beyonce.png'
import TheWeeknd from '../assets/theweeknd.png'
import ArianaGrande from '../assets/arianagrande.png'
import { RecommendationEventType } from '@/types/types'

const data = [
  {
    ticketMasterId: '1',
    name: 'Beyonce',
    imageUrl: Beyonce.src,
    startDate: '15 November 19:00',
    address: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
  },
  {
    ticketMasterId: '2',
    name: 'The Weeknd',
    imageUrl: TheWeeknd.src,
    startDate: '15 November 19:00',
    address: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
  },
  {
    ticketMasterId: '3',
    name: 'Ariana Grande',
    imageUrl: ArianaGrande.src,
    startDate: '15 November 19:00',
    address: 'Johan Cruijff ArenA',
    city: 'Amsterdam',
  },
] as RecommendationEventType[]

export default function EventsSection(props: {
  title: string
  events?: Array<RecommendationEventType>
}) {
  console.log(props.events)
  return (
    <>
      <section className="events-section">
        <h2 className="events-section__title">{props.title}</h2>
        {props.events
          ? props.events.map((item, i) => <EventCard key={i} data={item} />)
          : data.map((item, i) => <EventCard key={i} data={item} />)}
      </section>
    </>
  )
}

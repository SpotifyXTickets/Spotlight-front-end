import '../styles/components/_events-section.scss'

import EventCard from '@/components/EventCard'
import { EventType } from '@/types/types'

export default function EventsSection(props: {
  title: string
  events?: EventType[]
}) {
  return (
    <>
      <section className="events-section">
        <h2 className="events-section__title">{props.title}</h2>
        {props.events ? (
          props.events.map((item, i) => <EventCard key={i} event={item} />)
        ) : (
          <></>
        )}
      </section>
    </>
  )
}

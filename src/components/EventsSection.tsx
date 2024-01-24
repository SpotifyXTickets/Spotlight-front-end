import '../styles/components/_events-section.scss'

import EventCard from '@/components/EventCard'
import Event, { EmbeddedEvent } from '@/types/event'
import { RecommendationEventType } from '@/types/types'

export default function EventsSection(props: {
  title: string
  events?: Array<EmbeddedEvent & { matchScore?: number }>
}) {
  console.log(props.events)
  return (
    <>
      <section className="events-section">
        {props.title ? (
          <h2 className="events-section__title">{props.title}</h2>
        ) : (
          ''
        )}
        {props.events
          ? props.events.map((item) => (
              <EventCard key={item.ticketMasterId} data={item} />
            ))
          : ''}
      </section>
    </>
  )
}

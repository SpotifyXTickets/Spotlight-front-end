import '@/styles/components/_artist-events.scss'

import Image from 'next/image'

import ArrowIcon from '@/assets/icons/arrowSettings.svg'
import { EmbeddedEvent } from '@/types/event'

export default function ArtistEvents(props: {
  data: EmbeddedEvent['tickets']
  location: string
}) {
  const totalItems = props.data.length

  const dayFormatter = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
  })

  const monthFormatter = Intl.DateTimeFormat('en-US', {
    month: 'short',
  })

  const yearFormatter = Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  })

  const timeFormatter = Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  })

  return (
    <section className="artist-events">
      <h4 className="text-white font-medium text-lg">{props.location}</h4>
      <span className="text-[#888888] font-medium">
        {totalItems} {totalItems > 1 ? 'events' : 'event'}
      </span>

      {props.data.map((item: EmbeddedEvent['tickets'][0], index: number) => {
        if (item === undefined) {
          console.log(item)
          console.log(props.data)
          return <></>
        }
        const startDate = new Date(item.eventStartDate ?? '')

        return (
          <div className="test" key={item.ticketId}>
            <div className="artist-events__wrapper">
              <div className="artist-events__date">
                <span>{dayFormatter.format(startDate)}</span>
                <span className="font-medium">
                  {monthFormatter.format(startDate)}
                </span>
                <span>{yearFormatter.format(startDate)}</span>
              </div>
              <div className="artist-events__description">
                <span>{timeFormatter.format(startDate)}</span>
                <span>{item.venue.address}</span>
                <span>{item.venue.city}</span>
              </div>
              <Image
                src={ArrowIcon}
                alt="arrow right"
                onClick={() => {
                  window.location.href = item.ticketLink ?? ''
                }}
              />
            </div>
            {/* {index !== totalItems - 1 && <hr className="artist-events__line" />} */}
          </div>
        )
      })}
    </section>
  )
}

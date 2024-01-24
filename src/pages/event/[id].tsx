import '../../app/globals.scss'
import '../../styles/pages/_event-page.scss'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HeartIcon from '@/assets/icons/heart.svg'
import FullHeartIcon from '@/assets/icons/heart-red.svg'
import DateIcon from '@/assets/icons/date.svg'
import LocationIcon from '@/assets/icons/location.svg'
import TicketIcon from '@/assets/icons/ticket.svg'
import Beyonce from '@/assets/BeyonceDrag.png'

import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import EventsSectionDrag from '@/components/EventsSectionDrag'
import { EventType } from '@/types/types'
import { GetServerSideProps, NextPage } from 'next'
import Cookies from 'universal-cookie'
import { getApiHost } from '@/libs/getApiHost'

import { EmbeddedEvent, Event } from '@/types/event'
import ArtistEvents from '@/components/ArtistEvents'

type PageProps = {
  error?: {
    message: string
    statusCode: number
  }
  event?: EmbeddedEvent
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const { id } = context.query
  const apiHost = getApiHost()
  const cookies = new Cookies()
  const res = await fetch(`${apiHost}/event/${id}`, {
    headers: {
      Authorizatoin: 'Bearer ' + cookies.get('twix_access_token'),
    },
  })

  try {
    const data = (await res.json()) as { event: EmbeddedEvent }

    return {
      props: {
        event: data.event,
      },
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        error: {
          message: 'Something went wrong',
          statusCode: 500,
        },
      },
    }
  }
}

export const EventPage: NextPage<PageProps> = (props) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled)

  const formatter = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })

  if (props.error) {
    return (
      <div>
        <h1>{props.error.message}</h1>
        <h2>{props.error.statusCode}</h2>
      </div>
    )
  }

  const categorizedTickets: Array<{
    category: string
    tickets: EmbeddedEvent['tickets']
  }> = []
  props.event?.tickets.forEach((ticket) => {
    if (categorizedTickets.length === 0) {
      categorizedTickets.push({
        category: ticket.venue.city,
        tickets: [ticket],
      })
      return
    }

    if (
      categorizedTickets.find((ct) => {
        return ct.category === ticket.venue.city
      })
    ) {
      categorizedTickets
        .find((ct) => {
          return ct.category === ticket.venue.city
        })
        ?.tickets.push(ticket)
    } else {
      categorizedTickets.push({
        category: ticket.venue.city,
        tickets: [ticket],
      })
    }
  })

  return (
    <section className="bg-dark">
      <NavBar />
      <main className="event-page">
        <div className="event-page__container">
          <div className="event-page__image-wrapper">
            <Image
              className="event-page__image"
              src={props.event?.imageUrl ?? ''}
              width={500}
              height={500}
              objectFit="contain"
              alt="event image"
            />
            <div className="event-page__image-tags">
              {/* <div className="event-page__match-tag">90% Match</div> */}
              {/* <div className="event-page__genre-tag">Pop Music</div> */}
            </div>
          </div>
          <section className="event-page__info-section">
            <div className="event-page__info-section-title">
              <h2>{props.event!.name}</h2>
              <Image
                className="event-page__info-section-icon"
                onClick={toggleHeart}
                src={!isHeartFilled ? HeartIcon : FullHeartIcon}
                alt="Heart icon"
              />
            </div>

            {/* Can be optimised to avoid code repetition, but would first consultate to know how the data is going to be fetched  */}

            {props.event!.tickets.map((item) => (
              <Fragment key={item.ticketId}>
                <div className="flex items-start gap-3">
                  <Image src={DateIcon} alt="Date icon" />
                  <div className="event-page__info-section-event-info flex-col -mt-0.5">
                    <span>
                      <span className="font-medium">Start:</span>{' '}
                      {formatter.format(new Date(item.eventStartDate))}
                    </span>
                    {item.eventStartDate !== item.eventEndData && (
                      <span>
                        <span className="font-medium">End:</span>{' '}
                        {formatter.format(new Date(item.eventEndData))}
                      </span>
                    )}
                  </div>
                </div>
                <div className="event-page__info-section-event-info">
                  <Image src={LocationIcon} alt="Location icon" />
                  <span>
                    {item.venue.address} {item.venue.city}
                  </span>
                </div>
                {/* <div className="event-page__info-section-event-info">
                  <Image src={TicketIcon} alt="Ticket icon" />
                  <span>{item.}</span>
                </div> */}
              </Fragment>
            ))}

            <hr className="event-page__info-section-line" />

            {props.event!.description && (
              <>
                <h4 className="event-page__info-section-description">
                  About Event
                </h4>
                <p>{props.event!.description ?? ''}</p>
              </>
            )}

            {/* <iframe
              className="my-10"
              src={`https://open.spotify.com/embed/artist/6vWDO969PvNqNYHIOW5v0m?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe> */}

            <div className="event-page__section">
              <div className="event-page__section-title-wrapper">
                <h2 className="event-page__section-title">Tickets </h2>
              </div>
            </div>

            {categorizedTickets.map((ct) => (
              <ArtistEvents data={ct.tickets} location={ct.category} />
            ))}
            {/* <ArtistEvents data={eventsData} location="Netherlands" /> */}
          </section>

          <section className="event-page__draggable-events">
            <div className="event-page__section">
              <div className="event-page__section-title-wrapper">
                <h2 className="event-page__section-title">
                  Other Artist Events{' '}
                </h2>
                <Link
                  className="event-page__section-see-all"
                  href="/event-page"
                >
                  See All
                </Link>
              </div>
            </div>

            <EventsSectionDrag
              concertCards={true}
              artists={props.event!._embedded!.artists}
            />
            {/* <ArtistEvents data={eventsData} location="Netherlands" /> */}
          </section>
        </div>
      </main>

      <section className="event-page__button">
        <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
          Buy Tickets
        </Button>
      </section>

      <div className="pb-20">
        <Footer />
      </div>
    </section>
  )
}

export default EventPage

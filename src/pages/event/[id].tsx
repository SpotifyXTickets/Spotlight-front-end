import '../../app/globals.scss'
import '../../styles/pages/_artist-page.scss'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HeartIcon from '@/assets/icons/heart.svg'
import FullHeartIcon from '@/assets/icons/heart-red.svg'
import DateIcon from '@/assets/icons/date.svg'
import LocationIcon from '@/assets/icons/location.svg'
import TicketIcon from '@/assets/icons/ticket.svg'

import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import EventsSectionDrag from '@/components/EventsSectionDrag'
import { EventType } from '@/types/types'
import { GetServerSideProps, NextPage } from 'next'
import Cookies from 'universal-cookie'
import { getApiHost } from '@/libs/getApiHost'

const data = [
  {
    ticketMasterId: 1,
    date: '15 November 2023, Wed',
    time: '19:00',
    location: 'Johan Cruijff ArenA, Amsterdam',
    price: 'From €200',
  },
]

type PageProps = {
  event: EventType
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const { id } = context.query
  const apiHost = getApiHost()
  const cookies = new Cookies()
  const res = await fetch(`${apiHost}/events/${id}`, {
    headers: {
      Authorizatoin: 'Bearer ' + cookies.get('twix_access_token'),
    },
  })

  try {
    const event = await res.json()

    return {
      props: {
        event,
      },
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        event: {},
      },
    }
  }
}

export const EventPage: NextPage<PageProps> = (props) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled)

  const formatter = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
  })

  return (
    <section className="bg-dark">
      <NavBar />
      <main className="artist-page">
        <div className="artist-page__container">
          <div className="artist-page__image-wrapper">
            <Image
              className="artist-page__image"
              src={props.event.imageUrl}
              alt="Artist image"
              width={300}
              height={300}
            />
          </div>
          <section className="artist-page__info-section">
            <div className="artist-page__info-section-title">
              <h2>{props.event.name}</h2>
              <Image
                className="artist-page__info-section-icon"
                onClick={toggleHeart}
                src={!isHeartFilled ? HeartIcon : FullHeartIcon}
                alt="Heart icon"
              />
            </div>

            {/* Can be optimised to avoid code repetition, but would first consultate to know how the data is going to be fetched  */}

            <div className="artist-page__info-section-event-info">
              <Image src={DateIcon} alt="Date icon" />
              <span>{formatter.format(new Date(props.event.startDate))}</span>
            </div>
            <div className="artist-page__info-section-event-info">
              <Image src={LocationIcon} alt="Location icon" />
              <span>
                {props.event.address}, {props.event.city}
              </span>
            </div>
            <div className="artist-page__info-section-event-info">
              <Image src={TicketIcon} alt="Ticket icon" />
              <span>...</span>
            </div>

            <hr className="artist-page__info-section-line" />

            <h4 className="artist-page__info-section-description">
              About Event
            </h4>
            <p>{props.event.description ?? ''}</p>
          </section>

          <section className="artist-page__draggable-events">
            <div className="artist-page__section">
              <div className="artist-page__section-title-wrapper">
                <h2 className="artist-page__section-title">
                  Recommended events
                </h2>
                <Link
                  className="artist-page__section-see-all"
                  href="/recommendations"
                >
                  See All
                </Link>
              </div>
              <p className="artist-page__section-subtitle">
                Based on your music taste
              </p>
            </div>
            <EventsSectionDrag />
          </section>
        </div>
      </main>

      <section className="artist-page__button">
        <Button
          text="text-[#fbf9f9]"
          background="bg-[#6e3aff]"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            window.location.href = props.event.ticketLink
          }}
        >
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

import '@/app/globals.scss'
import '@/styles/pages/_event-page.scss'

import Image from 'next/image'
import Link from 'next/link'

import NavBar from '@/components/NavBar'
import EventsSectionDrag from '@/components/EventsSectionDrag'
import Footer from '@/components/Footer'

import Coldplay from '@/assets/coldplay.png'
import ArtistEvents from '@/components/ArtistEvents'
import { GetServerSideProps, NextPage } from 'next'
import { getApiHost } from '@/libs/getApiHost'
import Cookies from 'universal-cookie'
import { EmbeddedArtist } from '@/types/artist'
import Event from '@/types/event'

const eventsData = [
  {
    id: 1,
    month: 'JUL',
    day: '01',
    year: 2024,
    time: 'Mon • 20:00',
    location: 'Amsterdam Ziggo Dome',
    tour: 'Blue Electric Light Tour',
  },
  {
    id: 2,
    month: 'DEC',
    day: '11',
    year: 2024,
    time: 'Thu • 19:00',
    location: 'Amsterdam Ziggo Dome',
    tour: 'Blue Electric Light Tour',
  },
]

type PageProps = {
  error?: {
    message: string
    statusCode: number
  }
  artist?: EmbeddedArtist
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  try {
    const { id } = context.query
    const apiHost = getApiHost()
    const cookies = new Cookies()
    const res = await fetch(`${apiHost}/artist/${id}`, {
      headers: {
        Authorizatoin: 'Bearer ' + cookies.get('twix_access_token'),
      },
    })
    const data = await res.json()

    return {
      props: {
        artist: data as EmbeddedArtist,
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

export const ArtistPage: NextPage<PageProps> = (props) => {
  const totalItems = props.artist?._embedded?.events.length ?? 0

  const categorizedArtistTickets: Array<{
    category: string
    tickets: Event['tickets']
  }> = []
  props.artist!._embedded!.events.forEach((event) => {
    event.tickets.forEach((ticket) => {
      const matchingTicket = categorizedArtistTickets.find(
        (cat) => cat.category === event.name,
      )
      if (matchingTicket) {
        matchingTicket.tickets.push(ticket)
        return
      }
      categorizedArtistTickets.push({
        category: event.name,
        tickets: [ticket],
      })
    })
  })

  console.log(categorizedArtistTickets)

  return (
    <section className="bg-dark">
      <NavBar />
      <main className="event-page">
        <div className="event-page__container">
          <div className="event-page__image-wrapper">
            <Image
              className="event-page__image"
              src={props.artist?.imageUrl || ''}
              width={800}
              height={800}
              objectFit="contain"
              alt="event image"
            />
          </div>
        </div>

        <section className="artist-section">
          <h2 className="artist-section__title">{props.artist?.name}</h2>

          <div className="artist-section__wrapper">
            <h4 className="artist-section__events">
              {props.artist?._embedded?.events.length}{' '}
              {props.artist?._embedded?.events.length ?? 0 > 1
                ? 'Upcoming events'
                : 'Upcoming event'}
            </h4>
            <input
              className="artist-section__date"
              type="date"
              placeholder="Select Date"
            />
          </div>

          {categorizedArtistTickets.map((ct) => (
            <ArtistEvents data={ct.tickets} location={ct.category} />
          ))}
        </section>

        <section className="flex flex-col gap-8 mx-4">
          {/* <ArtistEvents data={eventsData} location="Netherlands" />
          <ArtistEvents data={eventsData} location="Near the Netherlands" /> */}
          <iframe
            src={`https://open.spotify.com/embed/artist/${props.artist?.spotifyId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </section>

        <section className="event-page__section">
          <div className="event-page__section-title-wrapper">
            <h2 className="event-page__section-title">
              Artists you might like
            </h2>

            <Link
              className="event-page__section-see-all"
              href="/recommended-artists"
            >
              See All
            </Link>
          </div>
          <EventsSectionDrag />
        </section>
      </main>

      <Footer />
    </section>
  )
}

export default ArtistPage

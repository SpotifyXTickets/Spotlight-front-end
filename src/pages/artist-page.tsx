import '@/app/globals.scss'
import '@/styles/pages/_event-page.scss'

import Image from 'next/image'
import Link from 'next/link'

import NavBar from '@/components/NavBar'
import EventsSectionDrag from '@/components/EventsSectionDrag'
import Footer from '@/components/Footer'

import Coldplay from '@/assets/coldplay.png'
import ArtistEvents from '@/components/ArtistEvents'

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

export default function ArtistPage() {
  const totalItems = eventsData.length

  return (
    <section className="bg-dark">
      <NavBar />
      <main className="event-page">
        <div className="event-page__container">
          <div className="event-page__image-wrapper">
            <Image
              className="event-page__image -mt-4"
              src={Coldplay}
              alt="artist image"
            />
          </div>
        </div>

        <section className="artist-section">
          <h2 className="artist-section__title">Coldplay</h2>

          <div className="artist-section__wrapper">
            <h4 className="artist-section__events">
              {totalItems}{' '}
              {totalItems > 1 ? 'Upcoming events' : 'Upcoming event'}
            </h4>
            <input
              className="artist-section__date"
              type="date"
              placeholder="Select Date"
            />
          </div>
        </section>

        <section className="flex flex-col gap-8 mx-4">
          <ArtistEvents data={eventsData} location="Netherlands" />
          <ArtistEvents data={eventsData} location="Near the Netherlands" />
          <iframe
            src="https://open.spotify.com/embed/artist/4gzpq5DPGxSnKTe4SA8HAU?utm_source=generator&theme=0"
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

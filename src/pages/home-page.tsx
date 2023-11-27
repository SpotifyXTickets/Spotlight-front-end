import '../styles/pages/_home-page.scss'

import Link from 'next/link'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import EventsSection from '@/components/EventsSection'
import EventsSectionDrag from '@/components/EventsSectionDrag'

export default function HomePage() {
  return (
    <section>
      <NavBar />
      <main className="home-page">
        <SearchBar />
        <Categories />
        <section className="home-page__draggable-events">
          <div className="home-page__best-for-you">
            <h2 className="home-page__title">Best For You</h2>
            <Link className="home-page__all" href="/recommendations">
              See All
            </Link>
          </div>

          <EventsSectionDrag />
        </section>
        <section className="home-page__draggable-events">
          <h2 className="home-page__title">Popular Events</h2>
          <EventsSectionDrag />
        </section>
        <section className="home-page__draggable-events">
          <h2 className="home-page__title">Upcoming events</h2>
          <EventsSection title="15 November 2023" />
          <hr className="home-page__line" />
          <EventsSection title="16 November 2023" />
        </section>
      </main>
      <Footer />
    </section>
  )
}

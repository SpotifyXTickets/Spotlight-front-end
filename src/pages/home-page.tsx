import '../app/globals.scss'
import '../styles/pages/_home-page.scss'

import Link from 'next/link'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Footer from '@/components/Footer'
import EventsSectionDrag from '@/components/EventsSectionDrag'
import EventsSection from '@/components/EventsSection'
import StackedImageRow from '@/components/StackedImageRow'
import Button from '@/components/Button'
import { useContext, useEffect, useState } from 'react'
import { useSetRedirctUrl } from '@/hooks/useSetRedirectUrl'
import { PlaylistItemType, RecommendationEventType } from '@/types/types'
import { getApiHost } from '@/libs/getApiHost'
import { UserContext } from '@/providers/UserProvider'
import Cookies from 'universal-cookie'

export default function HomePage() {
  const { user } = useContext(UserContext)
  useSetRedirctUrl()
  const apiHost = getApiHost()

  const [selectedPlaylists, setSelectedPlaylists] = useState<string>('')

  const [events, setEvents] = useState<RecommendationEventType[]>([])
  useEffect(() => {
    if (!user) {
      return
    }
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const selected_playlists = urlParams.get('selected_playlists')
    setSelectedPlaylists(selected_playlists as string)
    const cookies = new Cookies()
    const accessToken = cookies.get('twix_access_token')
    fetch(
      `${apiHost}/recommendationsV2` +
        (selected_playlists ? '?playlistIds=' + selected_playlists : ''),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
      .then((res) => {
        if (res.status === 401) {
          window.location.href = `/spotify_authorizer`
          return
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setEvents(data as RecommendationEventType[])
      })
  }, [user])
  return (
    <section>
      <NavBar />
      <main className="home-page">
        <div className="home-page__container">
          <h1 className="home-page__title">Home</h1>
          <div className="home-page__searchbar-wrapper">
            <SearchBar placeholder="Search for playlists" />
          </div>
          <section className="home-page__draggable-events">
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">Recommended events</h2>
                <Link
                  className="home-page__section-see-all"
                  href={
                    '/recommendations?selected_playlists=' + selectedPlaylists
                  }
                >
                  See All
                </Link>
              </div>
              <p className="home-page__section-subtitle">
                Based on your music taste
              </p>
              {events.length > 0 ? (
                <EventsSection title="" events={events} />
              ) : (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>

            {/* <EventsSectionDrag /> */}
          </section>

          <section className="home-page__draggable-events">
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">
                  Events of favourite artists
                </h2>
                <Link
                  className="home-page__section-see-all"
                  href="/recommendations"
                >
                  See All
                </Link>
              </div>
              <p className="home-page__section-subtitle">
                Select artists to see all their concerts
              </p>
            </div>
            <EventsSectionDrag concertCards={true} />
          </section>
          <section className="home-page__flow">
            <h2 className="home-page__section-title-description">
              Unlock Flow by selcting all favorites playlist for improved
              recomendations
            </h2>
            <div className="home-page__stacked-image-row">
              <StackedImageRow />
            </div>
            <Link href="/select-playlists">
              <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
                Select playlists
              </Button>
            </Link>
          </section>
          <section>
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">100% for you</h2>
                <Link
                  className="home-page__section-see-all"
                  href="/recommendations"
                >
                  See All
                </Link>
              </div>
              <p className="home-page__section-subtitle">
                Based on your music taste
              </p>
            </div>
            <EventsSectionDrag />
          </section>
          <section className="home-page__genres">
            <div className="home-page__section">
              <div className="home-page__section-title-wrapper">
                <h2 className="home-page__section-title">Favourite genres</h2>
              </div>
              <p className="home-page__section-subtitle">
                Based on your music taste
              </p>
              <div className="home-page__button-grid">
                <Button text="text-[#fbf9f9]" background="bg-[#3448FC]">
                  Rock
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#2E7C8F]">
                  Pop
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#A238FF]">
                  Jazz
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#4D0193]">
                  Indie
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#C01FC2]">
                  Hip-Hop
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#FF663C]">
                  Classical
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#8F931D]">
                  Electronic
                </Button>
                <Button text="text-[#fbf9f9]" background="bg-[#FF3D3D]">
                  Metal
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </section>
  )
}

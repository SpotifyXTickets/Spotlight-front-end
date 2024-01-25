import '../app/globals.scss'
import '../styles/pages/_recommendations-selection.scss'

import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Categories from '@/components/Categories'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/providers/UserProvider'
import { useGetTokenOrRedirect } from '@/hooks/useGetTokenOrRedirect'
import { PlaylistItemType } from '@/types/types'
import { getApiHost } from '@/libs/getApiHost'
import Cookies from 'universal-cookie'
import { useSetRedirctUrl } from '@/hooks/useSetRedirectUrl'

export default function Home() {
  const { user } = useContext(UserContext)
  useSetRedirctUrl()
  const apiHost = getApiHost()

  const [events, setEvents] = useState([])
  useEffect(() => {
    if (!user) {
      return
    }
    const cookies = new Cookies()
    const accessToken = cookies.get('twix_access_token')
    const playlists = window.sessionStorage.getItem('playlists')
    fetch(
      `${apiHost}/recommendation` +
        (playlists !== '' ? '' : '?playlistIds=' + playlists),
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
        setEvents(data)
      })
  }, [user])
  return (
    <section className="recommendations-section">
      <NavBar />
      <main className="recommendations-selection">
        <h1 className="recommendations-selection__title">Recommended events</h1>
        <SearchBar placeholder="Search for playlists" />
        <Categories />
        {events ? (
          <EventsSection title="Recommendations" events={events} />
        ) : (
          <></>
        )}
      </main>
      <Footer />
    </section>
  )
}

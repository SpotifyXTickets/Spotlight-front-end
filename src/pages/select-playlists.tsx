import '../app/globals.scss'
import '../styles/pages/_select-playlists.scss'

import Link from 'next/link'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PlaylistSection from '@/components/PlaylistSection'
import SearchBar from '@/components/SearchBar'
import Button from '@/components/Button'
import { GetServerSideProps, NextPage } from 'next'
import { Playlist, PlaylistItemType, PlaylistType } from '@/types/types'
import Cookies from 'universal-cookie'
import { verifyJwtToken } from '@/libs/auth'
import { useContext, useEffect, useState } from 'react'
import { useGetTokenOrRedirect } from '@/hooks/useGetTokenOrRedirect'
import { getApiHost } from '@/libs/getApiHost'
import { UserContext } from '@/providers/UserProvider'

type PageProps = {
  playlist: PlaylistType | null
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const cookies = new Cookies()
  console.log(cookies.getAll())
  const twix_access_token = verifyJwtToken(cookies.get('twix_access_token'))

  return {
    props: {
      playlist: null,
    },
  }
}
export const SelectPlaylists: NextPage<PageProps> = (props) => {
  const { user } = useContext(UserContext)
  const testToken = useGetTokenOrRedirect()
  const [playlist, setPlaylist] = useState<Array<PlaylistItemType>>()
  const apiHost = getApiHost()
  const [selectedPlaylists, setSelectedPlaylists] = useState<Array<string>>([])

  useEffect(() => {
    if (!user) {
      return
    }
    const cookies = new Cookies()
    const accessToken = cookies.get('twix_access_token')
    const getPlaylists = async (token: string) => {
      fetch(`${apiHost}/playlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          if (res.status === 401) {
            window.location.href = `/spotify_authorizer`
            return
          }
          setPlaylist((await res.json()) as Array<PlaylistItemType>)
        })
        .catch((err) => {
          console.error(err)
        })
    }

    getPlaylists(accessToken)
  }, [user])

  const selectPlaylist = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedPlaylists([...selectedPlaylists, e.target.value])
    } else {
      setSelectedPlaylists(
        selectedPlaylists.filter((item) => item !== e.target.value),
      )
    }
  }

  return (
    <section className="select-playlists__section">
      <NavBar />
      <main className="select-playlists">
        <h2 className="select-playlists__header">Let’s get started</h2>
        <p className="select-playlists__info">
          Select playlists for more personalised event recommendations.
        </p>
        <SearchBar placeholder="Search for playlists" />

        <button className="select-playlists__all-button">
          Select All Playlists
        </button>

        {playlist ? (
          <PlaylistSection
            onSelectPlaylist={selectPlaylist}
            playlist={playlist}
          />
        ) : (
          <></>
        )}
      </main>
      <section className="select-playlists__buttons">
        <Link className="select-playlists__link" href="/home-page">
          <Button
            text="text-[#6e3aff]"
            background="bg-dark"
            border="border"
            borderColor="border-[#6e3aff]"
          >
            Skip This Step
          </Button>
        </Link>
        <Link
          className="select-playlists__link"
          href="/home-page"
          onClick={(e) => {
            e.preventDefault()
            window.location.href =
              '/home-page?selected_playlists=' + selectedPlaylists.toString()
          }}
        >
          <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
            Confirm Playlists
          </Button>
        </Link>
      </section>
      <div className="pb-20">
        <Footer />
      </div>
    </section>
  )
}

export default SelectPlaylists

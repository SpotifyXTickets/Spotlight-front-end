/* eslint-disable @typescript-eslint/no-explicit-any */
import '../app/globals.scss'
import '../styles/pages/_select-playlists.scss'

import Link from 'next/link'
import Image from 'next/image'

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

import editIcon from '@/assets/icons/edit.svg'

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

  useEffect(() => {
    const playlists = window.sessionStorage.getItem('playlists')
    if (playlists) {
      setSelectedPlaylists(playlists.split(','))
    }
  }, [playlist])

  useEffect(() => {
    window.sessionStorage.setItem('playlists', selectedPlaylists.toString())
  }, [selectedPlaylists, setSelectedPlaylists])

  const handlePlaylistClick = (playlistId: string) => {
    if (!selectedPlaylists.includes(playlistId)) {
      setSelectedPlaylists([...selectedPlaylists, playlistId])
    } else {
      setSelectedPlaylists(
        selectedPlaylists.filter((item) => item !== playlistId),
      )
    }
  }

  const handleSelectAll = () => {
    if (selectedPlaylists.length > 0) {
      setSelectedPlaylists([])
    } else {
      setSelectedPlaylists(playlist!.map((p) => p.id))
    }
  }

  const [isOnboardingVisible, setOnboardingVisible] = useState(true)

  const handleCloseOnboarding = () => {
    setOnboardingVisible(false)
  }

  console.log(playlist)
  return (
    <section className="select-playlists__section">
      <NavBar />
      <main
        className={`select-playlists ${
          isOnboardingVisible ? 'opacity-30' : ''
        }`}
      >
        <h2 className="select-playlists__header">Let’s get started</h2>
        <p className="select-playlists__info">
          Select playlists for more personalised event recommendations.
        </p>
        <SearchBar placeholder="Search for playlists" />

        <button
          className="select-playlists__all-button"
          onClick={handleSelectAll}
        >
          {selectedPlaylists.length > 0
            ? 'Clear Selection'
            : 'Select All Playlists'}
        </button>

        {playlist ? (
          <PlaylistSection
            playlists={playlist}
            selectedPlaylists={selectedPlaylists}
            handlePlaylistClick={handlePlaylistClick}
          />
        ) : (
          ''
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
            const sessionPlaylists = window.sessionStorage.getItem('playlists')
            if (sessionPlaylists === '') {
              window.sessionStorage.setItem(
                'playlists',
                playlist?.map((p) => p.id).toString() ?? '',
              )
            }

            window.location.href = '/home-page'
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

      {isOnboardingVisible && (
        <OnboardingWindow onClose={handleCloseOnboarding} />
      )}
    </section>
  )
}

function OnboardingWindow({ onClose }: any) {
  return (
    <div className="onboarding-window">
      <div className="onboarding-window__content">
        <Image className="mt-1" src={editIcon} alt="Music icon" />
        <p className="text-white">
          For best recommendations you can select playlists or do it later and
          skip this step for now.
        </p>
      </div>
      <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]" onClick={onClose}>
        Next
      </Button>
    </div>
  )
}

export default SelectPlaylists

import '../styles/pages/_playlist-selection.scss'
import SearchBar from '@/components/SearchBar'
// import Dropdown from "@/components/Dropdown";
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/providers/UserProvider'
import Cookies from 'universal-cookie'
import { useGetTokenOrRedirect } from '@/hooks/useGetTokenOrRedirect'
import NavBar from '@/components/NavBar'
import PlaylistSection from '@/components/PlaylistSection'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getApiHost } from '@/libs/getApiHost'

type Playlist = {
  href: string
  items: Array<PlaylistItem>
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}
type PlaylistItem = {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: {
    height: number
    url: string
    width: number
  }[]
  name: string
  owner: {
    display_name: string
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
  }
  primary_color: string
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    total: number
  }
  type: string
  uri: string
}

function LoopSkeletons(Component: any, count: number) {
  let i = 0
  const components = []
  while (i < count) {
    components.push(Component)
    i++
  }
  return (
    <>
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </>
  )
}

export default function Page() {
  const { user } = useContext(UserContext)
  const testToken = useGetTokenOrRedirect()
  const [playlist, setPlaylist] = useState<Playlist>()
  const apiHost = getApiHost()
  // const twix_access_token = verifyJwtToken(cookies.get("twix_access_token"));
  useEffect(() => {
    if (!user) {
      return
    }
    const cookies = new Cookies();
    const accessToken = cookies.get("twix_access_token");
    const getPlaylists = async (token: string) => {
      
      fetch(`${apiHost}/playlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        if (res.status === 401) {
          window.location.href = `/spotify_authorizer`;
          return;
        }
        setPlaylist((await res.json()) as Playlist);
      }).catch((err) => {
        console.error(err);
      });
    };

    getPlaylists(accessToken);

  }, [user]);

  console.log(user)
  return (
    <section>
      <NavBar />
      <main className="select-playlists">
        <h2 className="select-playlists__header">Select Playlists</h2>
        <SearchBar />
        {playlist ? <PlaylistSection playlist={playlist} /> : <></>}
      </main>
      <section className="select-playlists__buttons">
        <Link className="select-playlists__link" href="/home-page">
          <Button
            text="text-[#6e3aff]"
            background="bg-[#fbf9f9]"
            border="border"
            borderColor="border-[#6e3aff]"
          >
            Skip This Step
          </Button>
        </Link>
        <Link className="select-playlists__link" href="/home-page">
          <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
            Get Started
          </Button>
        </Link>
      </section>
      <Footer />
    </section>
  )
}

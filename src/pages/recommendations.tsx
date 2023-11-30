import '../app/globals.scss'
import '../styles/pages/_recommendations-selection.scss'

import { EventType } from '@/types/types'
import { GetServerSideProps, NextPage } from 'next'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import EventsSection from '@/components/EventsSection'
import SearchBar from '@/components/SearchBar'
import Categories from '@/components/Categories'
import { getApiHost } from '@/libs/getApiHost'

type PageProps = {
  events: EventType[]
  rockEvents: EventType[]
  danceElectronicEvents: EventType[]
  hipHopRapEvents: EventType[]
  folkEvents: EventType[]
  popEvents: EventType[]
  rnbEvents: EventType[]
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const props = {
    events: [] as EventType[],
    rockEvents: [] as EventType[],
    danceElectronicEvents: [] as EventType[],
    hipHopRapEvents: [] as EventType[],
    folkEvents: [] as EventType[],
    popEvents: [] as EventType[],
    rnbEvents: [] as EventType[],
  } as PageProps
  const apiHost = getApiHost()

  const rockEvents = await fetch(`${apiHost}/events/rock?size=3`)
    .then(async (res) => {
      const data = (await res.json()).events as EventType[]
      // props.rockEvents = data;
      return data
    })
    .catch((err) => {
      console.error(err)
    })

  const danceElectronicEvents = await fetch(
    `${apiHost}/events/danceelectronic?size=3`,
  )
    .then(async (res) => {
      const data = (await res.json()).events as EventType[]
      // props.danceElectronicEvents = data;
      return data
    })
    .catch((err) => {
      console.error(err)
    })

  const hipHopRapEvents = await fetch(`${apiHost}/events/hiphoprap?size=3`)
    .then(async (res) => {
      const data = (await res.json()).events as EventType[]
      // props.hipHopRapEvents = data;
      return data
    })
    .catch((err) => {
      console.error(err)
    })

  const folkEvents = await fetch(`${apiHost}/events/folk?size=3`)
    .then(async (res) => {
      const data = (await res.json()).events as EventType[]
      // props.folkEvents = data;
      return data
    })
    .catch((err) => {
      console.error(err)
    })

  const popEvents = await fetch(`${apiHost}/events/pop?size=3`)
    .then(async (res) => {
      const data = (await res.json()).events as EventType[]
      // props.popEvents = data;
      return data
    })
    .catch((err) => {
      console.error(err)
    })

  const rnbEvents = await fetch(`${apiHost}/events/rnb?size=3`)
    .then(async (res) => {
      const data = (await res.json()).events as EventType[]
      // props.rnbEvents = data;
      return data
    })
    .catch((err) => {
      console.error(err)
    })

  props.rockEvents = rockEvents as EventType[]
  props.danceElectronicEvents = danceElectronicEvents as EventType[]
  props.hipHopRapEvents = hipHopRapEvents as EventType[]
  props.folkEvents = folkEvents as EventType[]
  props.popEvents = popEvents as EventType[]
  props.rnbEvents = rnbEvents as EventType[]
  props.folkEvents = folkEvents as EventType[]

  return { props }
}

export const Home: NextPage<PageProps> = (props) => {
  console.log(props)
  return (
    <section className="recommendations-section">
      <NavBar />
      <main className="recommendations-selection">
        <h1 className="recommendations-selection__title">Recommended events</h1>
        <SearchBar placeholder="Search for playlists" />
        <Categories />
        <EventsSection title="" />
        <EventsSection title="" />
      </main>
      <Footer />
    </section>
  )
}

export default Home

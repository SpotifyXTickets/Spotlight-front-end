import { ObjectId } from 'bson'
import Track from './track'
import Artist from './artist'

export type Event = {
  _id: ObjectId // Will be the same as the ticketMasterId for the event.
  ticketMasterId: string
  name: string
  description?: string
  imageUrl: string
  meanScore: number
  tickets: Array<{
    ticketeer: string
    venue: {
      city: string
      country: string
      address: string
      postalCode: string
      locationLon: string
      locationLat: string
    }
    ticketId: string
    ticketLink: string
    eventStartDate: string
    eventEndData: string
    ticketSaleStartDate: string
    ticketSaleEndDate: string
  }>
  matchScore?: number
}

export type EmbeddedEvent = Event & {
  _embedded?: {
    tracks: Track[]
    artists: Artist[]
  }
}

export default Event

// export type EventType = {
//   classifications: Array<{
//     family: boolean
//     genre: {
//       id: string
//       name: string
//     }
//     primary: boolean
//     segment: {
//       id: string
//       name: string
//     }
//     subGenre: {
//       id: string
//       name: string
//     }
//   }>
//   dates: {
//     spanMultipleDays: boolean
//     start: {
//       dateTBA: boolean
//       dateTBD: boolean
//       localDate: string
//       noSpecificTime: boolean
//       timeTBA: boolean
//       localTime: string
//     }
//     status: {
//       code: string
//     }
//     timezone: string
//   }
//   id: string
//   images: Array<{
//     fallback: boolean
//     height: number
//     width: number
//     ratio: string
//     url: string
//   }>
//   locale: string
//   name: string
//   priceRange: {
//     type: string
//     currency: string
//     max: number
//     min: number
//   }
//   promoter: {
//     id: string
//     name: string
//   }
//   promoters: Array<{
//     id: string
//     name: string
//   }>
//   sales: {
//     public: {
//       startDateTime: string
//       endDateTime: string
//       startTBA: boolean
//       startTBD: boolean
//     }
//   }
//   seatmap: {
//     staticUrl: string
//   }
//   test: boolean
//   type: string
//   url: string
//   _embedded: {
//     venues: Array<{
//       name: string
//       type: string
//       id: string
//       test: boolean
//       url: string
//       locale: string
//       images: Array<{
//         fallback: boolean
//         height: number
//         width: number
//         ratio: string
//         url: string
//       }>
//       postalCode: string
//       timezone: string
//       city: {
//         name: string
//       }
//       country: {
//         name: string
//         countryCode: string
//       }
//       address: {
//         line1: string
//       }
//       location: {
//         longitude: string
//         latitude: string
//       }
//       upcomingEvents: {
//         _total: number
//         _filtered: number
//         'mfx-nl': number
//       }
//       _links: {
//         self: {
//           href: string
//         }
//       }
//     }>
//   }
// }

export type PlaylistType = {
  href: string
  items: Array<PlaylistItemType>
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}
export type PlaylistItemType = {
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

export type Playlist = {
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

export type RecommendationEventType = {
  ticketMasterId: string
  name: string
  imageUrl: string
  startDate: string
  address: string
  city: string //Johan Cruijff ArenA, Amsterdam
}

export type EventType = {
  ticketMasterId: string
  meanScore: number
  city: string
  postalCode: string
  country: string
  address: string
  locationLon: number
  locationLat: number
  description: string
  name: string
  imageUrl: string
  ticketLink: string
  startDate: string
  endDate?: string
  _embedded?: {
    tracks: TrackType[]
  }
}

export type TrackType = {
  spotifyId: string
  name: string
  accousticness?: number
  danceability?: number
  energy?: number
  instrumentalness?: number
  liveness?: number
  loudness?: number
  speechiness?: number
  tempo?: number
  valence?: number
}

import '@/styles/components/_artist-concert-card-drag.scss'
import Artist from '@/types/artist'
import { RecommendationEventType } from '@/types/types'

import Image from 'next/image'
import Link from 'next/link'

export default function ArtistConcertCardDrag(props: {
  key: number
  smallClass?: boolean
  data: RecommendationEventType | Artist
}) {
  return (
    <div className="artist-concert-card-drag">
      <Link href={'/artist/' + (props.data as Artist)._id}>
        <Image
          className="artist-concert-card-drag__image"
          src={props.data.imageUrl}
          alt="Artist Image"
          width={300}
          height={300}
        />
        <div className="artist-concert-card-drag__info">
          <div className="artist-concert-card-drag__title">
            <h3>{props.data.name}</h3>
          </div>
          <span className="artist-concert-card-drag__span">
            10 concerts soon
          </span>
        </div>
      </Link>
    </div>
  )
}

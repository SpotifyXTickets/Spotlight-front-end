import '../styles/components/_event-card.scss'

import { useState } from 'react'
import Image from 'next/image'

import HeartIcon from '../assets/icons/heart.svg'
import FullHeartIcon from '../assets/icons/heart-red.svg'
import { RecommendationEventType } from '@/types/types'

export default function EventCard(props: {
  key: number
  data: {
    id: number
    artist: string
    artistImage: any
    percentage: number
    date: string
    location: string
  }
}) {
  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled)

  const formatter = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="event-card">
      <div>
        <div
          className={`event-card__percentage ${
            props.data.percentage > 60
              ? 'bg-percentage_green'
              : 'bg-percentage_blue'
          }`}
        >
          {props.data.percentage}%
        </div>
        <Image
          className="event-card__image"
          src={props.data.artistImage}
          alt="Artist Image"
        />
      </div>
      <div className="event-card__info">
        <div className="event-card__title">
          <h3>
            {props.data.name.length > 22
              ? props.data.name.substring(0, 20) + '..'
              : props.data.name}
          </h3>
          <Image
            className="event-card__heart"
            onClick={toggleHeart}
            src={!isHeartFilled ? HeartIcon : FullHeartIcon}
            alt="Favourite Icon"
          />
        </div>
        <span className="event-card__span">
          {formatter.format(new Date(props.data.startDate))}
        </span>
        <span className="event-card__span">
          {props.data.address}, {props.data.city}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault()
            window.location.href = `/event/${props.data.ticketMasterId}`
          }}
          className="event-card__button"
        >
          Learn More {'>'}
        </button>
      </div>
    </div>
  )
}

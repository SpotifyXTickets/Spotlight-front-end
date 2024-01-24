import '../styles/components/_event-card.scss'

import { useState } from 'react'
import Image from 'next/image'

import HeartIcon from '../assets/icons/heart.svg'
import FullHeartIcon from '../assets/icons/heart-red.svg'
import { RecommendationEventType } from '@/types/types'
import Event, { EmbeddedEvent } from '@/types/event'

export default function EventCard(props: {
  key: string
  data: EmbeddedEvent & { matchScore?: number }
}) {
  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled)

  const formatter = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="event-card">
      <div className="event-card__image-holder">
        {props.data.matchScore ? (
          <div
            className={`event-card__percentage ${
              props.data.matchScore * 100 > 60
                ? 'bg-percentage_green'
                : 'bg-percentage_blue'
            }`}
          >
            {Math.floor(props.data.matchScore * 100)}%
          </div>
        ) : (
          ''
        )}
        <Image
          className="event-card__image"
          src={props.data.imageUrl}
          fill={true}
          alt="Artist Image"
          objectFit="cover"
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
          {formatter.format(new Date(props.data.tickets[0].eventStartDate))}
        </span>
        <span className="event-card__span">
          {props.data.tickets[0].venue.address},{' '}
          {props.data.tickets[0].venue.city}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault()
            window.location.href = `/event/${props.data._id}`
          }}
          className="event-card__button"
        >
          Learn More {'>'}
        </button>
      </div>
    </div>
  )
}

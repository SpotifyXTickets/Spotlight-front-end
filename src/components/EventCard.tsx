import { useState } from 'react'
import Image from 'next/image'
import '../styles/components/_event-card.scss'
import HeartIcon from '../assets/heart.svg'
import FullHeartIcon from '../assets/heart-red.svg'
import { EventType } from '@/types/types'

export default function EventCard(props: { key: number; event: EventType }) {
  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled)

  const formatter = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
  })

  const image = props.event.images.sort((a, b) => {
    return a.height < b.height ? 1 : -1
  })[0]
  return (
    <div className="event-card">
      <Image
        className="event-card__image"
        src={image.url ? image.url : ''}
        alt="event image"
        width={image.width}
        height={image.height}
      />
      <div className="event-card__info">
        <div className="event-card__title">
          <h3>{props.event.name}</h3>
          <Image
            className="event-card__heart"
            onClick={toggleHeart}
            src={!isHeartFilled ? HeartIcon : FullHeartIcon}
            alt="Favourite Icon"
          />
        </div>
        <span className="event-card__span">
          {formatter.format(new Date(props.event.dates.start.localDate)) +
            ' ' +
            props.event.dates.start.localTime}
        </span>
        <span className="event-card__span">
          {props.event._embedded.venues[0].name +
            ', ' +
            props.event._embedded.venues[0].city.name}
        </span>
        <button className="event-card__button">Learn More {'>'}</button>
      </div>
    </div>
  )
}

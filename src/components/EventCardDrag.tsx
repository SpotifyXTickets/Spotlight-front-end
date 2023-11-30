import '../styles/components/_event-card-drag.scss'

import { useState } from 'react'
import Image from 'next/image'

import HeartIcon from '../assets/icons/heart.svg'
import FullHeartIcon from '../assets/icons/heart-red.svg'
import { RecommendationEventType } from '@/types/types'

export default function EventCardDrag(props: {
  key: number
  data: RecommendationEventType
}) {
  const [isHeartFilled, setIsHeartFilled] = useState(false)

  const toggleHeart = () => setIsHeartFilled(!isHeartFilled)

  const formatter = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="event-card-drag ">
      <Image
        className="event-card-drag__image"
        src={props.data.imageUrl}
        alt="Artist Image"
        width={300}
        height={300}
      />
      <div className="event-card-drag__info">
        <div className="event-card-drag__title">
          <h3>{props.data.name}</h3>
          <Image
            className="event-card-drag__heart"
            onClick={toggleHeart}
            src={!isHeartFilled ? HeartIcon : FullHeartIcon}
            alt="Favourite Icon"
          />
        </div>
        <span className="event-card-drag__span">
          {formatter.format(new Date(props.data.startDate))}
        </span>
        <span className="event-card-drag__span">
          {props.data.address}, {props.data.city}
        </span>
      </div>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/components/_event-card.scss'

import { useState } from 'react'
import Image from 'next/image'

import HeartIcon from '../assets/icons/heart.svg'
import FullHeartIcon from '../assets/icons/heart-red.svg'

export default function EventCard(props: {
  key: number
  data: {
    _id: string
    description?: string
    name: string
    imageUrl: string
    tickets: Array<{
      ticketeer: 'ticketmaster'
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
    _embedded: {
      artists: any[]
      tracks: any[]
    }
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
      <Image
        className="event-card__image"
        src={props.data.imageUrl}
        alt="Artist Image"
        width={300}
        height={300}
      />
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
            window.location.href = `/event/${props.data.tickets[0].ticketId}`
          }}
          className="event-card__button"
        >
          Learn More {'>'}
        </button>
      </div>
    </div>
  )
}

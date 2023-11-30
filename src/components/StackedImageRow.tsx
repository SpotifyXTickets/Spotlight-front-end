import '../styles/components/_stacked-image-row.scss'

import React from 'react'
import Image from 'next/image'

import IndieRock from '../assets/IndieRock.jpeg'
import JazzEvening from '../assets/JazzEvening.jpeg'
import Summer from '../assets/Summer.png'

export default function StackedImageRow() {
  return (
    <div className="stacked-image-row">
      <Image
        className="stacked-image-row__item stacked-image-row__outside stacked-image-row__outside--left"
        src={IndieRock}
        alt=""
      />

      <Image
        className="stacked-image-row__item stacked-image-row__inside stacked-image-row__inside--left"
        src={JazzEvening}
        alt=""
      />

      <Image
        className="stacked-image-row__item stacked-image-row__middle"
        src={Summer}
        alt=""
      />

      <Image
        className="stacked-image-row__item stacked-image-row__inside stacked-image-row__inside--right"
        src={JazzEvening}
        alt=""
      />

      <Image
        className="stacked-image-row__item stacked-image-row__outside stacked-image-row__outside--right"
        src={IndieRock}
        alt=""
      />
    </div>
  )
}

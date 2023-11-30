import '../styles/components/_playlist-section.scss'

import { useState } from 'react'

import Image from 'next/image'
import IndieRock from '../assets/IndieRock.jpeg'
import JazzEvening from '../assets/JazzEvening.jpeg'
import Summer from '../assets/Summer.png'
import { PlaylistType } from '@/types/types'

export default function PlaylistSection(props: {
  playlist: PlaylistType['items']
  onSelectPlaylist: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  console.log(props.playlist)
  return (
    <section className="playlist-section">
      {props.playlist.map((item) => (
        <label
          className="playlist-section__card"
          key={item.id}
          htmlFor={'playlist-section__checkbox_' + item.id}
        >
          <Image
            className="playlist-section__image"
            src={item.images[0] ? item.images[0].url : ''}
            alt={item.name}
            width={300}
            height={300}
          />

          <div className="playlist-section__checkbox">
            <input
              className="playlist-section__input"
              id={'playlist-section__checkbox_' + item.id}
              type="checkbox"
              value={item.id}
              onChange={props.onSelectPlaylist}
            />
            <label>{item.name}</label>
          </div>
        </label>
      ))}
    </section>
  )
}

import '../styles/components/_playlist-section.scss'

import Image from 'next/image'
import IndieRock from '../assets/IndieRock.jpeg'
import JazzEvening from '../assets/JazzEvening.jpeg'
import Summer from '../assets/Summer.png'
import { PlaylistType } from '@/types/types'

export default function PlaylistSection(props: {
  playlist: PlaylistType['items']
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
          <div className="playlist-section__image_holder">
            <Image
              className="playlist-section__image"
              src={item.images[0] ? item.images[0].url : ''}
              alt={item.name}
              fill
            />
          </div>

          <div className="playlist-section__info">
            <div className="playlist-section__checkbox">
              <input
                type="checkbox"
                value={item.name}
                id={'playlist-section__checkbox_' + item.id}
              ></input>
              <label>{item.name}</label>
            </div>
            <span>{item.tracks.total} songs</span>
            {/* <span>{item}</span> */}
          </div>
        </label>
      ))}
    </section>
  )
}

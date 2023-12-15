import "@/styles/components/_playlist-section.scss";

import Image from "next/image";

export default function PlaylistSection({
  playlists,
  selectedPlaylists,
  handlePlaylistClick,
}: any) {
  return (
    <section className="playlist-section">
      {playlists.map((item: any) => (
        <div
          key={item.id}
          className={`playlist-section__card ${
            selectedPlaylists.includes(item.id)
              ? " border-[#6e3aff]"
              : "border-transparent"
          }`}
          onClick={() => handlePlaylistClick(item.id)}
        >
          <Image
            className="playlist-section__image"
            src={item.playlistImage}
            alt={item.title}
          />
          <h4 className="playlist-section__title">{item.title}</h4>
        </div>
      ))}
    </section>
  );
}

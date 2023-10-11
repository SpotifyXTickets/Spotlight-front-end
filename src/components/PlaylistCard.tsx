import "@/styles/components/_playlist-card.scss";

export default function PlaylistCard(props: {
  key: number;
  data: {
    id: number;
    title: string;
    description: string;
    duration: string;
    artist: string;
    album: string;
    year: number;
  };
}) {
  return (
    <label
      className="playlist-card__checkbox-label"
      htmlFor={`playlist-card__checkbox-${props.data.id}`}
    >
      <div className="playlist-card">
        <div className="playlist-card__content">
          <h2 className="playlist-card__title">{props.data.title}</h2>
          <p className="playlist-card__description">{props.data.description}</p>
        </div>
        <div className="playlist-card__checkbox-area">
          <input
            type="checkbox"
            className="playlist-card__checkbox"
            id={`playlist-card__checkbox-${props.data.id}`}
          />
        </div>
      </div>
    </label>
  );
}

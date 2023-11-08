import "../styles/components/_select-playlists.scss"

export default function PlaylistSection(){
    return (
        <div className="playlist-section">
            <h2 className="playlist-section__header">Select Playlists</h2>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
            <div className="playlists-block">
                <div className="playlist-card"> 
                    <img src="album.png" alt="album"></img>
                    <input type="checkbox"  value="Indie Rock"></input>
                    <label for="vehicle1"> Indie Rock</label><br></br>
                    <p>50 Songs </p>
                    <p>Arctic Monkeys, Lana...</p>
                </div>
                <div className="playlist-card"> 
                    <input type="checkbox"  value="Indie Rock"></input>
                    <label for="vehicle1"> Indie Rock</label><br></br>
                    <p>50 Songs </p>
                    <p>Arctic Monkeys, Lana...</p>
                </div>
            </div>

        </div>
    )
}
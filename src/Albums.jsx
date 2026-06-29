import { use } from "react"
import Album from "./Album";

export default function Albums({ albums }) {
    const allAlbums = use(albums);
    console.log(allAlbums)

    return (
        <div className="universal">
            <h4>Total Albums: {allAlbums.length}</h4>
            {
                allAlbums.map(album=><Album keys={album.id} album={album}></Album>)
            }
        </div>
    )
}
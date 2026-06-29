export default function Album({ album }) {
    console.log(album)
    return (
        <div className="universal">
            <h4>User ID: {album.id}</h4>
            <p>Title: {album.title}</p>
        </div>
    )
}
export default function Album({ album }) {
    // const {id, title}=album
    // console.log(album)
    return (
        <div className="universal">
            <h4>User ID: {album.id}</h4>
            <p>Title: {album.title}</p>
        </div>
    )
}
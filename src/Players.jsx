import { useState } from "react"
import { useEffect } from "react"

export default function Players() {
    const [players, setPlayer] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, [])
    return (
        <div className="universal">
            <h1>Players Length: {players.length}</h1>
            <ol>
                {
                    players.map(player => <li>{player.name}</li>)
                }

            </ol>

        </div>
    )
}
import { use } from "react"

export default function Friends({ callFriend }) {
    const loadFriends = use(callFriend)
    return (
        <div className="universal">
            <h4>Friends:{loadFriends.length}</h4>
        </div>
    )
}
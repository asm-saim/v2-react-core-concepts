import { use } from "react"
import Friend from "./Friend"

export default function Friends({ callFriend }) {

     const loadFriends = use(callFriend)

    return (
        <div className="universal">
            <h4>Friends:{loadFriends.length}</h4>
            {
                loadFriends.map(friend=> <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}
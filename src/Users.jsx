import { use } from "react"
export default function Users({ callData }) {
    const loadData = use(callData)
    console.log(loadData)
    return (
        <div className="universal">
            <h2>Users: {loadData.length}</h2>
        </div>
    )
}
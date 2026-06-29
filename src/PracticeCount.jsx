import { useState } from "react"

export default function PracticeCount() {
    const [count, setCount] = useState(0)

    const value = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return (
        <div className="universal">
            <h2>Count:{count}</h2>
            <button onClick={value}>Count +</button> 

        </div>
    )
}
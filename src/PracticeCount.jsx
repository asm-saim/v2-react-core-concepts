import { useState } from "react"

export default function PracticeCount() {
    const [count, setCount] = useState(0)

    const countPlus = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const countMinus = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div className="universal">
            <h2>Count:{count}</h2>
            <button onClick={countPlus}>Count +</button>
            <br />
            <button onClick={countMinus}>Count -</button>

        </div>
    )
}
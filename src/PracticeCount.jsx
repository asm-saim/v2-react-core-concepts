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

    const reset=()=>{
        setCount(0)
    }
    return (
        <div className="universal button">
            <h2>Count:{count}</h2>
            <button onClick={countPlus}>Count +</button>
            <button onClick={countMinus}>Count -</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}
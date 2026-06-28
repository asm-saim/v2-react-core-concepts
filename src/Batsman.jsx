import { useState } from "react"

export default function Batsman() {
    const [score, setScore] = useState(0)

const handleSingle=()=>{
    const scoreSingle=score+1;
    setScore(scoreSingle)
}

    return (
        <div>
            <h2>Batsman's score Counter</h2>
            <h2>Score: {score}</h2>
            <button onClick={handleSingle}>Add Single</button>
        </div>
    )
}
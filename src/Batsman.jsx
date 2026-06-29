import { useState } from "react"

export default function Batsman() {
    const [score, setScore] = useState(0)
    const [six, setSix] = useState(0)

    const handleSingle = () => {
        const scoreSingle = score + 1;
        setScore(scoreSingle)
    }

    const handleFour = () => {
        const scoreFour = score + 4;
        setScore(scoreFour);
    }

    const handleSix = () => {
        const scoreSix = score + 6;
        setScore(scoreSix)

        const sixCounter = six + 1;
        setSix(sixCounter)

    }

    return (

        <div>
            <h2>Batsman's score Counter</h2>
            {/* conditional Rendering */}
            {
                score >= 50 && <h1>Congrats! Half Century.</h1>
            }

            <h2>Score: {score}</h2>
            <h2>Total Six:{six}</h2>
            <button onClick={handleSingle}>Add Single</button>
            <button onClick={handleFour}>Add Four</button>
            <button onClick={handleSix}>Add Six</button>
        </div>
    )
}
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0) 
    // count → the current state value. 
    // setCount → a function to update that value.
    // The 0 is the initial value.

    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const counterStyle = {
        border: "2px solid yellow",
        padding: "20px"
    }
    return (
        <div style={counterStyle}>
            <h3>Introducing Counter, by using state Change</h3>
            <p>Count: {count} </p>
            <button onClick={handleCount} >Add</button>
        </div>
    )
}
 export default function Counter() {
    const counterStyle={
        border:"2px solid yellow",
        padding:"20px"
    }
    return (
        <div style={counterStyle}>
            <h3>Introducing Counter, by using state Change</h3>
            <p>Count: </p>
            <button>Add</button>
        </div>
    )
}
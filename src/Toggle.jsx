import { useState } from "react"

// only hide:
// export default function Toggle() {
//     const [value, setValue] = useState(true)

//     return (
//         <div className="universal">
//             {value && <h2>Hello, React Learners!</h2>}
//             <button onClick={()=>setValue(false)}>Hide</button>

//         </div>
//     )
// }

// toggle: show/hide
export default function Toggle() {
    const [value, setValue] = useState(true)

    return (
        <div className="universal">
            {value && <h2>Hello, React Learners!</h2>}
            <button onClick={() => setValue(!value)}>{value ? "Hide" : "Show"}</button>

        </div>
    )
}
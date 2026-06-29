import { useState } from "react"

// export default function Toggle() {
//     const [value, setValue] = useState(true)

//     return (
//         <div className="universal">
//             {value && <h2>Hello, React Learners!</h2>}
//             <button onClick={()=>setValue(false)}>Hide</button>

//         </div>
//     )
// }
export default function Toggle() {
    const [value, setValue] = useState(true)

    return (
        <div className="universal">
            {value && <h2>Hello, React Learners!</h2>}
            <button onClick={()=>setValue(false)}>Hide</button>

        </div>
    )
}
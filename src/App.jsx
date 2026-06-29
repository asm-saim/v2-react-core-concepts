import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Albums from './Albums'
import Players from './Players'


// fetch the data from api:
// const callData = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())

// using async, await:
// const callFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }
// const callFriend = callFriends();

// Ex:3 using async await:
const callAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums")
  return res.json();
}
const albums=callAlbums();

function App() {
  // event Handler:case 1
  function handleClick() {
    alert("I am clicked.")
  }

  // event handler: case 2 (most of the case we will use this)
  const handleClick2 = () => {
    alert("Arrow function is clicked")
  }

  //event Handler: case3 (passing parameter)
  const handleClick3 = (num) => {
    let value = num + 5;
    alert(value);
  }


  return (
    <>
      <div id='center'>
        <h1>Get started</h1>
        {/* Lesson-1 Event Handler */}
        {/* <button onclick="handleClick()">Click</button>-> in js we use this */}
        <button onClick={handleClick}>Click</button>
        <button onClick={handleClick2}>Click2</button>
        <button onClick={() => alert("Button clicked")}>Click2</button>
        <button onClick={() => handleClick3(7)}>Click3</button>

        {/* Lesson-2 use State */}
        <Counter></Counter>

        {/* Lesson-3 useState */}
        <Batsman></Batsman>

        {/* {/* lesson-4 suspense & use(react-api)
        <Suspense fallback={<h2>Loading...</h2>}>
          <Users callData={callData}></Users>
        </Suspense> */}
        {/* Ex:2 of api 
        <Suspense fallback={<h2>Friends are coming...</h2>}>
          <Friends callFriend={callFriend}></Friends>
        </Suspense> */}

        <Suspense fallback={<h4>Albums data are loading...</h4>}>
        <Albums albums={albums}></Albums>
        </Suspense>

        {/* useEffect */}
          <Players></Players>
      </div>
    </>
  )
}

export default App

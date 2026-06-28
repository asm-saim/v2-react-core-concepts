import './App.css'

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
    alert (value);
  }

  return (
    <>
      <div id='center'>
        <h1>Get started</h1>
        {/* <button onclick="handleClick()">Click</button>-> in js we use this */}
        <button onClick={handleClick}>Click</button>
        <button onClick={handleClick2}>Click2</button>
        <button onClick={() => alert("Button clicked")}>Click2</button>
        <button onClick={()=>handleClick3(7)}>Click3</button>
      </div>
    </>
  )
}

export default App

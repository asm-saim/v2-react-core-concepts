import './App.css'

function App() {
  function handleClick() {
    alert("I am clicked.")
  }

  return (
    <>
      <div id='center'>
        <h1>Get started</h1>
        {/* <button onclick="handleClick()">Click</button>-> in js we use this */}
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  )
}

export default App

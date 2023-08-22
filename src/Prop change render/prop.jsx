const Porp = (prop) => {
    console.log("Hello")
  return (
    <div>
      <h1>{prop.number}</h1>
      <button onClick={prop.toggle}>Increment</button>
    </div>
  )
}

export default Porp

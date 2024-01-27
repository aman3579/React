import Func from "./first"
function App() {

  return (  //We can return only one value.and only one thing either a tag or any import function. 
           //returning more than two things will show error.
           //but we can use <div> to return whole as one tag.
            // or we can use <> </> known as fragments.
    <>
      <h1>Many functions are returned</h1>
    <Func />
    <p>By keeping many tag inside div</p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { selectUsers } from './store/usersSlice'
// import {useSelector} from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
//   const user = useSelector(selectUsers)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  //return (
  //<>
  //{
  //user.currentUser ? 
  //    <BrowserRouter>
  //    <Routes>
  //      <Route index element={<LoginPage />} />
  //      <Route path="add-book" element={<AddBookPage />} />
  //      <Route path="book/:id" element={<SingleBookPage />} />
  //    </Routes>
  //  </BrowserRouter>
  //<LoginPage />
  //} 
  //this is how the dude has it for the firebase tutorial
  )
}

export default App


import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string;
}

function App() {
  const [count, setCount] = useState(0)
  const handleClick: React.MouseEventHandler = () => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 6000)
  }

  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
    }, 3000)
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ul id="posts">
        {
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import { getUser } from './api.js'
import './app.css'

const date = new Date()

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    ;(async () => {
      const _user = await getUser()
      setUser(_user)
    })()
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        {user && <h1 className="title">Hello, {user.firstName}</h1>}
        <h2 className="sub-title">
          {date.toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' })}
        </h2>
      </header>
      <hr />
      <div className="columns">{/* TODO - Add columns and tasks */}</div>
    </div>
  )
}

export { App }

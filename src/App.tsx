import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppTutorial from './AppTutorial'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React ... bei Profihost!</h1>
      <div className="card">
        <button 
          onClick={() => setCount((count) => count + 1)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#646cff',
            color: 'white',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#535bf2';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#646cff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="tutorial-button-container">
        <Link 
          to="/tutorial" 
          className="tutorial-button"
          style={{
            padding: '12px 24px',
            backgroundColor: '#646cff',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            margin: '20px 0'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#535bf2';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#646cff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Go to Tutorial →
        </Link>
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tutorial" element={<AppTutorial />} />
    </Routes>
  )
}

export default App

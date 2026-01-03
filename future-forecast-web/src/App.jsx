import { useState } from 'react'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'

function App() {
  const [showDashboard, setShowDashboard] = useState(false)

  return (
    <div className="relative min-h-screen">
      <div className="scanline"></div>

      {!showDashboard ? (
        <Hero onEnter={() => setShowDashboard(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  )
}

export default App

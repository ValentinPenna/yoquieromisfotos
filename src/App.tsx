import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from "./components/primary"
import { Home } from "./views"

function App() {

  return (
    <div className='bg-background flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

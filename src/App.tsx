import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from "./components/primary"
import { Home } from "./views"

function App() {

  return (
    <div className='flex flex-col bg-background'>
      <Navbar />
      <main className='flex flex-col items-center p-4 md:px-6 lg:px-8'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

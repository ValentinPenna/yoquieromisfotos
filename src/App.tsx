import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from "./components/primary"
import { Home } from "./views"

function App() {

  return (
    <div className='bg-background flex flex-col'>
      <Navbar />
      <main className='h-screen p-4 md:px-6 lg:px-8 flex flex-col items-center'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

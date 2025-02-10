import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from "./components/primary"
import { Home, Register, Login } from "./views"

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Navbar />
      <main className='flex flex-col items-center p-4 py-20 md:px-6 lg:px-8'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

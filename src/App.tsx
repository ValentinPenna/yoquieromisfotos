import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from "./components/primary"
import { Home, Register, Login } from "./views"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/userSlice";
import { decodeToken } from './utils/decodeToken'; // Asegúrate de que la ruta sea correcta
import Products from './views/Products';
import ProductsDetail from './views/ProductsDetail';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const user = decodeToken(token); // Ahora esta función está definida
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Navbar />
      <main className='flex flex-col items-center p-4 py-20 md:px-6 lg:px-8'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductsDetail/>}/>
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

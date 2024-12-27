import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='flex items-center justify-between w-full h-16 p-2 bg-primary'>
        <h1>Yo Quiero Mis Fotos</h1>
        <div className='flex items-center gap-4'>
            <Link to="/">Inicio</Link>
            <Link to="/login">Login</Link>
        </div>
        <h1>Carrito</h1>
    </div>
  )
}

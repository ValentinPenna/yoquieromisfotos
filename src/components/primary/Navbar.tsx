import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='bg-primary h-16 w-full flex items-center p-2'>
        <h1>Yo Quiero Mis Fotos</h1>
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

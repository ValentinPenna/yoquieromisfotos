import { Link } from "react-router-dom";
import logo_blanco from "../../assets/logo_blanco.png"

export default function Navbar() {
  return (
    <div className='flex items-center justify-between w-full h-16 px-4 py-2 bg-primary'>
      <div className="flex items-center gap-2">
        <img src={logo_blanco} alt="" className="w-12 h-12"/>
        <h1 className="text-2xl font-bold">@YoQuieroMisFotos</h1>
      </div>
        <div className='flex items-center gap-4'>
            <Link to="/" className="font-semibold text-white">Inicio</Link>
            <Link to="/login" className="font-semibold text-white">Login</Link>
        </div>
        <h1>Carrito</h1>
    </div>
  )
}

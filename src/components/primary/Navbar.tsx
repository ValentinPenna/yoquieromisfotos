import { Link } from "react-router-dom";
import logo_blanco from "../../assets/logo_blanco.png"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { clearUser } from "../../store/slices/userSlice";

export default function Navbar() {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(clearUser());
  };

  return (
    <div className='fixed z-10 flex items-center justify-between w-full h-16 px-4 py-2 bg-primary'>
      <div className="flex items-center gap-2">
        <img src={logo_blanco} alt="" className="w-12 h-12"/>
        <h1 className="text-2xl font-bold">@YoQuieroMisFotos</h1>
      </div>
      <div className='flex items-center gap-4'>
        <Link to="/" className="font-semibold text-white">Inicio</Link>
        {isAuthenticated ? (
          <>
            <h1 className="font-semibold text-white">Carrito</h1>
            <button onClick={handleLogout} className="font-semibold text-white">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="font-semibold text-white">Login</Link>
            <Link to="/register" className="font-semibold text-white">Register</Link>
          </>
        )}
      </div>
    </div>
  )
}

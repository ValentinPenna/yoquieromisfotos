import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (value.length < 2) {
          error = "El nombre debe tener al menos 2 caracteres";
        }
        break;
      case "lastName":
        if (value.length < 2) {
          error = "El apellido debe tener al menos 2 caracteres";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Ingrese un correo electrónico válido";
        }
        break;
      case "password":
        const hasLetter = /[a-zA-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        
        if (value.length < 8) {
          error = "La contraseña debe tener al menos 8 caracteres";
        } else if (value.length > 15) {
          error = "La contraseña no debe exceder los 15 caracteres";
        } else if (!hasLetter || !hasNumber) {
          error = "La contraseña debe contener al menos una letra y un número";
        }
        break;
    }
    return error;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }))
    
    const error = validateField(name, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Verificar si hay errores o campos vacíos
    const hasErrors = Object.values(errors).some(error => error !== "")
    const hasEmptyFields = Object.values(userData).some(value => value === "")
    
    if (hasErrors || hasEmptyFields) {
      alert("Por favor, complete todos los campos correctamente")
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        throw new Error('Error al crear el usuario')
      }

      const data = await response.json()
      
      // Guardamos los datos del usuario en Redux
      dispatch(setUser({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        _id: data._id,
      }));

      alert("Usuario creado exitosamente")
      navigate('/'); // Redirige al home
      
    } catch (error) {
      alert("Error al crear el usuario. Por favor, intente nuevamente")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] gap-4'>
        <h1 className='text-2xl font-bold text-center text-primary'>Registrarse</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-3'>
            <label htmlFor="name" className='flex flex-col gap-1 font-semibold text-primary'>
                Nombre:
                <input type="text" name='name' className={`px-2 py-1 text-sm font-medium bg-white border-2 outline-none rounded-xl w-52 ${errors.name ? 'border-red-500' : 'border-primary'}`} onChange={handleChange}/>
                {errors.name && <span className="text-xs text-red-500 break-words w-52">{errors.name}</span>}
            </label>
            <label htmlFor="lastName" className='flex flex-col gap-1 font-semibold text-primary'>
                Apellido:
                <input type="text" name='lastName' className={`px-2 py-1 text-sm font-medium bg-white border-2 outline-none rounded-xl w-52 ${errors.lastName ? 'border-red-500' : 'border-primary'}`} onChange={handleChange}/>
                {errors.lastName && <span className="text-xs text-red-500 break-words w-52">{errors.lastName}</span>}
            </label>
            <label htmlFor="email" className='flex flex-col gap-1 font-semibold text-primary'>
                Correo Electronico:
                <input type="email" name='email' className={`px-2 py-1 text-sm font-medium bg-white border-2 outline-none rounded-xl w-52 ${errors.email ? 'border-red-500' : 'border-primary'}`} onChange={handleChange}/>
                {errors.email && <span className="text-xs text-red-500 break-words w-52">{errors.email}</span>}
            </label>
            <label htmlFor="password" className='flex flex-col gap-1 font-semibold text-primary'>
                Contraseña:
                <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name='password' 
                        className={`py-1 pl-2 text-sm font-medium bg-white border-2 outline-none pr-7 rounded-xl w-52 ${errors.password ? 'border-red-500' : 'border-primary'}`}
                        onChange={handleChange}
                    />
                    <button 
                        type="button"
                        onClick={togglePasswordVisibility} 
                        className="absolute -translate-y-1/2 right-2 top-1/2 text-primary"
                    >
                        {showPassword ? <FaRegEyeSlash/> : <FaRegEye />}
                    </button>
                </div>
                {errors.password && <span className="text-xs text-red-500 break-words w-52">{errors.password}</span>}
            </label>
            
            <button 
                type="submit" 
                className={`w-52 py-2 mt-2 text-sm font-semibold text-white rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed`}
                disabled={loading}
            >
                {loading ? "Creando usuario..." : "Registrarse"}
            </button>
        </form>
    </div>
  )
}

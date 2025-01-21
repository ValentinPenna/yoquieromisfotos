import Carrousel from "../components/primary/Carrousel";
import Products from "../components/primary/Products";
import banner1 from "../assets/media/1.png"
import banner2 from "../assets/media/2.png"
import banner3 from "../assets/media/3.png"
import banner4 from "../assets/media/4.png"
import { useEffect, useState } from "react";
import { IProduct } from "../utils/interfaceProduct";

const VITE_PUBLIC_API_URL = import.meta.env.VITE_PUBLIC_API_URL;

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(()=>{ 
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${VITE_PUBLIC_API_URL}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'

        }
        })
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error al obtener productos:', error)
      }
    }
    fetchProducts()
  }, [])
  return (
    <>
        <Carrousel images={[banner1, banner2, banner3, banner4]} />
        <Products products={products}/>
    </>
  )
}

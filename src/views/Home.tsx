import Carrousel from "../components/primary/Carrousel";
import Products from "../components/primary/Products";
import banner1 from "../assets/media/1.png"
import banner2 from "../assets/media/2.png"
import banner3 from "../assets/media/3.png"
import banner4 from "../assets/media/4.png"


export default function Home() {
  return (
    <>
        <Carrousel images={[banner1, banner2, banner3, banner4]} />
        <Products />
    </>
  )
}

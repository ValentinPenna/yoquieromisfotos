import { Link } from "react-router-dom"
import { IProduct } from "../../utils/interfaceProduct"

export default function ProductCard(props: IProduct) {
  const {photos, name, price, slug} = props
  return (
    <div className="flex items-center w-1/2 p-4 h-80 sm:w-1/3 md:w-1/4">
        <Link to={`/productos/${slug}`} className="flex flex-col items-center w-full h-full p-2 bg-secondary rounded-xl">
            <img src={photos && photos[0]} alt={name} className="w-full h-2/3"/>
            <div className="flex flex-col items-start justify-center w-full h-1/3">
                <h4 className="font-bold text-white">{name}</h4>
                {/* <p className="text-white">{desc}</p> */}
                <p className="font-bold text-primary">${price}</p>
            </div>
        </Link>
    </div>
    
  )
}

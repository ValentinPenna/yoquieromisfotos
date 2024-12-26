import { Link } from "react-router-dom"

export default function ProductCard({imagen, title, desc, price, slug}: any) {
  return (
    <div className=" h-80 w-1/2 sm:w-1/3 md:w-1/4 flex items-center p-4">
        <Link to="/products/" className="bg-secondary h-full w-full flex items-center p-2 rounded-xl flex-col">
            <img src={imagen} alt={title} className="h-2/3 w-full"/>
            <div className="h-1/3 w-full flex items-start flex-col justify-center">
                <h4 className="font-bold text-white">{title}</h4>
                <p className="text-white">{desc}</p>
                <p className="font-bold text-primary">{price}</p>
            </div>
        </Link>
    </div>
    
  )
}

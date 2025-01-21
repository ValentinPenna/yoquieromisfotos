import { IProduct } from '../../utils/interfaceProduct'
import ProductCard from '../secondary/ProductCard'

export default function Products({ products }: { products: IProduct[] }) {
  return (
    <div className='flex flex-col md:w-full lg:w-11/12 xl:w-4/5'>
        <h1 className='text-2xl font-bold text-center text-primary'>Productos y Promociones</h1>
        <div className='flex flex-row flex-wrap'>
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            {...product}
          />
        ))}
        </div>
    </div>
  )
}

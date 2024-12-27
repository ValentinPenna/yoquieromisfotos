import ProductCard from '../secondary/ProductCard'

export default function Products() {
  return (
    <div className='flex flex-col md:w-full lg:w-11/12 xl:w-4/5'>
        <h1 className='text-2xl font-bold text-center text-primary'>Productos y Promociones</h1>
        <div className='flex flex-row flex-wrap'>
        <ProductCard title="Foto 20x30" desc="20x30" price="$100"/>
        <ProductCard title="Foto 20x30" desc="20x30" price="$100"/>
        <ProductCard title="Foto 20x30" desc="20x30" price="$100"/>
        <ProductCard title="Foto 20x30" desc="20x30" price="$100"/>
        <ProductCard title="Foto 20x30" desc="20x30" price="$100"/>
        </div>
    </div>
  )
}

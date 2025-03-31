import React, { useEffect, useState } from 'react';
import Products from '../components/primary/Products';
import { fetchProducts } from '../utils/dbCalls';
import { IProduct } from '../utils/interfaceProduct'; // Asegúrate de que la ruta sea correcta

function ProductsView() {
  const [products, setProducts] = useState<IProduct[]>([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Llamar a la función para obtener productos
        setProducts(data); // Almacenar los productos en el estado
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false); // Cambiar el estado de carga
      }
    };
    loadProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>; // Mensaje de carga
  }

  return (
    <Products products={products} /> // Pasar los productos al componente Products
  );
}

export default ProductsView;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/dbCalls'; // Importar la función

function ProductsDetail() {
  const { id } = useParams<{ id: string }>(); // Capturar el ID de los parámetros
  const [product, setProduct] = useState<any>(null); // Estado para almacenar el producto
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const loadProduct = async () => {
      if (id) { // Verificar que id no sea undefined
        try {
          const data = await fetchProductById(id); // Llamar a la función para obtener el producto
          setProduct(data); // Almacenar el producto en el estado
        } catch (error) {
          console.error('Error al cargar el producto:', error);
        } finally {
          setLoading(false); // Cambiar el estado de carga
        }
      } else {
        console.error('ID del producto no proporcionado');
        setLoading(false); // Cambiar el estado de carga si no hay ID
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return <div>Cargando producto...</div>; // Mensaje de carga
  }

  if (!product) {
    return <div>No se encontró el producto.</div>; // Mensaje si no se encuentra el producto
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Renderiza más información del producto según sea necesario */}
    </div>
  );
}

export default ProductsDetail;
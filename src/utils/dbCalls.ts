const VITE_PUBLIC_API_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${VITE_PUBLIC_API_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error; // Re-lanzar el error para manejarlo en el componente
  }
};

// Nueva función para obtener un producto por ID
export const fetchProductById = async (id: string) => {
  try {
    const response = await fetch(`${VITE_PUBLIC_API_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener el producto');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error; // Re-lanzar el error para manejarlo en el componente
  }
};

const BASE_URL = "http://localhost:3001/products";

const productList = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error al obtener productos: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al obtener productos:", error);
    throw error;
  }
};

const createProduct = async (name, price, image) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, image }),
    });
    if (!response.ok) {
      throw new Error(`Error al crear producto: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al crear producto:", error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  if (!id) {
    throw new Error("Id de producto no válido");
  }
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error al eliminar producto: ${response.status}`);
    }
    const data = await response.json();
    console.log("Producto eliminado:", data);
    return data;
  } catch (error) {
    console.log("Error al eliminar producto:", error);
    throw error;
  }
};

export const servicesProducts = {
  productList,
  createProduct,
  deleteProduct,
};


























/*const BASE_URL= "http://localhost:3001/products";

const productList = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log("error al ingresar productos: ",error);

        
    }
};

const createProduct = async (name, price, image) =>{}
try  {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, image})
    
} );
const data = await response.json();
return data;
} catch (error) {
    console.log("Error al crear productos: ", error);
    
}

const deleteProduct = async (id) => {
    try {
        const eliminar = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                },
                
            });
            const data = await eliminar.json();
            console.log("producto eliminado" , data);
            return data;
           



            } catch (error) {
                console.log("Error al eliminar producto: ", error);
                
    } 
        
    }

 


export const  servicesProducts = {
    productList, 
    createProduct,
    deleteProduct,

};*/
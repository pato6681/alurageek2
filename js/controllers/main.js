import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createCard({ name, price, image, id }) {
  const card = document.createElement("section");
  card.classList.add("product");
  card.innerHTML = `
        <img src="${image}" alt="${name}">
    <h2>${name}</h2>
    <p>Price: $${price}</p>
    <button class="btn-delete" data-id="${id}">Eliminar</button>
    <button class="btn-buy" data-id="${id}">Buy</button>
  `;
  return card;
}


function addDeleteEvent(card, id) {
  const deleteButton = card.querySelector(".btn-delete");
  deleteButton.addEventListener("click", async () => {
    try {
      await servicesProducts.deleteProduct(id);
      card.remove();
      console.log(`Producto con id ${id} eliminado`);
    } catch (error) {
      console.error(`Error al eliminar el producto con id ${id}:`, error);
    }
  });
}

const renderProducts = async () => {
  try {
    const listProducts = await servicesProducts.productList();
    listProducts.forEach((product) => {
      const productCard = createCard(product);
      productContainer.appendChild(productCard);
      addDeleteEvent(productCard, product.id);
    });
  } catch (error) {
    console.log("error al eliminar el producto", error);
  }
};

form.addEventListener("submit", async (Event) => {
  Event.preventDefault();
console.log(Event);


  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  try {
    const newProduct = await servicesProducts.createProduct(name, price, image);
    const newCard = createCard(newProduct);
    productContainer.appendChild(newCard);
    addDeleteEvent(newCard, newProduct.id);
  } catch (error) {
    console.error("Error al crear el producto:", error);
  }

  form.reset();
});

renderProducts();


































































/*import { servicesProducts } from "../services/product-services";




const productContainer = document.querySelector ("[data-product]");
const form = document.querySelector ("[data-form]");

function createCard({name, price, image, id}) {
    const card = document.createElement ("div");
    card.classList.add ("card");
    //OJO: CHEQUEAR ESTA FUNCION CON EL VIDEO, MINUTO 38//
    card.innerHTML =  
    `<h2>${name}</h2>
    <p>Price: $${price}</p>
    <img src="${image}" alt="${name}">
    <button class="btn-buy" data-id="${id}">Buy</button>`;
    <button class="btn-delete" data-id="${id}">Eliminar</button>
    ;

return card; 


}

// Función para agregar el evento de clic al botón de eliminar
function addDeleteEvent(card, id) {
  const deleteButton = card.querySelector(".btn-delete");
  deleteButton.addEventListener("click", async () => {
    try {
      await servicesProducts.deleteProduct(id);
      card.remove();
      console.log(`Producto con id ${id} eliminado`);
    } catch (error) {
      console.error(`Error al eliminar el producto con id ${id}:`, error);
    }
  });
} 


const renderProducts = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        listProducts.forEach((product) => {
            const productCard = createCard(product);
            productContainer.appendChild(productCard);


    }); 
    
} catch (error) {
        console.log(error)
        
    } 
    
    
 };

 form.addEventListener("submit",async (Event) => {
    Event.preventDefault();

    const name = document.querySelector ("[data-name]").value;
    const price = document.querySelector ("[data-price]").value;
    const image = document.querySelector ("[data-image]").value;

    console.log(name);
    console.log(price);
    console.log(image);

 })

 try {
    
 } catch (error) {
    const newProduct = await servicesProducts.createProduct(name, price, image);
    const newCard = createCard(newProduct);
    productContainer.appendChild(newCard);

    console.log(error)


   
// Asigna el evento de eliminación
  addDeleteEvent(card, id);

  return card;
}

// Asigna el evento de eliminar producto a la tarjeta
function addDeleteEvent(card, id) {
  const deleteButton = card.querySelector(".delete-button");
  deleteButton.addEventListener("click", async () => {
    try {
      await servicesProducts.deleteProduct(id);
      card.remove();
      console.log(`Producto con id ${id} eliminado`);
    } catch (error) {
      console.error(`Error al eliminar el producto con id ${id}:`, error);
    }
  });
}


   


 form.reset();






 renderProducts();






*/

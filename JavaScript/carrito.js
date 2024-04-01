//variables para traer el carrito del storage
let productsStored = localStorage.getItem("productosCarrito")
productsStored = JSON.parse(productsStored)

let contenedorCarrito = document.getElementById("cart-section")

//funciones para crear el carrito

function renderCarrito(items){
    items.forEach ((producto) => {
        let carrito = document.createElement("div")
        carrito.className = "shopping-cart"
        carrito.innerHTML = `<img src="${producto.img}">
                             <h2>${producto.h2}</h2>
                             <p>${producto.p}</p>`
        contenedorCarrito.appendChild(carrito)
    })
}

renderCarrito(productsStored)
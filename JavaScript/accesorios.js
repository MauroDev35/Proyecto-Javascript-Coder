let productosAccesorios = [
    {id:36, class: "product1", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:37, class: "product2", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:38, class: "product3", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:39, class: "product4", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:40, class: "product5", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:41, class: "product6", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:42, class: "product7", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:43, class: "product8", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:44, class: "product9", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:45, class: "product10", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:46, class: "product11", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
    {id:47, class: "product12", img: "../imagenes/separador1.jpg", h2:"Separador de Libros", p:8000},
]

//Variables globales
let productosCarrito
let productosCarritoLS = localStorage.getItem("productosCarrito")
let contenedorAccesorios = document.getElementById("accesorios-section")

//condicional para revisar si el carrito tiene algun producto previamente
if(productosCarritoLS) {
    let productosCarritoLS = localStorage.getItem("productosCarrito")
    productosCarrito = JSON.parse(productosCarritoLS)
}

else {
    productosCarrito = []
}

//funciones para renderizar las paginas de productos y boton para agregar al carrito
function renderProductos(productosArray, contenedorProductos){
    productosArray.forEach ((producto) => {
        let contenedor = document.createElement("div")
        contenedor.className = `${producto.class}` 
        contenedor.innerHTML = `<img src="${producto.img}">
                                <h2>${producto.h2}</h2>
                                <p>${producto.p}</p>
                                <button class="btn-agregar" id="${producto.id}">Agregar</button>`
    
        contenedorProductos.appendChild(contenedor)
    })
    addingCartButton(productosArray)
}


function addingCartButton(productosArray){
    let addbtn = document.querySelectorAll(".btn-agregar")
    addbtn.forEach(button => {
        button.onclick = (element) => {
            const productId = element.currentTarget.id
            const productoSeleccionado = productosArray.find (producto => producto.id == productId)
            productosCarrito.push(productoSeleccionado)

            localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito))
        }
    })
}

renderProductos(productosAccesorios, contenedorAccesorios)
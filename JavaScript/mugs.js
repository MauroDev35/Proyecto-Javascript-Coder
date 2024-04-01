let productosMugs = [
    {id:13, class: "product1", img: "../imagenes/mug1.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:14, class: "product2", img: "../imagenes/mug2.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:15, class: "product3", img: "../imagenes/mug3.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:16, class: "product4", img: "../imagenes/mug1.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:17, class: "product5", img: "../imagenes/mug2.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:18, class: "product6", img: "../imagenes/mug3.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:19, class: "product7", img: "../imagenes/mug1.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:20, class: "product8", img: "../imagenes/mug2.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:21, class: "product9", img: "../imagenes/mug3.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:22, class: "product10", img: "../imagenes/mug1.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:23, class: "product11", img: "../imagenes/mug2.jpg", h2:"Descripcion de la prenda", p:"Precio"},
    {id:24, class: "product12", img: "../imagenes/mug3.jpg", h2:"Descripcion de la prenda", p:"Precio"}
]

//Variables globales
let productosCarrito
let productosCarritoLS = localStorage.getItem("productosCarrito")
let contenedorMug = document.getElementById("mug-section")

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
            console.log(productosCarrito)

            localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito))
        }
    })
}

renderProductos(productosMugs, contenedorMug)
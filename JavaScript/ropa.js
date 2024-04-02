let productosRopa = [
    {id:25, class: "product1", img: "../imagenes/camiseta1.jpg", h2:"Camiseta Blanca", p:"$ 25000"},
    {id:26, class: "product2", img: "../imagenes/camiseta2.jpg", h2:"Camiseta Blanca Estampada", p:"$ 30000"},
    {id:27, class: "product3", img: "../imagenes/camiseta3.jpg", h2:"Camiseta Blanca", p:"$ 25000"},
    {id:28, class: "product4", img: "../imagenes/camiseta4.jpg", h2:"Camiseta Gris", p:"$ 25000"},
    {id:29, class: "product5", img: "../imagenes/camiseta5.jpg", h2:"Camiseta Verde Oversize", p:"$ 32000"},
    {id:30, class: "product6", img: "../imagenes/camiseta6.jpg", h2:"Camiseta Blanca Oversize", p:"$ 32000"},
    {id:31, class: "product7", img: "../imagenes/camiseta7.jpg", h2:"Camiseta Blanca Estampada", p:"$ 30000"},
    {id:32, class: "product8", img: "../imagenes/camiseta8.jpg", h2:"Camiseta Blanca Oversize", p:"$ 32000"},
    {id:33, class: "product9", img: "../imagenes/camiseta9.jpg", h2:"Camiseta Negra", p:"$ 25000"},
    {id:34, class: "product10", img: "../imagenes/camiseta1.jpg", h2:"Camiseta Blanca", p:"$ 25000"},
    {id:35, class: "product11", img: "../imagenes/camiseta2.jpg", h2:"Camiseta Blanca", p:"$ 25000"},
    {id:36, class: "product12", img: "../imagenes/camiseta3.jpg", h2:"Camiseta Blanca", p:"$ 25000"}
]

//Variables globales
let productosCarrito
let productosCarritoLS = localStorage.getItem("productosCarrito")
let contenedorRopa = document.getElementById("ropa-section")

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

renderProductos(productosRopa, contenedorRopa)
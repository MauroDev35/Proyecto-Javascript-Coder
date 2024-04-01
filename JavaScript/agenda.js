//Arrays con los objetos para crear las tarjetas
let productosAgenda = [
    {id:1, class: "product1", img: "../imagenes/sketchbook1.jpg", h2:"Agenda", p:"$ 25000"},
    {id:2, class: "product2", img: "../imagenes/sketchbook2.jpg", h2:"Agenda", p:"$ 25000"},
    {id:3, class: "product3", img: "../imagenes/sketchbook3.jpg", h2:"Agenda", p:"$ 25000"},
    {id:4, class: "product4", img: "../imagenes/sketchbook1.jpg", h2:"Agenda", p:"$ 25000"},
    {id:5, class: "product5", img: "../imagenes/sketchbook2.jpg", h2:"Agenda", p:"$ 25000"},
    {id:6, class: "product6", img: "../imagenes/sketchbook3.jpg", h2:"Agenda", p:"$ 25000"},
    {id:7, class: "product7", img: "../imagenes/sketchbook1.jpg", h2:"Agenda", p:"$ 25000"},
    {id:8, class: "product8", img: "../imagenes/sketchbook2.jpg", h2:"Agenda", p:"$ 25000"},
    {id:9, class: "product9", img: "../imagenes/sketchbook3.jpg", h2:"Agenda", p:"$ 25000"},
    {id:10, class: "product10", img: "../imagenes/sketchbook1.jpg", h2:"Agenda", p:"$ 25000"},
    {id:11, class: "product11", img: "../imagenes/sketchbook2.jpg", h2:"Agenda", p:"$ 25000"},
    {id:12, class: "product12", img: "../imagenes/sketchbook3.jpg", h2:"Agenda", p:"$ 25000"},
]


//Variables globales
let productosCarrito
let productosCarritoLS = localStorage.getItem("productosCarrito")
let contenedorAgenda = document.getElementById("agenda-section")


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

//renderizando las paginas
renderProductos(productosAgenda, contenedorAgenda)




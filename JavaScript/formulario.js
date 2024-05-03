let comprar = document.getElementById("comprar")

comprar.addEventListener('click', () => {
    Swal.fire({
        title: "¡Gracias por comprar!",
        text: "Tu compra ha sido realizada de manera exitosa.",
        icon: "success"
      });
})
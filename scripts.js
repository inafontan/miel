/*let productoSeleccionado;

const saludar = () => {                 
    alert("Bienvenido a nuestro Shop");         // Saludar y mostrar nombre
    let nombre = prompt("Ingrese su nombre");
    carritoDiv.innerHTML = `<h2>Bienvenido/a ${nombre.toUpperCase()}</h2>`;
};

class Producto {
    constructor (id, nombre, peso, precio) {
        this.id = id;
        this.nombre = nombre;
        this.peso = peso;
        this.precio = precio;
    }
}

const mielXS = new Producto(1, "MielXS", "250gr", 300);
const mielM = new Producto(2, "MielM", "500gr", 500);
const mielL = new Producto(3, "MielL", "750gr", 700);
const mielXG = new Producto(4, "MielXG", "1000gr", 900);

const productos = [mielXS, mielM, mielL, mielXG];

const carrito = [ ]  // Se guardan los productos

const carritoDiv = document.getElementById ("carritoDiv");

const consultarProducto = () => {
        let texto = "";
    for (let p of productos) {                       //Recorro los productos
        texto += `${p.id}) ${p.nombre}\n`;
    }

    let producto = parseInt(prompt(`Qué producto llevará?\n ${texto}`));             //Se muestra el resultado del recorrido anterior
    while (isNaN(producto) || producto <1 || producto > 4) {
        producto = parseInt(prompt(`Qué producto llevará?\n ${texto}`));
    }

    return producto; 

};    

const llevarProducto = () => {
    let buscarProducto = productos.find(                    // Busca dentro del inventario productos
        (element) => element.id === productoSeleccionado
    ); 

    let existe = carrito.some((element) => element.id === buscarProducto.id);
    console.log(existe);

    if(existe){
        carrito.map(element=>{
            if(element.id === buscarProducto.id){
                element.cantidad++;
                return element;
            }
        });
    }else{
        buscarProducto.cantidad = 1;                           // Cantidad del producto a llevar
        carrito.push(buscarProducto);                          // Guardar en el carrito el producto selecionado 
    }

    let seguir = confirm("Desea llevar otro producto?")    // Agregar varios productos al carrito.
    if (seguir){                                           //  Se agrega más de uno que ya está (true)
        productoSeleccionado = consultarProducto ();
        llevarProducto ();
    }
}; 

const mostrarProductos = ()=>{
    let contenidoCarrito=document.createElement("div");
    contenidoCarrito.className = "carrito";
    carritoDiv.appendChild(contenidoCarrito);

    carrito.forEach((element) => {                                      // Lista los elementos del carrito, suma los precios por cantidad
        contenidoCarrito.innerHTML += `<div class="carritoDiv">
        <h3>NOMBRE ${element.nombre}</h3>
        <h3>PRECIO ${element.precio}</h3>
        <h3>CANTIDAD ${element.cantidad}</h3>
        <h3>Subtotal ${element.precio * element.cantidad}</h3>
        </div>`;
    });
};

const calcularTotal = () => {                                                           // Muestra el total de los productos agregados
    let total = carrito.reduce((acc, ite) => acc + ite.cantidad * ite.precio, 0);
    carritoDiv.innerHTML+= `<div class="totalCarrito"><h3>TOTAL ${total}</h3></div>`;
};
    
saludar();
productoSeleccionado = consultarProducto();
llevarProducto();
mostrarProductos();
calcularTotal();
*/

//CREAR USUARIO

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let arrayPersonas = []

localStorage.setItem('Personas', JSON.stringify(arrayPersonas))
let formPersona = document.getElementById('formPersona')
let botonPersonas = document.getElementById('botonPersonas')
let divPersonas = document.getElementById('divPersonas')

formPersona.addEventListener('submit', (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)
    //console.log(datForm.get('nombre')) //document.getElementById('idNombre').value
    const persona = new Persona(datForm.get('nombre'), datForm.get('apellido'), datForm.get('edad'))
    arrayPersonas.push(persona)
    localStorage.setItem('Personas', JSON.stringify(arrayPersonas))
    formPersona.reset()
})

botonPersonas.addEventListener('click', () => {
    let personasDeStorage = JSON.parse(localStorage.getItem('Personas'))
    personasDeStorage.forEach(persona => {
        divPersonas.innerHTML += `
            <p> ${persona.nombre} </p>
            <p> ${persona.apellido} </p>
            <p> ${persona.edad} </p>
        `
    }) 
})
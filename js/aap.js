








































const carritoArray = [];

class carritoItem {
    constructor(nombre, precio, marca,categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.categoria = categoria;
    }
    
}

function mostrarCarritoConIva(IvaIncluido){
    console.log(IvaIncluido);
}
function productosCargados(producto) {
    carritoArray.push(producto);
}


function ingresoProducto() {
    let item;
    let continuar;
    let carritoArrayConIva;
    let resultado;
    let tipo;

    do {
        item = new carritoItem(prompt("Ingrese el nombre del producto, por favor"),
            parseInt(prompt("ingrese el precio del producto, por favor")),
            prompt("Ingrese la marca del producto, por favor"),
            prompt("Ingrese categoria del producto"));
        productosCargados(item);
        carritoArrayConIva = carritoArray.map((item) => { return { nombre: item.nombre, precio: item.precio * 1.21, marca: item.marca, categoria:item.categoria} });
        mostrarCarritoConIva(carritoArrayConIva);
        alert(`Se le a agregado el IVA a su ${item.nombre} y el precio queda en ${item.precio * 1.21}`)
        resultado = carritoArrayConIva.find((item) => item.marca === "serenisima");
		if (resultado) {
			resultado.precio = resultado.precio * .70;
			console.log(resultado.precio);
		}
        tipo = carritoArrayConIva.filter((item)=> item.categoria === "lacteos");
        console.log(tipo);
        continuar = prompt("Desea continuar ? si/no")
    } while (continuar === "si");
}

ingresoProducto();
console.log(carritoArray);
carritoArray.forEach(elemento => console.log(elemento))





































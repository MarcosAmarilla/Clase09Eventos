let cargaPrestamo = document.getElementById("cargarPrestamo");

function calcularTotal(monto,tasa,plazo) {
    let total = (monto + ((monto*tasa*plazo)/100));
    return total;
}

function calcularCuota (tot,pla) {
    let cuota = tot / pla;
    return cuota;
}

function mostrarResultado (nombre, apellido, monto, tasa, plazo, total, cuota) {
    let marco = document.getElementById("mostrar");
    let contenedor = document.createElement("datos"); 
    contenedor.innerHTML = `<H2>El prestamo a nombre de ${nombre} ${apellido} </H2>
                            <h3>Es por un monto de ${monto}, a devolver en un plazo de ${plazo}</h3>
                            <h3>El monto total es: ${total.toFixed(2)} el valor de cada cuota es: ${cuota.toFixed(2)}</h3>`;
    marco.appendChild(contenedor);
}

cargaPrestamo.addEventListener("click",()=>{
    let doc = document.getElementById("documento").value;
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellido").value;
    let mon = parseInt(document.getElementById("monto").value);
    let tas = parseFloat(document.getElementById("tasa").value);
    let pla = parseInt(document.getElementById("plazo").value);
    let tot = parseFloat(calcularTotal(mon,tas,pla));
    let cuo = parseFloat(calcularCuota(tot,pla));
    mostrarResultado (nom,ape,mon,tas,pla,tot,cuo);
})
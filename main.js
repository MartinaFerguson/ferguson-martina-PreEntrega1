//Array de zonas disponibles:
const zonasDisponibles = ["Caballito", "Villa Crespo", "Almagro", "Palermo", "Villa Urquiza"];

//Función de inicio:

function bienvenidaInicio() {
    const quiereJugar = confirm("¿Tenés ganas de jugar al futbol y no tenés con quién?");

    if (!quiereJugar) { //Si responde "false"
        alert("Ok, cuando quieras, aquí estaremos. Gracias por pasar:)");
        return;
    }
    const eleccionDeActividad = Number(prompt("¿Qué te gustaría hacer?\n1 - Sumarte a un entrenamiento\n2 - Sumarte a un partido\n3 - Ambas"));

    switch (eleccionDeActividad) {
        case 1:
            registrarContacto("entrenamiento"); //En este momento invoco la función de registro de contactos.
            break;

        case 2:
            registrarContacto("partido");
            break;

        case 3:
            registrarContacto("ambas");
            break;
        default:
            alert("Opción no disponible");

    }
}


//Declaración de función de registro de contacto (la invoqué antes en el switch)

function registrarContacto(opcion) {

    const telefono = prompt("Ingresá tu número de whatsapp:");

    if (!telefono) {
        alert("Por favor ingresá un número válido");
        return; //retorna si es que no ingresa ninngun número. 
    }

    //Zonas disponibles:

    let zonaElegidaNumero = Number(prompt("¿En qué zona querés jugar? Ingresá el número de la zona: \n1 - Caballito\n2 - Villa Crespo\n3 - Almagro\n4 - Palermo\n5 - Villa Urquiza"));
    const zonaElegida = zonasDisponibles[zonaElegidaNumero - 1]; // -1 porque de otra manera llamaría al elemento en del indice 1 en el array

    if (zonaElegidaNumero) {
        alert(`¡Perfecto! Tenemos partidos en zona ${zonaElegida}`);
    } else {
        alert("Esa zona aún no está disponible.");
    }
    let mensaje = "";
    switch (opcion) {
        case "entrenamiento":
            mensaje = "¡Te vamos a escribir con los entrenamientos por la zona!";
            break;

        case "partido":
            mensaje = "¡Te vamos a sumar a la red de partidos semanales!";
            break;

        case "ambas":
            mensaje = "¡Te sumamos a todo! Entrenamiento y red de partidos.";
            break;
    }
    alert(`¡Gracias! ${mensaje} Nos contactaremos al: ${telefono}`); //Let mensaje tomará la info del caso que corresponda// Const telefono  tomará el telefono ingresado.

}

//Invocación de la función de inicio:
bienvenidaInicio();

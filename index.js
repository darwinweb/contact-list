// se crea la array de contactos
let listaContactos = [];
// se crea la funcion para añadir nuevo contacto con cada propiedad al array
function añadirContacto(id, nombre, apellido, telefono, ciudad, direccion){
    let nuevoContacto = {
        id: id,
        nombre: nombre,
        apellidos: apellido,
        telefono: telefono,
        ciudad: ciudad,
        direccion: direccion
            
    };
    listaContactos.push(nuevoContacto);
}
añadirContacto(1,"Darwin","Gutierrez", 3012753041, "Cartagena","Conjunto Ipanema");
añadirContacto(2, "valentina", "gomez", 3024353625, "medellin","El poblado");
añadirContacto(3, "tina", "comez", 3024353625, "medellin","El poblado");
añadirContacto(4,"win","Guti", 3012365040, "huila","el lago");
console.log(listaContactos);

//funcion eliminar contacto del array

function eliminar(id){
    let nuevaLista = []
    for(let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].id !== id){
            nuevaLista.push(listaContactos[i]);
        }
    }
    listaContactos = nuevaLista;
}

eliminar();


function actualizarContacto(id, nuevoTelefono, nuevaCiudad, nuevaDireccion){
    for(let i = 0; i < listaContactos.length; i++){
        if(listaContactos[i].id === id){
            
            listaContactos[i].telefono = nuevoTelefono;
            listaContactos[i].ciudad = nuevaCiudad;
            listaContactos[i].direccion = nuevaDireccion;
            break;
        }
    }
}
actualizarContacto(4, "543625243", "Bogota", "usaquen");
console.log(listaContactos);




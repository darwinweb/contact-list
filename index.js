let listaContactos = [];

function añadirContacto(id, nombre, apellido, telefono, ciudad, direccion){
    let nuevoContacto = {
        id: id,
        nombre: nombre,
        apellidos: apellido,
        telefono: telefono,
        ubicaciones:[
            {
                ciudad: ciudad,
                direccion: direccion
            }
        ]

    };
    listaContactos.push(nuevoContacto);
}
añadirContacto(1,"Darwin","Gutierrez", 3012753041, "Cartagena","Conjunto Ipanema");
añadirContacto(2, "valentina", "gomez", 3024353625, "medellin","El poblado");


for (let i = 0; i < listaContactos.length; i++){
    console.log(listaContactos[i]);
}



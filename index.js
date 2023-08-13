let listaContactos = [
    "Darwin Gutierrez",
    "Yamile Tovar",
    "Emmanuel Gutierrez",
    "Abigail Gutierrez",
    

];


function añadirContacto(nombreCompleto){
    listaContactos.push(nombreCompleto)
}

añadirContacto("Alejandro Castro");

for (let i = 0; i < listaContactos.length; i++){
    console.log(listaContactos[i]);
}
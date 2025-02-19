// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); //elimina los espacios en blanco al principio y al final de la cadena, y lo asigna a la variable "nombre".

    // Validación: no permitir campos vacíos
    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    // Validación: no permitir que se ingrese únicamente números
    if (!isNaN(nombre)) {
        alert('Por favor, ingresa un nombre válido, no solo números.');
        input.value = '';
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista de amigos en la página
    mostrarAmigos();

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para recorrer el array 'amigos' y actualizar la lista HTML
function mostrarAmigos() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo 'amigos' y crear un elemento <li> por cada nombre
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Verificar que haya al menos un nombre registrado
    if (amigos.length === 0) {
        alert('No hay amigos registrados para sortear.');
        return;
    }

    // Generar un índice aleatorio y seleccionar el nombre correspondiente
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

///////////////////////////////////////////////


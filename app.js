// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Crear un array para almacenar los nombres
let Amigos = [];
//console.log(Amigos);
//console.log(Amigos.length);

// 2. Implementar una función para agregar amigos

function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let amigosIngresados = document.getElementById('amigo').value.trim();

    // Validamos la entrada con un If. Si el valor capturado en amigosIngresados esta vacio, arroja una alerta.
    if (amigosIngresados === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregamos el nombre al array si no está vacío
    Amigos.push(amigosIngresados);

    // Mostramos el array actualizado en la consola (para depurar)
    console.log(Amigos);
    console.log(Amigos.length);

    // Actualizamos la lista en el HTML
    actualizarListaAmigos();

    // Limpiamos el campo de entrada, reasignandole el valor vacio.
    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    // Limpia la lista antes de actualizarla

    Amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


// 3. Implementa una función para actualizar la lista de amigos

// 4. Implementa una función para sortear los amigos
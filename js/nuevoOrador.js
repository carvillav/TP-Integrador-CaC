
// Nuevo
crearOperador = () => {

    const form = document.getElementById('myForm');

    if (!form.checkValidity()) {
        // Si el formulario no es válido, mostrar mensajes de error y salir de la función
        form.classList.add('was-validated');
        return;
    }

    const orador = {
         nombre:  document.getElementById("nombre").value,
         apellido: document.getElementById("apellido").value,
         email: document.getElementById("email").value,
         tema: document.getElementById("tema").value
    };

    //debo enviar estos datos al sevidor: https://www.freecodecamp.org/espanol/news/tutorial-de-fetch-api-en-javascript-con-ejemplos-de-js-fetch-post-y-header/
    fetch(`http://localhost:8080/web-app-23544/api/orador`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orador),
    })
    .then(response => response.json()) 
    .then(json => {
        const mensaje = `Se dio de alta al orador ${json.nombre}`;
        Swal.fire({
            title: "¡Muy bien!",
            text: mensaje,
            icon: "success",
            didClose: () => {
                // Recargar la página después de que el usuario cierra el modal
                location.reload();
            }
        });
    })
    .catch(err => console.log(err));
}

document.getElementById("btnCrear").addEventListener('click', crearOperador);

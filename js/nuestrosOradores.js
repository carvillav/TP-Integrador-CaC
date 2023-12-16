// Listado
function listarOradores() {/*f2*/
            //1 preparar
            const respuesta = fetch(`http://localhost:8080/web-app-23544/api/orador`);

            //2 invocar
            respuesta
                .then(response => response.json())
                .then(data => procesarListado(data))//fulfilled
                .catch(error => dibujarError(error))//rejected
}       

function procesarListado(data) {
    //guardo en localStorage
    saveOradoresInFromLocal('oradores', data);
    const listarOradores = data;
    let rows = '';
    for(let orador of listarOradores) {
        console.log(orador);
        rows += `
        <tr>
            <th scope="row">${orador.id}</th>
            <td>${orador.nombre}</td>
            <td>${orador.apellido}</td>
            <td>${orador.mail}</td>
            <td>${orador.tema}</td>
            <td>
                <button type="button" class="btn btn-info btnE" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editar(${orador.id})">
                    Editar
                </button>
                <button type="button" class="btn btn-danger btnD" onclick="eliminarOrador(${orador.id})" >
                    Eliminar
                </button>
            </td>
        </tr>
        `
    }
    document.getElementById('usersRows').innerHTML = rows;
}

function dibujarError(error) {
    console.log(error);
    const alerta = `<div class="alert alert-danger" role="alert">
        ${error.toString()}
    </div>`;
    document.getElementById('msj').innerHTML = alerta;
}

document.getElementById('btnGetUsers').addEventListener('click', listarOradores);

// Eliminar
eliminarOrador = (id) => {
    
    Swal.fire({
        title: '¿Seguro?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:8080/web-app-23544/api/orador?id=${id}`, {
                method: "DELETE",
            })
            .then(response => response) 
            .then(json => {
                    const mensaje = `Se ha eliminado al orador id ${id}`;
                    Swal.fire({
                        icon: "success!",
                        title: "Muy bien",
                        text: mensaje
                    });
                    listarOradores();
            })
            .catch(err => console.log(err));
        }
    });

    
}

// Actualizar
const getOradoresFromLocal = () => {
    const oradores = localStorage.getItem('oradores')
    if(oradores) {
        return JSON.parse(oradores);
    }
    return [];
}
const getOradorSeleccionado = () => {
    const obj = localStorage.getItem('oradorBuscado')
    if(obj) {
        return JSON.parse(obj);
    }
    return null;
}
const removeOradorSeleccionado = () => {
    localStorage.removeItem('oradorBuscado');
}

const saveOradoresInFromLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));//como texto
}

const editar = (id) => {
    const oradores = getOradoresFromLocal();//[]
    const oradorBuscado = oradores.find(o => o.id === id);
    
    //si quiero actualizar algo en un html (.innerHTML o .value)
    document.getElementById('nombreActualizar').value = oradorBuscado.nombre;
    document.getElementById('apellidoActualizar').value = oradorBuscado.apellido;
    document.getElementById('mailActualizar').value = oradorBuscado.mail;
    document.getElementById('temaActualizar').value = oradorBuscado.tema;

    //guardo el id/orador del orador que se quiere actualizar
    saveOradoresInFromLocal('oradorBuscado', oradorBuscado);
}

const actualizarOrador = () => {
    const oradorSeleccionado = getOradorSeleccionado();
    if(!oradorSeleccionado) {
        return
    }

    //obtengo los datos del formulario que esta en el modal
    const nombre = document.getElementById('nombreActualizar').value;
    const apellido = document.getElementById('apellidoActualizar').value;
    const email = document.getElementById('mailActualizar').value;
    const tema = document.getElementById('temaActualizar').value;

    const orador = {
         nombre,
         apellido,
         email,
         tema
    };

    //ahora puedo enviar al backend para actualizar
    //debo enviar estos datos al sevidor: https://www.freecodecamp.org/espanol/news/tutorial-de-fetch-api-en-javascript-con-ejemplos-de-js-fetch-post-y-header/
    fetch(`http://localhost:8080/web-app-23544/api/orador?id=${oradorSeleccionado.id}`, {
        method: "PUT",
        body: JSON.stringify(orador),
    })
    .then(response => response) //status code 200
    .then(json => {
        const mensaje = `Se ha modificado el orador id: ${oradorSeleccionado.id}`;
        Swal.fire({
            icon: "success",
            title: "¡Muy bien!",
            text: mensaje
        });
        //alert(`Se ha modificado el orador id:${oradorSeleccionado.id}`);
        //cargar la lista 
        listarOradores();
        removeOradorSeleccionado();
        cerrarModal();
    })
    .catch(err => console.log(err));
}

const cerrarModal = () => {
    document.getElementById('btnCerrarModal').click();
}
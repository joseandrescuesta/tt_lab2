const boton = document.querySelector("#boton");
const endpoint = "https://jsonplaceholder.typicode.com/posts";

// se captura el boton y se le asigna la funcion para hacer la consulta
boton.addEventListener("click", function () {
    console.log("Click para ver comentarios")
    consultarApi(endpoint);
})

// funcion de consulta de la api
async function consultarApi(endpoint) {
    try {
        const objetoRespuesta = await fetch(endpoint)
        if (objetoRespuesta.ok) {
            console.log(objetoRespuesta);
        }
        else {
            throw new Error('Red error: ' + objetoRespuesta.status);
        }
        const promesaJSON = await objetoRespuesta.json();
        dibujarEnPantalla(promesaJSON.slice(0, 10));
    } catch (error) {
        console.log("Error: ", error);
    }
}

/*
function consultarApi(endpoint) {
    fetch(endpoint)
        .then(objetoRespuesta => {
            console.log(objetoRespuesta);
            const promesaJSON = objetoRespuesta.json();
            return promesaJSON;
        })
        .then(datos => {
            console.log(datos);
            dibujarEnPantalla(datos.slice(0, 10));
        })
        .catch(error => {
            console.log(error);
        })
}
*/

// renderizar la informacion

function dibujarEnPantalla(listadoDeDatos) {
    const posts = document.querySelector('.post');

    posts.innerHTML = listadoDeDatos.map(function (item) {
        return `<div class="post">
                    <p>Usuario: ${item.userId}</p>
                    <p>Id: ${item.id}</p>
                    <h4>${item.title}</h4>
                    <p>${item.body}</p>
                    <hr>
                </div>`
    }).join('');

}
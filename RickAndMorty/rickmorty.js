let url = "https://rickandmortyapi.com/api"
let urlPersonajes = "https://rickandmortyapi.com/api/character/"
let personajes = document.querySelector(".contenedor-personajes")

fetch(urlPersonajes)
.then((response) => response.json())
.then((data) => {

    data.results.forEach((element) => {
        
        const contenedorCreado = document.createElement('div')
        
        contenedorCreado.innerHTML = `
            <div class="tarjeta-personaje">
                <img src="${element.image}" alt="Imagen personaje" class="imagen-personaje">
                <div class="informacion-personaje">
                    <h1 class="nombre">${element.name}</h1>
                    <p class="estado">${element.status} - ${element.species}</p>
                    <section class="localizacion">
                        <p class="titulo">Last known location:</p>
                        <p class="location">${element.location.name}</p>
                    </section>
                    <section class="capitulos">
                        <p class="titulo">First seen in:</p>
                        <p class="capitulo">${element.origin.name}</p>
                    </section>
                </div>
            </div>
        `

        personajes.append(contenedorCreado)

    })


})


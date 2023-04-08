# RickandMortyAPI_NodeJS
Rick and Morty Character Search API
Esta es una API web construida con Node.js y Express que utiliza la API pública de Rick and Morty para buscar personajes en base al nombre proporcionado por el usuario. La búsqueda se realiza en tiempo real, lo que significa que los resultados se actualizan en el momento en que se ingresa un nuevo término de búsqueda.

Instalación
Clona el repositorio en tu computadora.

Instala las dependencias utilizando el siguiente comando:
- npm install

Inicia la aplicación con el siguiente comando:
- npm start

Uso
La API es accesible a través del siguiente endpoint:
- GET /characters?name={nombre}


donde {nombre} es el nombre del personaje que deseas buscar.

La respuesta de la API es una lista de objetos JSON que contiene información sobre los personajes que coinciden con el nombre proporcionado. Los campos incluidos son:

id: El ID único del personaje.
name: El nombre del personaje.
image: La URL de la imagen del personaje.
Tecnologías utilizadas
Node.js
Express
Axios
Redux
CSS

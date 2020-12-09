# Test Practico - Frontend - MercadoLibre

## INDEX
1. [SCRIPTS](#1.-SCRIPTS)
2. [COMO USAR](#2.-COMO-USAR)
3. [SUPUESTOS](#3.-SUPUESTOS)
4. [EXTRAS](#4.-EXTRAS)
5. [DEMOS ONLINE](#5.-DEMOS-ONLINE)
   
## 1. SCRIPTS
- "dev": starts the server with hot reloading. Development.
- "build": generates the distribution files for production. 
- "start": starts the server with the compiled version. Production.

[^ *regresar al índice*](#INDEX)

---

## 2. COMO USAR

Para utilizar el proyecto de backend (este mismo) deberías:
- Copiar y renombrar el archivo ".env.example" como ".env", a continuación se explican las variables de entorno.
- Luego para utilizar la app.
  - "npm dev" para modo de desarrollo.
  - "npm run build" y "npm start" para modo de producción.
- Observación: la versión hosteada en heroku va a tardar un poco mas de lo normal la primera vez que se consulta ya que va a estar dormida y hay que despertarla.

Para ejecutar el proyecto de frontend ([Repositorio GitHub React](https://github.com/Leandro-Suero/meli-test-front)) deberías seguir las instrucciones de su readme, pero son muy similares a éstas.

## Environment variables
- PORT, the default port is 4000.
- MELI_API_ENDPOINT, the domain url of the API to contact.
- MAX_PRODUCTS_TO_DISPLAY, configuration value to limit the amount of items displayed.

[^ *regresar al índice*](#INDEX)

---

## 3. SUPUESTOS
Supuestos que utilicé para avanzar rápidamente con el desarrollo, sin necesidad de feedback (fin de semana largo).
- No es necesario generar diferentes "branch".
- El resultado de la busqueda no puede ser limitado o paginado a voluntad ya que la documentacion de la API solicitada no posee parámetros a tal fin.
- El precio devuelto por la API de Meli debe ser dividido en dos partes, por un lado la parte entera y por otro la decimal, ambas como enteros. La parte decimal es 0 por defecto, en caso de un precio original sin decimales.
- El nombre y apellido del Author solicitado deben ser mi nombre y apellido.
- Una búsqueda con un argumento "q" vacío debe retornal sin error y con un items vacío para ser consistente con la API de Meli.

[^ *regresar al índice*](#INDEX)

---

## 4. EXTRAS
- En la carpeta /postman se encuentran para importar una serie de llamadas a la API, tanto en localhost como en su versión hosteada online.

[^ *regresar al índice*](#INDEX)

---

## 5. DEMOS ONLINE
- [Ver DEMO ONLINE del FRONTEND React](https://meli-test-front.netlify.app/)
- [Ver DEMO ONLINE del BACKEND NodeJS](https://meli-test-back.herokuapp.com/api)

[^ *regresar al índice*](#INDEX)
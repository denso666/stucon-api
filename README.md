# STUCON-API

-   [Información](#información)
-   [Requerimientos](#requerimientos)
-   [Instalación](#instalación)
-   [Ejecución](#ejecución)


### Información

*STUCON-API* es un servicio *BackEnd* bajo el esquema de una *REST-API* para el manejo de información en la aplicación _Student Connect_. Diseñado y desarrollado por _Jupiter's Team_.

### Requerimientos

-   [NodeJS](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com/) o [NPM](https://www.npmjs.com/)
-   [MariaDB](https://mariadb.org/)

### Instalación

1. Instala `mariadb` e inicia el servicio.

```bash
$ sudo apt install mariadb-client mariadb-server
```

2. Clona el repositorio y ejecuta el comando `install`, ya sea con `yarn` o `npm` para agregar los paquetes requeridos para el proyecto.

```bash
$ yarn install #npm install
```

3. Crear un archivo con el nombre `.env` en la raíz y en el coloca el contenido de el archivo `.env.example` para después módificar los datos por tus variables de entorno correspondiente.

        PORT=3000                   // puerto para servidor
        DB_HOST=localhost
        DB_PORT=3306                // puerto default de mariadb
        DB_NAME=studentConnect      // nombre de la base de datos
        DB_USER=your_user           // usuario
        DB_PASS=testpass            // contraseña

4. Crea la base de datos con el nombre sugerido previamente, *StudentConnect*, y ejecuta el script `/src/Database/script.sql`. Con ello ya deberías tener la estructura de la Base de Datos.

5. Ejecuta, dentro de tu base de datos, el script `/src/Database/test_query.sql` para agregar registros prueba a la Base de Datos.

### Ejecución

Con los paquetes instalados y la base de datos funcionando y estructurada puedes usar el servicio normal o el servicio de desarrollo.

```bash
$ yarn start    # servicio común - deshabilitado
$ yarn run dev  # servicio de desarrollo
```
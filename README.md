# Plantilla para crear un backend con Express.js y Sequelize con PostgreSQL

Simple plantilla para crear un nuevo proyecto.

## Pasos a seguir

### Instalar dependencias

Para instalar las dependencias en su computadora ejecute en la consola:

```sh
npm install
```

### Configurar base de datos

Edite [env.sample](/env.sample) y guardelo como [.env](/.env) (no olvide borrar el ejemplo) ([Documentación](https://github.com/motdotla/dotenv#readme)).

- `PORT`: Puerto de red que usará el backend
- `NODE_ENV`: Tipo de entorno de trabajo, puede ser:
  - development
  - testing
  - production
- `DATABASE_URL`: URL de la instancia de PostgreSQL a usar ([Documentación](https://www.postgresql.org/docs/current/libpq-connect.html#id-1.7.3.8.3.6))
- `DEBUG`: Activa/desactiva depuración ([Documentación](https://github.com/visionmedia/debug#readme))
- `DEBUG_COLORS`: Mostrar colores en texto de depuración

**RECUERDE NUNCA COMPARTIR .env**

### Crear base de datos

- Crear base de datos (CREATE DATABASE), recuerde que el usuario que debe hacer esto debe tener el [privilegio CREATEDB](https://www.postgresql.org/docs/9.0/sql-createdatabase.html#:~:text=To%20create%20a%20database%2C%20you%20must%20be%20a%20superuser%20or%20have%20the%20special%20CREATEDB%20privilege.%20See%20CREATE%20USER.).
  ```sh
  npx sequelize-cli db:create
  ```

### Crear modelos

- Crear cada modelos en proyecto, para crear un modelo ([Lista de tipos de dato](https://sequelize.org/master/variable/index.html#:~:text=UniqueConstraintError-,datatypes,-C), [Documentación](https://sequelize.org/master/manual/migrations.html)):
  ```sh
  npx sequelize-cli model:generate --name <NOMBRE_MODELO> --attributes <NOMBRE_ATRIBUTO1>:<TIPO_ATRIBUTO1>,<NOMBRE_ATRIBUTO2>:<TIPO_ATRIBUTO2>
  ```
- Crear modelos en base de datos (CREATE TABLE)
  ```
  npx sequelize-cli db:migrate
  ```

### Crear semillas

- Crear semillas para cada modelo, para instalar la semilla de un modelo:
  ```sh
  npx sequelize-cli seed:generate --name <NOMBRE_MODELO>
  ```
- Edite las semillas para cada modelo presente en [seeders/](/seeders/) ([Documentación](https://github.com/sequelize/umzug#documentation))
- Inserte el contenido de las semillas (INSERT TABLE)
  ```sh
  npx sequelize-cli db:seed:all
  ```

### Programar controladores y rutas

Programe los controladores en [controllers/](/controllers/) y las rutas correspondientes en [routes/](/routes/) ([Documentación](https://expressjs.com/en/guide/routing.html#express-router)). Se recomienda en lo posible utilizar mecanismos de autenticación, se recomienda [Passport](http://www.passportjs.org/) para ello.

### Como ejecutar proyecto

Para ejecutar el proyecto escriba en la consola:

```sh
npm start
```

**NOTA:** [nodemon](https://www.npmjs.com/package/nodemon) debería encargarse de reiniciar el servidor si edita algún archivo con extensión `js`, `mjs` o `json`. Esto facilita el desarrollo incremental de su proyecto. Si por alguna razón necesita reiniciar el servidor manualmente puede escribir el comando `rs` en la terminal donde nodemon se ejecuta.

# DEPENDENCIES INFO

## Nodejs Commands

node -v (comprobar instalación)

## npm Commands

npm -v (comprobar instalación)
<!-- IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE-->
npm -i (DESCARGAR DEPENDENCIAS DEL PROYECTO) <!-- IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE-->
<!-- IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE> IMPORTANTE-->

## Typescript Commands

npm install -g typescript (instalar de forma global)
npm install typescript (instalar en el proyecto)
npm root (para comprobar instalación normal)
npm root -g (para comprobar instalación en el directorio global)
tsc -v (comprobar si tenemos tsc instalado)
tsc --init (generar fichero de configuración)
tsc -w (actualizar el js mediante el ts)

## React Commands

npm install -g create-react-app (instalar de forma global)
npx create-react-app react-app (instalar en el proyecto)

## Tailwind Commands

EXTENSION: Tailwind CSS IntelliSense
npm install -g tailwindcss (instalar de forma global)
npm install -D tailwindcss (instalar en el proyecto)
npx tailwindcss init (crear fichero de configuración)
npm run dev (ACTUALIZAR TAILWIND INPUT CSS INTO OUPUT CSS)

# CHATGPT

¡Excelente elección! React y Tailwind CSS son una combinación poderosa para desarrollar aplicaciones web modernas y con una experiencia de usuario agradable. A continuación, te mostraré los pasos que debes seguir para iniciar tu proyecto con React y Tailwind CSS:

Paso 1: Configurar el entorno
Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu máquina. Puedes verificarlo ejecutando los siguientes comandos en la terminal o línea de comandos:

css
Copy code
node --version
npm --version
Si no los tienes instalados, visita el sitio web oficial de Node.js (https://nodejs.org) y sigue las instrucciones para la instalación.

Paso 2: Crear una nueva aplicación de React
Abre la terminal o línea de comandos y navega hasta el directorio donde deseas crear tu proyecto. Luego, utiliza el siguiente comando para generar una nueva aplicación de React:

bash
Copy code
npx create-react-app mi-proyecto
Sustituye "mi-proyecto" por el nombre que desees para tu proyecto. Este comando creará una nueva carpeta con el nombre de tu proyecto y generará la estructura básica de una aplicación de React dentro de ella.

Paso 3: Navegar al directorio del proyecto
En la terminal, navega al directorio de tu proyecto:

bash
Copy code
cd mi-proyecto
Paso 4: Instalar Tailwind CSS
Para instalar Tailwind CSS en tu proyecto, utiliza npm para agregarlo como una dependencia:

bash
Copy code
npm install tailwindcss
Paso 5: Configurar Tailwind CSS
Crea un archivo de configuración de Tailwind CSS en la raíz de tu proyecto. Puedes hacerlo con el siguiente comando:

bash
Copy code
npx tailwindcss init
Esto generará un archivo llamado tailwind.config.js con la configuración por defecto.

Paso 6: Importar estilos de Tailwind CSS
Abre el archivo src/index.css y asegúrate de importar los estilos de Tailwind CSS:

css
Copy code
/* src/index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
Paso 7: Iniciar el servidor de desarrollo
Ahora, puedes iniciar el servidor de desarrollo para tu aplicación de React:

bash
Copy code
npm start
Esto iniciará la aplicación en modo de desarrollo y abrirá una nueva pestaña en tu navegador con la dirección http://localhost:3000/. Aquí podrás ver tu aplicación en tiempo real mientras trabajas en ella.

Paso 8: ¡Comenzar a codificar!
¡Ya estás listo para comenzar a desarrollar tu proyecto! Puedes comenzar a editar los archivos dentro de la carpeta src para crear tus componentes, páginas y estilos utilizando React y Tailwind CSS.

Recuerda que Tailwind CSS se basa en clases utilitarias, por lo que puedes utilizar clases directamente en tus elementos HTML o en tus componentes de React para aplicar estilos rápidamente.

Espero que estos pasos te ayuden a iniciar tu proyecto con React y Tailwind CSS. ¡Mucho éxito en tu desarrollo! Si tienes más preguntas o necesitas ayuda adicional, no dudes en preguntar.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

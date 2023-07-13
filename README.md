# EXPLORE

![](https://res.cloudinary.com/db8btnoov/image/upload/v1689263288/exploreHome_eoqebt.jpg)

Desarrollado por [Pamela Luque](https://www.linkedin.com/in/pamela-luque/).

[VER DEMO](https://explore-two-kappa.vercel.app/) 

### Descripción del proyecto

Este proyecto es un e-commerce desarrollado en React JS, diseñado para la venta de viajes y experiencias. El objetivo principal es proporcionar a los usuarios una plataforma intuitiva y atractiva para explorar y reservar una amplia gama de viajes.

[VER DEMO](https://explore-two-kappa.vercel.app/) 

### Estado actual del proyecto
Al momento de publicarlo, el proyecto cuenta con las siguientes funcionalidades implementadas:

* Menú de navegación que permite filtrar los destinos por continentes.

* Catálogo de destinos en una vista principal, ofreciendo a los usuarios la posibilidad de explorar y seleccionar su experiencia ideal.

* Detalles de cada destino en una vista separada, que muestra información como el precio, la duración y una sección interactiva que permite agregar el destino al carrito de compras. Todo generado de manera dinámica.

* Carrito de compras funcional, donde los usuarios pueden agregar los viajes deseados. El carrito es persistente, lo que significa que los datos se mantienen incluso si la página se actualiza parcialmente durante el proceso de compra.

* Vista de pago (checkout), que se muestra una vez que los usuarios finalizan su compra en el carrito. En esta vista, se les solicita completar un formulario con los datos mínimos de contacto. Estos datos, junto con la información de los destinos elegidos, se almacenan en una base de datos Firestore.


#### Hoja de ruta
A continuación se detallan las funcionalidades pendientes que se planean desarrollar para completar la idea del sitio web de E-commerce de destinos:

* Barra de búsqueda:  Implementar una barra de búsqueda que permita a los usuarios buscar viajes específicos utilizando diferentes filtros, como destino, precio, etc. Esto mejorará la experiencia del usuario al permitirles encontrar rápidamente los viajes que se ajusten a sus preferencias y necesidades.

* Detalles del viaje: Agregar información adicional a los detalles de cada destino, como principales atractivos, actividades disponibles, reseñas de otros usuarios, galería de imágenes destacadas, comidas típicas, idiomas oficiales, clima, entre otros. Esto proporcionará a los usuarios una visión más completa de cada destino y los ayudará a tomar decisiones informadas.

* DatePicker:  Incorporar un calendario interactivo que permita a los usuarios seleccionar las fechas en las que desean realizar el viaje. Esto facilitará la programación y reserva de los viajes.

* Contador de viajeros: Agregar un contador que permita a los usuarios indicar la cantidad de personas que viajan y si hay menores de edad. Esto influirá en la lógica del precio final, ya que puede haber tarifas diferenciales para menores.

* Carrito de compras: Mejorar el carrito de compras para incluir opciones como descuentos, detalles de impuestos y otros cargos adicionales. Esto permitirá a los usuarios tener una vista clara del precio total y comprender mejor los costos asociados a su compra.

* Autenticación y perfiles de usuario: Implementar un sistema de autenticación que permita a los usuarios crear cuentas, iniciar sesión y acceder a su perfil personal. Además, se habilitará la visualización del historial de compras, la edición de datos personales y la capacidad de guardar viajes favoritos.

* Pasarela de pago: Integrar una pasarela de pago segura utilizando Firebase u otra solución confiable. Esto garantizará la protección de la información financiera de los usuarios durante el proceso de pago.

### Instalación
Para ejecutar el proyecto, sigue los pasos a continuación:

1. Primero, asegúrate de tener npm instalado en tu máquina.

2. Abre una terminal o línea de comandos y navega hasta la carpeta del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```

4. Una vez que se hayan instalado las dependencias, ejecuta el siguiente comando para iniciar el servidor local:

```
npm run dev
```

5. En la consola, se mostrará un enlace local, generalmente http://localhost:3000. Haz clic en el enlace mientras mantienes presionada la tecla "CTRL" para abrirlo en tu navegador predeterminado.


### Tecnologías utilizadas
El proyecto se ha desarrollado utilizando las siguientes tecnologías y herramientas:

* React JS: Un framework de JavaScript utilizado para construir la interfaz de usuario del proyecto.
* VITE: Un entorno de desarrollo para aplicaciones web en JavaScript, que se caracteriza por su tiempo de arranque instantáneo y su eficiente manejo de módulos.
* Material UI: Una biblioteca de componentes de interfaz de usuario (UI) para React, que ofrece una amplia variedad de componentes predefinidos y estilizados, así como herramientas para personalizar y adaptar la apariencia de la interfaz.
* FORMIK + YUP: FORMIK es una biblioteca de manejo de formularios en React que facilita la creación y validación de formularios complejos. Junto a YUP, proporcionan un conjunto de utilidades que simplifican la gestión del estado del formulario y la validación de datos.
* React-Spinners: Una biblioteca que proporciona una forma sencilla de agregar efectos de carga visualmente atractivos a una aplicación de React.
* SweetAlert2: Una biblioteca de JavaScript, compatible con React, que permite crear fácilmente ventanas emergentes de diálogo personalizadas y atractivas en aplicaciones web.
* Firebase: Una plataforma de desarrollo de aplicaciones en la nube utilizada para el almacenamiento de datos.
* Cloudinary: Una plataforma en la nube que proporciona servicios de gestión de imágenes y videos.


### Menciones especiales

Quiero destacar y agradecer al profesor [Jorge Duje](https://www.linkedin.com/in/jorge-duje-2212b4219/), quien impartió el curso de REACT JS en CoderHouse. Su profesionalidad y dedicación fueron fundamentales para brindarnos las herramientas actualizadas que existen en el mercado, y para explicar de manera clara y concisa los conceptos fundamentales de React Js y JavaScript cuando fue necesario. Agradezco sinceramente a Jorge por su entrega y compromiso en enseñarnos y guiarnos a lo largo del proyecto.

Al tutor [Felipe Juaneda](https://www.linkedin.com/in/felipe-juaneda-8b7103190/), gracias por las dudas resueltas siempre a tiempo!

### Conclusiones

El desarrollo de este proyecto de e-commerce de venta de viajes en React JS ha sido una experiencia gratificante. React JS ha demostrado ser una herramienta poderosa y eficiente para la construcción de interfaces de usuario interactivas y dinámicas. Del lado del desarrollador, es notable la simplificación y la potencia que genera su uso.

La utilización de tecnologías complementarias como VITE, Material UI, Formik y Yup ha permitido agilizar el desarrollo y mejorar la experiencia del usuario al proporcionar componentes predefinidos, validación de formularios y animaciones visuales.

La integración de Firebase ha sido fundamental para la implementación de una base de datos sólida pudiendo en un futuro integrar una vista para el administrador que genere nuevos productos o ingrese cambios a los ya existentes y  para el manejo de stock existente. Esta herramienta tiene gran potencial que seguiré desarrollando.

Agradezco el acompañamiento y soporte brindados por [CoderHouse](https://www.linkedin.com/school/coderhouse/) durante el desarrollo de este proyecto.

Se logró el inicio de un proyecto sólido y totalmente escalable! 🚀

Desarrollado por [Pamela Luque](https://www.linkedin.com/in/pamela-luque/).







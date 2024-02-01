# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Enunciado:
Crear un componente llamado "TarjetaProducto" en React que represente visualmente la información de un producto y luego utilizarlo en una aplicación para mostrar una lista de productos en tarjetas.


1. Creación del Componente:
Crea un nuevo archivo: src/components/TarjetaProducto/TarjetaProducto.jsx en tu proyecto React.
Dentro de TarjetaProducto.jsx, define una función de componente llamada TarjetaProducto que acepte propiedades como nombre, imagen, precio, y stock del producto.
El componente además deberá de aceptar la descripción del mismo como Children en vez de como atributo (<TarjetaProducto ...atributos>descripcion</TarjetaProducto>).
En el cuerpo de la función, utiliza JSX para representar una tarjeta de producto que incluya todos los datos del mismo y un botón de compra. 
Utilizando una operación ternaria o de &&, para analizar el stock del producto. Si el stock es 0, en vez de imprimir el botón de compra, muestra un label que diga "Sin stock"
Aplica estilos CSS en el archivo src/components/TarjetaProducto/TarjetaProducto.css para darle un aspecto visual atractivo.
2. Uso del Componente:
En el archivo llamado App.jsx en la raíz de tu proyecto o en la carpeta principal de la aplicación importa el componente TarjetaProducto.
Define un objeto JavaScript que contenga una lista de al menos 5 productos. Cada producto debe tener propiedades como nombre, imagen, precio, stock y descripción. 
En el componente App, mapea la lista de productos y utiliza el componente TarjetaProducto para mostrar una tarjeta por cada uno de ellos.
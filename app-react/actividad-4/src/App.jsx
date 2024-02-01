import TarjetaProducto from './components/TarjetaProducto/TarjetaProducto';
import './App.css'

function App() {
  
  const listaProductos = [
    {
      nombre: 'Jersey de cuello alto',
      imagen: 'src/img/jersey.jpg',
      precio: '29.99 €',
      stock: 0,
      descripcion: 'Jersey para protegerse del frío. Es suave, cómodo y calentito.',
    },
    {
      nombre: 'Camiseta de algodón',
      imagen: 'src/img/camiseta.jpg',
      precio: '19.99 €',
      stock: 10,
      descripcion: 'Camiseta de algodón suave y cómoda, perfecta para el uso diario.',
    },
    {
      nombre: 'Pantalón vaquero',
      imagen: 'src/img/vaquero.jpg',
      precio: '39.99 €',
      stock: 5,
      descripcion: 'Pantalón vaquero de estilo moderno y ajuste perfecto.',
    },
    {
      nombre: 'Bolso de cuero',
      imagen: 'src/img/bolso.jpg',
      precio: '59.99 €',
      stock: 2,
      descripcion: 'Bolso de cuero con múltiples compartimentos y correa ajustable.',
    },
    {
      nombre: 'Chaqueta de invierno',
      imagen: 'src/img/chaqueta.jpg',
      precio: '79.99 €',
      stock: 3,
      descripcion: 'Chaqueta de invierno resistente al agua y con forro térmico para mantener el calor en los días fríos.',
    },
  ];

  return (
    <div>
      {listaProductos.map((producto, index) => (
        <TarjetaProducto
          key={index}
          nombre={producto.nombre}
          imagen={producto.imagen}
          precio={producto.precio}
          stock={producto.stock}
        >
          {producto.descripcion}
        </TarjetaProducto>
      ))}
    </div>
  );
}

export default App

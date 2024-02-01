import './TarjetaProducto.css'

const TarjetaProducto = ({ nombre, imagen, precio, stock, children }) =>{
  return (
    <div className="tarjeta-producto">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <div className='descripcion'>{children}</div>
      <p className='precio'>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      {stock === 0 ? (<p>Sin stock</p>) : (<button>Comprar</button>)} {/**operacion ternaria */}
    </div>
  );
};

export default TarjetaProducto;
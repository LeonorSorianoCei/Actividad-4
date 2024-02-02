import './TarjetaProducto.css'
<link href="https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap" rel="stylesheet"></link>

const TarjetaProducto = ({ nombre, imagen, precio, stock, children }) =>{
  return (
    <div className="tarjeta-producto">
      <h2>{nombre}</h2>
      <div className="imagen-container">
        <img src={imagen} alt={nombre} className="imagen" />
      </div>
      <div className='descripcion'>{children}</div>
      <p className='precio'>Precio: {precio}</p>

      {stock < 5 ? (<p className='ultimo-stock'>Stock: {stock}</p>) : (<p className='stock'>Stock: {stock}</p>)}
      {stock < 5 ? (<p>¡Últimas unidades, corre que vuelan!</p>) : (<p></p>)}
      
      {stock === 0 ? (<p>Sin stock</p>) : (<button className='boton'>Comprar</button>)}

      
    </div>
  );
};

export default TarjetaProducto;
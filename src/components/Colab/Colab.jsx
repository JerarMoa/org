import "./Colab.css";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colab = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColab, like } = props;
  return (
    <div className="colab">
      <IoIosCloseCircle
        className="eliminar"
        onClick={() => eliminarColab(id)}
      />
      <div className="header" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? <AiFillHeart color="#f00" onClick={() => like(id) }/> : <AiOutlineHeart onClick={() => like(id)}/>}
      </div>
    </div>
  );
};

export default Colab;

import "./Equipo.css";
import Colab from "../Colab/Colab";
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;

  const { colaboradores, eliminarColab, setColor, like } = props;

  const estiloTitulo = { borderColor: colorPrimario };

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  }

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={obj}
        >

          <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => {
              setColor(e.target.value, id)
            }}
          />

          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colabs">
            {colaboradores.map((colaborador, index) => (
              <Colab
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColab={eliminarColab}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;

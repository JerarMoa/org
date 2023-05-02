import "./List.css";

const List = (props) => {
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="list">
      <label>Equipo</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {props.equipos.map((equipos, index) => {
          return (
            <option key={index} value={equipos}>
              {equipos}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default List;

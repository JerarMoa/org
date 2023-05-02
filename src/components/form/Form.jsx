import { useState } from "react";
import "./Form.css";
import Input from "../Inputs/input";
import List from "../OptionList/List";
import Boton from "../Boton/Boton";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState('')
  const [color, setColor] = useState('')

  const { registrar, crearEquipo } = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
    };

    registrar(datosEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color});
  }

  return <section className="form">

      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Input
          title="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Input
          title="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <Input
          title="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <List 
          valor={equipo}
          actualizarValor={setEquipo}
          equipos={props.equipos}
        />
          <Boton title="Crear"/>
      </form>

      <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para crear el equipo</h2>
      <Input
          title="Titulo"
          placeholder="Ingresar Titulo"
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <Input
          title="Color"
          placeholder="Ingresar el color en Hex"
          required
          valor={color}
          actualizarValor={setColor}
          type='color'
        />

        <Boton title='Registrar Equipo'/>
      </form>

    </section>
};

export default Form;

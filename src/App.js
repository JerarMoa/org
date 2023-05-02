import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import { v4 } from 'uuid';

function App() {

  const [showForm, update] = useState(true)

  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png", nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true,
  },

  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondon",
    puesto: "Desarrolladora de software e instructora",
    fav: false,
  },

  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false,
  },

  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false,
  },

  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false,
  }
  ])

  const [equipos, setEquipos] = useState([

    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57c278',
      colorSecundario: '#D9F7E9'
    },

    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },

    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },

    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },

    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },

    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },

    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    }

  ])


  const changeForm = () => {
    update(!showForm)
  }


  const registrar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }


  const eliminarColab = (id) => {
    const nuevosColabs = colaboradores.filter((colaborador) => colaborador.id != id)
    setColaboradores(nuevosColabs);
  }


  const setColor = (color, id) => {
    console.log('actualizar color', color, id);
    const equiposActualizados = equipos.map((equipo) => {

      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    setEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {
        showForm && <Form equipos={equipos.map((equipos) => equipos.titulo)}
          registrar={registrar}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg changeForm={changeForm} />

      {equipos.map((equipos) => <Equipo
        datos={equipos}
        key={equipos.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipos.titulo)}
        eliminarColab={eliminarColab}
        setColor={setColor}
        like={like}
      />
      )}

      <Footer />
    </div>
  );
}

export default App;

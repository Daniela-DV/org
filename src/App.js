
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/formulario';
import MiOrg from './Componentes/MiOrg/index'
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';
import Colaborador from './Componentes/Colaborador';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState (false)
  const [colaboradores, actualizarColaboradores] = useState ([ {
    id : uuid(),
    nombre:"Daniela Del Valle", 
    puesto: "Alumna Alura Latam - Oracle", 
    foto: "https://media.licdn.com/dms/image/D4D03AQE6Z3JjXwiPlg/profile-displayphoto-shrink_400_400/0/1688668159336?e=1698883200&v=beta&t=_LeZeUuDOpQzoexoEfK9zbqKW0IdBWy2ue4vNfslDWE", 
    equipo: "Front End",
    fav: false,
  },



  {
    id : uuid(),
    nombre:"Del Valle", 
    puesto: "Alumna Alura Latam - Oracle", 
    foto: "https://media.licdn.com/dms/image/D4D03AQE6Z3JjXwiPlg/profile-displayphoto-shrink_400_400/0/1688668159336?e=1698883200&v=beta&t=_LeZeUuDOpQzoexoEfK9zbqKW0IdBWy2ue4vNfslDWE", 
    equipo: "Programación",
    fav: false,


  }])
  const [equipos , actualizarEquipos ] = useState ([
   
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57c278",
        colorSecundario: "#d9f7e9",
      } ,
  
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82cffa",
        colorSecundario: "#e8f8ff",
      } ,
  
      {
        id: uuid(),
        titulo:"Data Science" ,
        colorPrimario: "#a6d157" ,
        colorSecundario: "#f0f8e2" ,
      } ,
  
      {
        id: uuid(),
        titulo:"Devops" ,
        colorPrimario: "#e06b69" ,
        colorSecundario: "#fde7e8" ,
      } ,
  
      {
        id: uuid(),
        titulo: "UX y Diseño" ,
        colorPrimario: "#db6ebf" ,
        colorSecundario: "#fae9f5",
      } ,
  
      {
        id: uuid(),
        titulo: "Móvil" ,
        colorPrimario: "#ffba05" ,
        colorSecundario: "#fff5d9",
      },
  
      {
        
        titulo: "Innovación y Gestión" ,
        colorPrimario: "#ff8a29" ,
        colorSecundario: "#ffeedf",
      },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  } 

  const registrarColaborador = (colaborador) =>{
    console.log ("Nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores,colaborador,])
  }

 const eliminarColaborador = (id) => {
    console.log ("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const crearEquipo = (nuevoEquipo) => {console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])}


  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if( colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      } return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  const actualizarColor = (color,id) => {
 
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      } 
      return equipo

    })
    actualizarEquipos(equiposActualizados)
  }

  

    return (
    <div >
      <Header/>
      {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo )} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />
      }
    
    <MiOrg cambiarMostrar={cambiarMostrar}/>

    {
      equipos.map ((equipo)=> <Equipo 
      datos={equipo} 
      key={equipo.titulo} 
      colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />
      )
    }

    <Footer/>
    
    </div>
  );
}

export default App;

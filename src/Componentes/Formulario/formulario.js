import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import {v4 as uuid} from "uuid"


const Formulario = (props) =>{

    const id = uuid ()
    const [nombre, nombreActualizado] = useState("")
    const [puesto, puestoActualizado] = useState ("")
    const [foto, fotoActualizada] = useState("")
    const [equipo,actualizarEquipo] = useState ("")
    const [titulo,tituloActualizado] = useState ("")
    const [color,colorActualizado] = useState ("")

    const {registrarColaborador, crearEquipo} = props


    const manejarEnvio = (e) =>{
        e.preventDefault()
        var datosAEnviar ={
            id,
            nombre,
            puesto,
            foto,
            equipo,
        } 
        registrarColaborador(datosAEnviar)
    }

    const manejarEquipos = (e) =>{
        e.preventDefault()
        var datosEquiposActualizados ={
            id,
            titulo,
            colorPrimario:color,
        } 
        crearEquipo(datosEquiposActualizados)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
            Rellena el formulario para crear el colaborador.
            </h2>
            <Campo titulo="Nombre" placeholder="Ingrese nombre" required valor={nombre} valorActualizado={nombreActualizado}/>
            <Campo titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} valorActualizado={puestoActualizado}/>
            <Campo titulo="Foto" placeholder="Ingrese enlace de foto" required valor={foto} valorActualizado={fotoActualizada}/>
            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo ={actualizarEquipo} 
            equipos={props.equipos}/>
            <Boton texto="Crear"></Boton>
        </form>

        <form onSubmit={manejarEquipos}>
            <h2>
            Rellena el formulario para crear el Equipo.
            </h2>
            <Campo titulo="Titulo" placeholder="Ingrese nombre del equipo" required valor={titulo} valorActualizado={tituloActualizado}/>
            <Campo titulo="Color" placeholder="Ingrese el color en Hex"  type="color" required valor={color} valorActualizado={colorActualizado}/>
            <Boton texto="Registrar equipo"></Boton>
        </form>
        
    </section>
}

export default Formulario 
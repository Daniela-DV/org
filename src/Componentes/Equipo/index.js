
import hexToRgba from 'hex-to-rgba';
import Colaborador from "../Colaborador"
import "./equipo.css"

const Equipo = (props) => {

    const {titulo, colorPrimario, colorSecundario, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const secundario = { backgroundColor: hexToRgba(colorPrimario, 0.5)  }
    const primario = { borderColor: colorPrimario}
    
    return <>{ colaboradores.length > 0 && 

    
        <section className="equipo" style={secundario}>
            <input 
            
            type= "color" 
            className="input-color" 
            value={colorPrimario} 
            onChange={(e)=>{
                actualizarColor(e.target.value, id)
            }}
            >

            </input>
            <h3 style={primario}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=> <Colaborador 
                    datos= {colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    /> )
                }
            

            </div>


        </section>

        }</>
}

export default Equipo
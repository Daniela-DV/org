import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {


    return <section className="section-miorg">
         <h2 className="titulo-miorg">Mi organización</h2>
         <img src="/img/ad.png" alt="add" className="img-miorg" onClick={props.cambiarMostrar}/>

    </section>
    
}

export default MiOrg
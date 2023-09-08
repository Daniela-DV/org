import "./footer.css";
import {AiOutlineCopyrightCircle , SiGithub } from  "react-icons/ai"

const Footer = ()=>{

    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>

        <div className="redes">
        <a href='https://www.linkedin.com/in/daniela-del-valle01/'> 
            <img src="/img/linkedin.png" alt="Linkedin"/>
        </a>
        <a href='https://github.com/Daniela-DV'> 
            <img src="/img/github.png" alt="GitHub" />
        </a>
        </div>

        <img src='/img/Logo.png' alt='org' style={{width: "120px"}}/> 
        <strong className="copyright" ><AiOutlineCopyrightCircle style={{alignItems:`center`}}/> Desarrollado por Daniela Del Valle </strong>

  
    </footer>
}
export default Footer;
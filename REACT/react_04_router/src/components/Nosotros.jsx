import { Link } from "react-router-dom";

const Nosotros = () =>{
    return(
        <>
            <div>
                <h1>Esta es la página de Nosotros</h1>
                <Link to='/'>
                    Regresar a la página de Inicio
                </Link> <br />
                {/* <Link to='contacto'>
                    Ir a la página de Contacto
                </Link> */}
            </div>
        </>
    )
}

export default Nosotros;
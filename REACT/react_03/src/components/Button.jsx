import './Button.css'

/**
 * Props. Propiedades que se puede asignar a los componentes paramodificar el texto, la información desde la renderización del mismo.
 * Se asignan como parámetro de la función con el nombre del prop y debe ir entre llaves.
 * Se manda a llamar en el bloque de codigo donde se debe implementar utilizando llaves
 */


const Button = ({label})=> {
    return (
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button
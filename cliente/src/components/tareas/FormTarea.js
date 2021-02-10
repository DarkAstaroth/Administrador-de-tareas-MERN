import React,{useContext} from 'react';
import proyectoContext from '../../context/Proyectos/proyectoContext';

const FormTarea = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    // Si no hay proyecto seleccionado

    if(!proyecto) return null;

    const [proyectoActual] = proyecto;

    const onSubmit = e => {
        e.preventDefault();
        

        // Validar 

        // pasar la validacion

        // agregar la nueva tarea al state de tareas

        // reiniciar el form
    }


    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        name="nombre" 
                        className="input-text"
                        placeholder="Nombre Tarea..."
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value="Agregar Tarea" 
                        className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;
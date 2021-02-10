import React,{useContext} from 'react';
import proyectoContext from '../../context/Proyectos/proyectoContext';

const FormTarea = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    // Si no hay proyecto seleccionado

    if(!proyecto) return null;

    const [proyectoActual] = proyecto;


    return ( 
        <div className="formulario">
            <form>
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
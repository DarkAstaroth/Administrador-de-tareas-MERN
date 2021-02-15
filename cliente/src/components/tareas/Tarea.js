import React,{useContext} from 'react';
import tareaContext from '../../context/Tareas/tareaContext';
import proyectoContext from '../../context/Proyectos/proyectoContext';

const Tarea = ({ tarea }) => {

    const tareasContext = useContext(tareaContext);
    const { eliminarTarea , obtenerTareas , cambiarEstadoTarea ,guardarTareaActual} = tareasContext;

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Extraer el proyecto
    const[proyectoActual]=proyecto;

    // Funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id=>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    // funcion que modifica el estado de las tareas
    const CambiarEstado = tarea =>{
        if(tarea.estado){
            tarea.estado = false;
        } else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    // agrega una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea=>{
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado
                        ?
                            <button
                                type="button"
                                className="completo"
                                onClick={()=>CambiarEstado(tarea)}
                            >Completo</button>
                        :
                            <button
                                type="button"
                                className="incompleto"
                                onClick={()=>CambiarEstado(tarea)}
                            >Incompleto</button>
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={()=>seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=>tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;
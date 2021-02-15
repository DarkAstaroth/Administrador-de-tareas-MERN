import React,{useContext , useState ,useEffect } from 'react';
import proyectoContext from '../../context/Proyectos/proyectoContext';
import tareaContext from '../../context/Tareas/tareaContext';

const FormTarea = () => {



    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    
    const tareasContext = useContext(tareaContext);
    const { errortarea, agregarTarea , validarTarea , obtenerTareas, tareaseleccionada  } = tareasContext;

    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null){
            setTarea(tareaseleccionada);
        }else{
            setTarea({
                nombre:''
            })
        }
    }, [tareaseleccionada])
    
    // state del formulario 
    const [tarea, setTarea] = useState({
        nombre :''
    })

    // extraer el nombre del proyecto
    const {nombre} = tarea

    // Si no hay proyecto seleccionado

    if(!proyecto) return null;

    const [proyectoActual] = proyecto;

    // leer los valores del formulario

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        

        // Validar 
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }


        // agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        // Obtener y filtrar las tareas del proyectoabtual
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        setTarea({
            nombre : ''
        })
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
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"  
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>:null}
        </div>
     );
}
 
export default FormTarea;
import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/Proyectos/proyectoContext';

const NuevoProyecto = () => {

    // obtener el state del formulario

    const proyectosContext = useContext(proyectoContext);
    const { 
            formulario, 
            mostrarFormulario , 
            agregarProyecto , 
            errorFormulario , 
            mostrarError
        } = proyectosContext;

    // state para proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre del proyecto
    const { nombre } = proyecto;


    // lee los contenidos del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // cuando el usuario envia un proyecto

    const onSubmitProyecto = e => {
        e.preventDefault();

        // validar el proyecto

        if(nombre === ''){
            mostrarError();
            return;
        }

        // agregar al state
        agregarProyecto(proyecto);
        
        // Reiniciar el form
        setProyecto({
            nombre:''
        })
    }

    // mostrar el formulario

    const onClickFormulario = () =>{
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo Proyecto
        </button>

            {
                formulario
                    ?
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >
                            <input
                                type="text"
                                className="input-text"
                                name="nombre"
                                placeholder="Nombre proyecto"
                                onChange={onChangeProyecto}
                                value={nombre}
                            />

                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />
                        </form>
                    )
                    :
                    null
            }

            { errorFormulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>: null}
        </Fragment>
    );
}

export default NuevoProyecto;
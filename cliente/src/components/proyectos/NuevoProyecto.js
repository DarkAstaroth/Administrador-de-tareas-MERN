import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/Proyectos/proyectoContext';

const NuevoProyecto = () => {

    // obtener el state del formulario

    const proyectosContext = useContext(proyectoContext);
    const { formulario } = proyectosContext;

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

        // agregar al state

        // Reiniciar el form
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
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

        </Fragment>
    );
}

export default NuevoProyecto;
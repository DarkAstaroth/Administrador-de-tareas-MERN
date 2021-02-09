import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO
} from '../../types'


const ProyectoState = props => {

    const proyectos = [
        { id: '1', nombre: 'Tienda Virtual' },
        { id: '2', nombre: 'Intranet' },
        { id: '3', nombre: 'Diseño de sitio web' }
    ];

    const initialState = {
        proyectos: [],
        formulario: false
    }

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // serie de funciones para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proyectos con dispatch

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload : proyectos
        })
    }

    // agregar nuevo proyecto

    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4();

        // insertar el proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTO,
            payload : proyecto
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
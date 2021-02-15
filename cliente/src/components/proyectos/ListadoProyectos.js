import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/Proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListadoProyectos = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // obtener proyectos cuando se carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    // revisar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto

                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;
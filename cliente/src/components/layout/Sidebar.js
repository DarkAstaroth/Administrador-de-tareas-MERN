import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Taks</span></h1>
            <NuevoProyecto/>

            <div className="proyectos">

                <h2>tus Proyectos</h2>
                <ListadoProyectos/>
                
            </div>

        </aside>
     );
}
 
export default Sidebar;
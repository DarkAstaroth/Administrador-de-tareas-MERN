import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    // state para iniciar sesion

    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    });

    // extraer de usuario

    const {email ,password} = usuario;

    const onChange = e =>{
        setUsuario({
            ...usuario,
            [e.target.name] : e.traget.value
        });
    }

    // cuando el usuario quiere iniciar sesion

    const onSubmit = e =>{
        e.preventDefault();

        // validar que no haya campos vacios


        // pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Tu Password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block" 
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener cuenta</Link>
            </div>
        </div>
     );
}
 
export default Login;
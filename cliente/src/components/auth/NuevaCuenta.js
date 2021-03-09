import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/Alertas/alertaContext';
import AuthContext from '../../context/Autenticacion/authContext';
const NuevaCuenta = () => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { registrarUsuario } = authContext;

    // state para iniciar sesion
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    // cuando el usuario quiere iniciar sesion

    const onSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios
        if (
            nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === ''
        ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 passwords son iguales
        if (password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

        // pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
        
    }

    return (
        <div className="form-usuario">
            { alerta
                ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
                : null
            }
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Tu Nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>

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
                        <label htmlFor="confirmar">Confirmar tu password</label>
                        <input
                            type="password"
                            name="confirmar"
                            id="confirmar"
                            placeholder="Repite tu password"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Volver a iniciar sesion</Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;
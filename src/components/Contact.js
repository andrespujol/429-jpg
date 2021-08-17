import React from 'react';
import MenuBoot from './MenuBoot';

const Contact = () => {
    return (
        <>
        <MenuBoot/>
        <section>
            <h3 className="titleContact">Pedí tu presupuesto por este formulario</h3>
            <form action="">
        
                    <label htmlFor="">
                        <span>Nombre</span>
                        <input 
                            type="text"
                            autoComplete="off"
                            name="Nombre" />
                    </label>

        
                <label htmlFor="">
                        <span>Correo electrónico</span>
                        <input 
                            type="email"
                            autoComplete="off"
                            name="Email" />
                    </label>

                
                <label className="labelMessage" htmlFor="">
                        <span>Mensaje</span>
                        <textarea name="Mensaje" id="" cols="30" rows="10"></textarea>
                    </label>

                    <button className="delete">BORRAR</button>
                    <button className="send">ENVIAR</button>

            </form>
        </section>
        </>
    )
}


export default Contact
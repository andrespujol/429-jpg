import React from 'react';
import Logo from '../../public/images/429Logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <Logo/>
            <h4 className="textFooter">no te olvides de seguirnos en nuestras redes sociales</h4>
            <div className="footerLogos">
                <img src="../../public/images/" alt="" />
            </div>
        </div>
    )
}

export default Footer

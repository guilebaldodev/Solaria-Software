import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( <>
  <footer className="footer">
            <div className="footer-titles">
                <div className="footer-logotype">
                    <Image src="/layout/sun.png" alt="Logotipo de Solaria Software" width={40} height={40} />
                    <h3>Solaria Software</h3>
                </div>
                <p>
                    En nuestra agencia de desarrollo de software, nos enfocamos en ofrecer soluciones personalizadas que impulsan la transformación digital de tu empresa. Nos especializamos en crear aplicaciones robustas y eficientes.
                </p>
            </div>

            <div className="footer-options">
                <div className="footer-section">
                    <h4>Empresa</h4>
                    <Link href="/">Servicios</Link>
                    <Link href="/">Casos de éxito</Link>
                    <Link href="/">Agenda una cita</Link>
                </div>
                <div className="footer-section">
                    <h4>Servicios</h4>
                    <Link href="/">Desarrollo web</Link>
                    <Link href="/">e-commerce</Link>
                    <Link href="/">Software a la medida</Link>
                    <Link href="/">Desarrollo de APIs</Link>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <ul>
                        <li>
                            <Image src="/layout/phone-icon.png" alt="Ícono de teléfono" width={20} height={20} />
                            (+52) 7443112193
                        </li>
                        <li>
                            <Image src="/layout/email-icon.png" alt="Ícono de correo electrónico" width={20} height={20} />
                            solaria@software.com
                        </li>
                        <li>
                            <Image src="/layout/ubication-icon.png" alt="Ícono de ubicación" width={20} height={20} />
                            Acapulco Guerrero, México
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </> );
}
 
export default Footer;
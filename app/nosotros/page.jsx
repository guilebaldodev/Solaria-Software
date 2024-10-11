import Image from "next/image";
import Link from "next/link";

const About = () => {
    return ( 
        <>
        <div className="about-container">
            <div className="about-titles">
                <h2>
                Diseñando <span className="primary-color">soluciones digitales</span> para hacer crecer tu negocio
                </h2>
    
                <div className="description">
                    <p>
                        Solaria Software es una empresa mexicana líder en el desarrollo de soluciones tecnológicas personalizadas. Con un enfoque en la innovación digital, ofrecemos una amplia gama de servicios, desde la creación de páginas web para pequeños negocios hasta el diseño de soluciones tecnológicas a medida para empresas más grandes y complejas.
                    </p>
                </div>
            </div>
    
            <div className="about-numbers">
                <div className="about-numbers-item">
                    <h3>+130</h3>
                    <p>Clientes satisfechos</p>
                </div>
    
                <div className="about-numbers-item">
                    <h3>+180</h3>
                    <p>Proyectos completados</p>
                </div>
    
                <div className="about-numbers-item">
                    <h3>+5</h3>
                    <p>Años de experiencia</p>
                </div>
            </div>
        </div>
    
        <div className="why-us">
            <div className="why-us-text">
                <h3>Puedes confiar en  <span className='primary-color'>Solaria</span></h3>
                <p>
                    En Solaria Software, nuestro compromiso es contigo. Nos enfocamos en construir relaciones de confianza al ofrecer soluciones tecnológicas personalizadas que se adaptan a tus necesidades y que están diseñadas para ayudarte a alcanzar tus metas de negocio.
                </p>
                <div className="checks">
                    <div className="check-duo">
                        <Image src="/us/check-icon.png" alt="Icono de verificación" width={24} height={24} />
                        <p>Impulsa tu presencia en línea.</p>
                    </div>
                    <div className="check-duo">
                        <Image src="/us/check-icon.png" alt="Icono de asesoría continua" width={24} height={24} />
                        <p>Asesoría continua para asegurar el éxito de tus proyectos.</p>
                    </div>
                    <div className="check-duo">
                        <Image src="/us/check-icon.png" alt="Icono de soluciones escalables" width={24} height={24} />
                        <p>Soluciones escalables que crecen junto a tu negocio.</p>
                    </div>
                </div>
                {/* <button>Conoce más</button> */}
            </div>
            <div className="why-us-container">
                <img src="/us/consultoria-it.jpg" alt="" />
            </div>
        </div>
    
        <div className="about-us">
            <div className="about-us-titles">
                <h3>Lo que ofrecemos</h3>
            </div>
    
            <div className="about-us-items">
                <div className="about-us-item">
                    <div className="about-item-img">
                        <Image src="/us/shop.png" alt="Soluciones para negocios" width={40} height={40} />
                    </div>
                    <h4>Soluciones a cualquier tamaño de negocio</h4>
                    <p>
                        Ya sea que necesites una página web para un pequeño emprendimiento o una plataforma compleja para una gran empresa, creamos soluciones a medida para cualquier tipo de proyecto.
                    </p>
                </div>
                <div className="about-us-item">
                    <div className="about-item-img">
                        <Image src="/us/quick.png" alt="Desarrollos rápidos" width={40} height={40} />
                    </div>
                    <h4>Desarrollos rápidos y eficientes</h4>
                    <p>
                        Nos enfocamos en brindarte resultados en el menor tiempo posible sin comprometer la calidad, para que puedas aprovechar la tecnología de inmediato y mantener el ritmo de tu negocio.
                    </p>
                </div>
    
                <div className="about-us-item">
                    <div className="about-item-img">
                        <Image src="/us/team.png" alt="Equipo profesional" width={40} height={40} />
                    </div>
                    <h4>Un equipo profesional a tu servicio</h4>
                    <p>
                        Nuestro equipo de expertos en desarrollo de software trabaja con dedicación y profesionalismo para entregar resultados que superen tus expectativas.
                    </p>
                </div>
            </div>
        </div>
    
        <div className="our-values">
            <div className="our-values-title">
                <h3>Nuestros valores</h3>
            </div>
            <div className="our-values-items">
                <div className="our-values-item">
                    <div className="our-value-img">
                        <Image src="/us/transparencia.png" alt="Valor de transparencia" width={40} height={40} />
                    </div>
                    <h4>Transparencia</h4>
                    <p>
                        Nos comprometemos a mantener una comunicación abierta y honesta con nuestros clientes en cada etapa del proyecto.
                    </p>
                </div>
    
                <div className="our-values-item">
                    <div className="our-value-img">
                        <Image src="/us/calidad.png" alt="Valor de calidad" width={40} height={40} />
                    </div>
                    <h4>Calidad</h4>
                    <p>
                        Priorizamos la excelencia en cada proyecto, garantizando que nuestros productos cumplan con los más altos estándares.
                    </p>
                </div>
    
                <div className="our-values-item">
                    <div className="our-value-img">
                        <Image src="/us/compromiso.png" alt="Valor de compromiso" width={40} height={40} />
                    </div>
                    <h4>Compromiso</h4>
                    <p>
                        Nos dedicamos a cumplir con tus expectativas y a ofrecerte el apoyo necesario para alcanzar tus metas.
                    </p>
                </div>
    
                <div className="our-values-item">
                    <div className="our-value-img">
                        <Image src="/us/inovacion.png" alt="Valor de innovación" width={40} height={40} />
                    </div>
                    <h4>Innovación</h4>
                    <p>
                        Buscamos constantemente nuevas formas de mejorar nuestros servicios y productos, incorporando las últimas tendencias y tecnologías.
                    </p>
                </div>
    
                <div className="our-values-item">
                    <div className="our-value-img">
                        <Image src="/us/empatia.png" alt="Valor de empatía" width={40} height={40} />
                    </div>
                    <h4>Empatía</h4>
                    <p>
                        Nos esforzamos por entender las necesidades y preocupaciones de nuestros clientes.
                    </p>
                </div>
    
                <div className="our-values-item">
                    <div className="our-value-img">
                        <Image src="/us/colaboracion.png" alt="Valor de colaboración" width={40} height={40} />
                    </div>
                    <h4>Colaboración</h4>
                    <p>
                        Trabajamos en estrecha colaboración con nuestros clientes, fomentando un ambiente de trabajo en equipo y respeto mutuo.
                    </p>
                </div>
            </div>
        </div>
    
        <div className="banner">
            <div className="banner-texts">
                <h2>¿Tienes una idea o proyecto en mente?</h2>
                <p>Permítenos ayudarte a llevar tu negocio al siguiente nivel. ¡Habla con nosotros hoy!</p>
                
                <Link href="contacto">Contactanos</Link>
            </div>
        </div>
        </> 
    );
}
 
export default About;
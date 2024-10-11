import Image from "next/image";
import { poppins } from "../ui/fonts";

const Contact = () => {
    return ( <>

<section className="contact">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>
                            ¿Listo para transformar tu visión en realidad? ¡En Solaria estamos aquí para ayudarte!
                        </h2>
                        <p>
                            En un mundo donde la innovación es clave, ofrecemos soluciones únicas que se adaptan a tus necesidades específicas. 🚀
                        </p>
                        <div className="contact-check">
                            <div className="contact-section">
                                {["Webs para negocios", "Tiendas en linea", "Software a la media"].map((item) => (
                                    <div className="contact-check-item" key={item}>
                                        <Image src="/contact/check-icon.png" width={23} height={23} alt="Ícono de verificación" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="contact-section">
                                {["Aplicaciones empresariales", "Desarrollo de APIS", "Paginas promocionales"].map((item) => (
                                    <div className="contact-check-item" key={item}>
                                        <Image src="/contact/check-icon.png" width={23} height={23} alt="Ícono de verificación" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="contact-features">
                            {[
                                { img: "/contact/expert.png", title: "Expertos en acción", text: "Nos especializamos en llevar proyectos complejos a la realidad, para hacer crecer tu negocio." },
                                { img: "/contact/saving.png", title: "Precios justos", text: "Cada proyecto es diferente, pero nuestra promesa de precios justos es siempre la misma." }
                            ].map(({ img, title, text }) => (
                                <div className="feature" key={title}>
                                    <Image src={img} width={30} height={30} alt={title} />
                                    <div className="feature-text">
                                        <h4>{title}</h4>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form className="contact-form-container">
                        <div className="contact-form-title">
                            <p>Déjanos tus datos en el formulario y pronto nos pondremos en contacto contigo.</p>
                        </div>
                        <div className="contact-form">
                            {/* Campos del formulario */}
                            <div className="form-double-input">
                                <div className="input-duo">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" required />
                                </div>
                                <div className="input-duo">
                                    <label htmlFor="apellidos">Apellidos</label>
                                    <input type="text" id="apellidos" required />
                                </div>
                            </div>
                            <div className="form-double-input">
                                <div className="input-duo">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div className="input-duo">
                                    <label htmlFor="telefono">Teléfono móvil</label>
                                    <input type="tel" id="telefono" required />
                                </div>
                            </div>
                            <div className="input-duo">
                                <label htmlFor="proyecto">¿En qué consiste tu proyecto? Cuéntanos más?</label>
                                <textarea id="proyecto" required></textarea>
                            </div>
                            <div className="input-check">
                                <input type="checkbox" id="privacy" required />
                                <label htmlFor="privacy">Al hacer click confirmas que has leído y aceptas nuestras Políticas de Privacidad.</label>
                            </div>
                            <button className={`${poppins.className}`}>¡Hablemos de tu proyecto!</button>
                        </div>
                    </form>
                </div>
            </section>

        
        
    </> );
}
 
export default Contact;
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
    return ( 
        <>
        <div className="portfolio-container">
            <div className="portfolio-texts">
                <h2>Casos de Éxito</h2>
                <p>
                Te presentamos ejemplos reales de clientes, desde marcas hasta pequeños negocios y profesionales independientes, que han confiado en Solaria Software para hacer crecer sus proyectos con éxito.
                </p>
            </div>

            <div className="portfolio-items">
                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/cluvexani.png" 
                            alt="ClubExani" 
                            width={300} 
                            height={200} 
                            priority 
                            style={{ width: '100%', height: 'auto' }} 


                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/cluvexani.png" 
                            alt="ClubExani" 
                            width={300} 
                            height={200} 
                            priority 
                            style={{ width: '100%', height: 'auto' }} 

                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/cluvexani.png" 
                            alt="ClubExani" 
                            width={300} 
                            height={200} 
                            priority 
                            style={{ width: '100%', height: 'auto' }} 


                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/articulos.png" 
                            alt="Artículos" 
                            width={300} 
                            height={200}
                            priority 
                            style={{ width: '100%', height: 'auto' }} 


                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/articulos.png" 
                            alt="Artículos" 
                            width={300} 
                            height={200} 
                            priority 
                            style={{ width: '100%', height: 'auto' }} 


                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/articulos.png" 
                            alt="Artículos" 
                            width={300} 
                            height={200} 
                            style={{ width: '100%', height: 'auto' }} 

                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/articulos.png" 
                            alt="Artículos" 
                            width={300} 
                            height={200} 
                            style={{ width: '100%', height: 'auto' }} 

                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img">
                        <Image 
                            src="/portfolio/articulos.png" 
                            alt="Artículos" 
                            width={300} 
                            height={200} 
                            style={{ width: '100%', height: 'auto' }} 

                        />
                    </div>
                    <div className="portfolio-item-texts">
                        <h4>Educación</h4>
                        <h3>ClubExani</h3>
                        <p>Plataforma para preparar exámenes de admisión a posgrado</p>
                        <Link href="">Ver caso de éxito</Link>
                    </div>
                </div>
            </div>
        </div>
    </>

    
     );
}
 
export default Portfolio;
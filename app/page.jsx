import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

<>
  <div className="hero-container">
    <div className="overlay">
      <div className="hero-image-texts">
        <h1>Desarrollo de páginas <span className='primary-color'>webs</span> y <span className='primary-color'>software</span> a la medida</h1>
        <p>Ofrecemos soluciones web y de software completamente adaptadas a tu negocio, garantizando resultados efectivos a un precio justo.</p>
        <button>¡Quiero más información!</button>
      </div>
    </div>
  </div>

  <div className="services">
    <div className="services-title">
      <h2>Nuestros <span className='primary-color'>Servicios</span></h2>
      <p>Selecciona el servicio que mejor se ajuste a los objetivos y necesidades de tu negocio, y asegúrate de obtener resultados óptimos.</p>
    </div>
    <div className="services-container">
      <div className="service">
        <div className="service-img-container">
          <Image src="/home/web-icon.png" alt="Desarrollo de páginas web" width={64} height={60} />
        </div>
        <h3>Desarrollo de <span className='primary-color'>páginas web</span></h3>
        <p>Diseñamos y creamos sitios atractivos y funcionales que impulsan tus objetivos de negocio.</p>
      </div>
      <div className="service">
        <div className="service-img-container">
          <Image src="/home/shopping-icon.png" alt="Desarrollo e implementación de e-commerce" width={60} height={60} />
        </div>
        <h3>Desarrollo e implementación de <span className='primary-color'>e-commerce</span></h3>
        <p>Lanza tu tienda en línea para potenciar tus ventas y ampliar tu alcance.</p>
      </div>
      <div className="service">
        <div className="service-img-container">
          <Image src="/home/software-icon.png" alt="Desarrollo de software a la medida" width={60} height={60} />
        </div>
        <h3>Desarrollo de <span className='primary-color'>software a la medida</span></h3>
        <p>Desarrollamos aplicaciones que responden a tus requerimientos únicos.</p>
      </div>
      <div className="service">
        <div className="service-img-container">
          <Image src="/home/api-icon.png" alt="Desarrollo de APIs a medida" width={60} height={60} />
        </div>
        <h3>Desarrollo de <span className='primary-color'>APIs a medida</span></h3>
        <p>Integramos tus aplicaciones con otros sistemas mediante APIs personalizadas.</p>
      </div>
    </div>
  </div>

  <div className="clients">
    <div className="clients-title">
      <h3><span className='primary-color'>Clientes</span> que confiaron en nosotros</h3>
    </div>
    <div className="clients-container">
      <div className="client">
        <Image src="/home/marcas/marca.avif" alt="Cliente 1" width={70} height={70} />
      </div>
      <div className="client">
        <Image src="/home/marcas/marca2.jpg" alt="Cliente 2" width={70} height={70} />
      </div>
      <div className="client">
        <Image src="/home/marcas/marca3.png" alt="Cliente 3" width={70} height={70} />
      </div>
      <div className="client">
        <Image src="/home/marcas/marca4.jpg" alt="Cliente 4" width={70} height={70} />
      </div>
      <div className="client">
        <Image src="/home/marcas/marca5.webp" alt="Cliente 5" width={70} height={70} />
      </div>
      <div className="client">
        <Image src="/home/marcas/marca7.png" alt="Cliente 6" width={70} height={70} />
      </div>
      <div className="client">
        <Image src="/home/marcas/marca6.png" alt="Cliente 7" width={70} height={70} />
      </div>
      <div className="client">
        <Image src="/home/marcas/marca8.svg" alt="Cliente 8" width={70} height={70} />
      </div>
    </div>
  </div>
</>
  );
}

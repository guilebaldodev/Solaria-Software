'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { poppins } from "./fonts";

const Header = () => {



  const router=useRouter()

  const pathname = usePathname(); 


    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
      if(pathname=="/"){
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, [pathname]);


    return ( <>
    
      <header className={pathname==="/"? `header ${isSticky ? "sticky" : ""}`:"header sticky"}>
    <div className="header-container">

    <div className="header-logotype">
      <img src="/layout/sun.png" alt="" />
      <h3>Solaria Software</h3>
    </div>
    <div className="header-right">
      <nav>
        <Link href={"/"}>Servicios</Link>
        <Link href={"/casos-de-exito"}>Casos de éxito</Link>
        <Link href={"/nosotros"}>Nosotros</Link>
      </nav>
      <button className={ `${poppins.className}`} onClick={()=>{
    router.push("/contacto"); 

}}>Contacto</button>
    </div>
      </div>
  </header></> );
}
 
export default Header;
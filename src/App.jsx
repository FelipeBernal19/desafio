import { useState } from 'react'
import AppStyle from './app.module.css'
import logo from "./assets/logo.png"
import bit from "./assets/bit.png"


const  Nav = () =>  {

  const links = [{ id: 1, href: "#2023", text: "2023"},
                { id: 2, href: "#2022", text: "2022"},
                { id: 3, href: "#2021", text: "2021"},
                { id: 4, href: "#2020", text: "2020"},
                { id: 5, href: "#2019", text: "2019"}]

  return( 
   <nav>
     <ul>
       {links.map(link =>
          <a className={AppStyle.a} key = {link.id} href={link.href}>{link.text}</a>)}

     </ul>
   </nav>

 )
}


function App() {

  return (
    <>
      <header className={AppStyle.header}>
        <div className={AppStyle.logo}><img className={AppStyle.logo_img} src={logo} alt="" /></div>
        <div className={AppStyle.nav}>
        <h1 className={AppStyle.titulo} >GestiSalud</h1>
        <h2 className={AppStyle.slogan} >Datos De Enfermedades En Colombia</h2>
        </div>
        <div className={AppStyle.bit}><img className={AppStyle.bit_img} src={bit} alt="" /></div>
        <div className={AppStyle.flex}>
          <Nav></Nav>
        </div>
      </header>

      
      <section className={AppStyle.section1} id ="2023">
        <div className={AppStyle.texto1}>
        <h3>Año 2023</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        </div>
        
        <img className={AppStyle.graf1} src={logo} alt="" />
      </section>

      <section className={AppStyle.section2} id ="2022">
      <div className={AppStyle.texto2}>
        <h3>Año 2022</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        </div>

        <img className={AppStyle.graf2} src={logo} alt="" />
      </section>

      <section className={AppStyle.section3} id ="2021">
      <div className={AppStyle.texto3}>
        <h3>Año 2021</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        </div>

        <img className={AppStyle.graf3} src={logo} alt="" />
      </section>

      <section className={AppStyle.section4} id ="2020">
      <div className={AppStyle.texto4}>
        <h3>Año 2020</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        </div>
        
        <img className={AppStyle.graf4} src={logo} alt="" />
      </section>

      <section className={AppStyle.section5} id ="2019">
      <div className={AppStyle.texto5}>
        <h3>Año 2019</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        </div>
        
        <img className={AppStyle.graf5} src={logo} alt="" />
      </section>
      

      <footer className={AppStyle.footer}>
        <h2>Contacto</h2>
        <ul>
          <li><h4>Tel: +57 318-413-3403</h4></li>
          <li><h4>Correo: analisis.principal@gestisalud.com</h4></li>
          <li><h4>Dirección: Carrera 170 A # 95 - 17</h4></li>
        </ul>

      </footer>

    </>
  )
}

export default App

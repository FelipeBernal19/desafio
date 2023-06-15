import { useState } from 'react'
import AppStyle from './app.module.css'
import logo from "./assets/logo.png"


const  Nav = () =>  {

  const links = [{ id: 1, href: "#2023", text: "2023 "},
                { id: 2, href: "#2022", text: "2022 "},
                { id: 3, href: "#2021", text: "2021 "},
                { id: 4, href: "#2020", text: "2020 "},
                { id: 5, href: "#2019", text: "2019"}]

  return( 
   <nav>
     <ul>
       {links.map(link =>
          <a key = {link.id} href={link.href}>{link.text}</a>)}

     </ul>
   </nav>

 )
}


function App() {

  return (
    <>
      <header className={AppStyle.header}>
        <img className={AppStyle.logo} src={logo} alt="" />
        <h1 className={AppStyle.titulo} >GestiSalud</h1>
        <h2 className={AppStyle.slogan} >Herramienta de apoyo inteligente para gestión de datos en salud</h2>
        <div className={AppStyle.flex}>
          <Nav></Nav>
        </div>
      </header>

      <section className={AppStyle.section1} id ="2023">
        <h3>Año 2023</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        <img src={logo} alt="" />
      </section>

      <section className={AppStyle.section2} id ="2022">
        <h3>Año 2022</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        <img src={logo} alt="" />
      </section>

      <section className={AppStyle.section3} id ="2021">
        <h3>Año 2021</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        <img src={logo} alt="" />
      </section>

      <section className={AppStyle.section4} id ="2020">
        <h3>Año 2020</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        <img src={logo} alt="" />
      </section>

      <section className={AppStyle.section5} id ="2019">
        <h3>Año 2019</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit excepturi quibusdam voluptatibus quaerat minus quae numquam. Est, sit hic. Reprehenderit dolorem neque vero nobis enim! Officiis voluptatum libero reiciendis itaque?</p>
        <img src={logo} alt="" />
      </section>


      <footer>
        <h3>Contacto</h3>
        <ul>
          <li><h4>Tel: +57 318-413-3403</h4></li>
          <li><h4>Correo: analisis.princiapl@gestisalud.com</h4></li>
          <li><h4>Dirección: Carrera 170 A # 95 - 17</h4></li>
        </ul>

      </footer>

    </>
  )
}

export default App

import { useState } from 'react'
import AppStyle from './app.module.css'

function App() {
  

  return (
    <>
      <header>
        <h1>GestiSalud</h1>
        <h2>Herramienta de apoyo inteligente para gestión de datos en salud</h2>
        <div className={AppStyle.flex}>
            <ul>
                <li><h2>2019</h2></li>
                <li><h2>2020</h2></li>
                <li><h2>2021</h2></li>
                <li><h2>2022</h2></li>
                <li><h2>2023</h2></li>
            </ul>
        </div>
      </header>

      <section className={AppStyle.section1}>

      </section>

      <section className={AppStyle.section2}></section>

      <section className={AppStyle.section3}></section>

      <section className={AppStyle.section4}></section>

      <section className={AppStyle.section5}></section>


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

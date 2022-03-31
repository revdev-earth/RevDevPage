//* Import hooks
import { useRef } from "react"
//* Import components
import { HomeServices } from "@components"
//* Import Data
import { homeServices } from "@data"
//* Import assets
import Circles from "@assets/circles.svg"
import ArrowShort from "@assets/Vector.svg"
//* Import styles
import { Container, ControlLeft, ControlRigth } from "./styles"

export const SecondSection = () => {
  const slideshow = useRef(null)

  const siguiente = () => {
    //* Comprobando que el slide tenga elementos
    if (slideshow.current.children.length > 0) {
      //*Obtener el primer elemento
      const primerElemento = slideshow.current.children[0]
      const segundoElemento = slideshow.current.children[1]
      console.log(":: slide :: " + primerElemento)
      //* Estableciendo transicion para el slider
      slideshow.current.style.transition = `3000ms ease-out all`

      //* Tamaño de slider
      const tamañoSlide = primerElemento?.offsetWidth + 20
      console.log(":: tamño slide ::", tamañoSlide)

      //* Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

      const transicion = () => {
        //* Reiniciamos le posicion del slideshow
        slideshow.current.style.transition = "none"
        slideshow.current.style.transform = `translateX(0)`

        //* Tomamos el primer elemento y lo mandamos al final
        slideshow.current.appendChild(primerElemento)
        slideshow.current.appendChild(segundoElemento)

        //* Eliminar listener para que no se pause el slider hacia anterior
        slideshow.current.removeEventListener("transitionend", transicion)
      }

      //* EventListener para cuando termina la animacion
      slideshow.current.addEventListener("transitionend", transicion)
    }
  }

  const Anterior = () => {
    console.log("Anterior")

    if (slideshow.current.children.length > 0) {
      //* Identificamos la ultima posición
      const index = slideshow.current.children.length - 1

      const penultimolemento = slideshow.current.children[index - 1]
      const ultimoElemento = slideshow.current.children[index]

      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      )
      slideshow.current.insertBefore(
        penultimolemento,
        slideshow.current.firstChild
      )

      slideshow.current.style.transition = "none"
      const tamañoSlide = slideshow.current.children[0].offsetWidth
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

      setTimeout(() => {
        slideshow.current.style.transition = `3000ms ease-out all`
        slideshow.current.style.transform = `translateX(0)`
      }, 30)
    }
  }

  return (
    <Container>
      <h3>Our Services</h3>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </p>

      <ul>
        <div ref={slideshow}>
          {homeServices.map((item) => (
            <HomeServices item={item} key={Math.random() * 10} />
          ))}
        </div>
        <ControlLeft src={ArrowShort} onClick={Anterior} alt="Control left" />
        <ControlRigth src={ArrowShort} onClick={siguiente} alt="" />
      </ul>

      <div>
        <img src={Circles} alt="" />
      </div>
    </Container>
  )
}

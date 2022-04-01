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
  const slideshow = useRef<HTMLDivElement>(null)

  const siguiente = () => {
    //* Comprobando que el slide tenga elementos
    if (slideshow.current !== null) {
      const { children } = slideshow.current

      if (children.length > 0) {
        //*Obtener el primer elemento
        const primerElemento = children[0] as HTMLLIElement
        const segundoElemento = children[1]
        //* Estableciendo transicion para el slider
        slideshow.current.style.transition = `600ms ease-out all`

        //* Tamaño de slider
        const tamañoSlide = primerElemento?.offsetWidth + 20

        //* Movemos el slideshow
        slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

        const transicion = () => {
          if (slideshow.current !== null) {
            //* Reiniciamos le posicion del slideshow
            slideshow.current.style.transition = "none"
            slideshow.current.style.transform = `translateX(0)`

            //* Tomamos el primer elemento y lo mandamos al final
            slideshow.current.appendChild(primerElemento)
            slideshow.current.appendChild(segundoElemento)

            //* Eliminar listener para que no se pause el slider hacia anterior
            slideshow.current.removeEventListener("transitionend", transicion)
          }
        }

        //* EventListener para cuando termina la animacion
        slideshow.current.addEventListener("transitionend", transicion)
      }
    }
  }

  const Anterior = () => {
    if (slideshow.current !== null) {
      const { children } = slideshow.current

      if (children.length > 0) {
        //* Identificamos la ultima posición
        const index = children.length - 1

        const penultimolemento = children[index - 1]
        const ultimoElemento = children[index]

        slideshow.current.insertBefore(
          ultimoElemento,
          slideshow.current.firstChild
        )
        slideshow.current.insertBefore(
          penultimolemento,
          slideshow.current.firstChild
        )

        slideshow.current.style.transition = "none"
        const tamañoSlide = children[0].offsetWidth
        slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

        setTimeout(() => {
          slideshow.current.style.transition = `600ms ease-out all`
          slideshow.current.style.transform = `translateX(0)`
        }, 30)
      }
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
        <ControlLeft>
          <img src={ArrowShort} onClick={Anterior} alt="Control left" />
        </ControlLeft>
        <ControlRigth>
          <img src={ArrowShort} onClick={siguiente} alt="" />
        </ControlRigth>
      </ul>

      <div>
        <img src={Circles} alt="" />
      </div>
    </Container>
  )
}

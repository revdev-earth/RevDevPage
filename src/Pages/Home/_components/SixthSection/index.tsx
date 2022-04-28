import { useState, useRef } from "react"
// components
import { Button } from "@components"

// assets
import ArrowShort from "@assets/vector.svg"
import Circles from "@assets/circles.svg"

// styles
import {
  Container,
  Content,
  New,
  Arrowrigth,
  ArrowLeft,
  SeeAll,
  Slider,
  CirclesContent,
} from "./styles"

const news = [
  {
    title: "Why Your SaaS Business should use WordPress",
    desctiprion:
      "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort.",
    link: "",
  },
  {
    title: "Why Your SaaS Business should use WordPress",
    desctiprion:
      "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort.",
    link: "",
  },
  {
    title: "Why Your SaaS Business should use WordPress",
    desctiprion:
      "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort.",
    link: "",
  },
]

export const SixthSection = () => {
  const [slide, setSlide] = useState(false)

  const sliderContainer = useRef<HTMLDivElement>(null)

  const slideRightSection = () => {
    if (screen.width > 800) {
      setSlide(true)
    }
    if (screen.width <= 800) {
      if (sliderContainer !== null && sliderContainer?.current?.children) {
        const { children } = sliderContainer.current

        //obtenemos el primer elemento
        const primerElemento = children[0] as any

        //* Tamaño de slider
        const tamañoSlide = primerElemento?.offsetWidth + 40
        //* Estableciendo transicion para el slider
        sliderContainer.current.style.transition = `600ms ease-out all`

        //* Movemos el sliderContainer
        sliderContainer.current.style.transform = `translateX(-${tamañoSlide}px)`

        const transicion = () => {
          if (sliderContainer.current !== null) {
            //* Reiniciamos le posicion del sliderContainer
            sliderContainer.current.style.transition = "none"
            sliderContainer.current.style.transform = `translateX(0)`

            //* Tomamos el primer elemento y lo mandamos al final
            sliderContainer.current.appendChild(primerElemento)

            //* Eliminar listener para que no se pause el slider hacia anterior
            sliderContainer.current.removeEventListener(
              "transitionend",
              transicion
            )
          }
        }

        //* EventListener para cuando termina la animacion
        sliderContainer.current.addEventListener("transitionend", transicion)
      }
    }
  }

  const slideLeftSection = () => {
    if (screen.width > 800) {
      setSlide(false)
    }
    if (screen.width <= 800) {
      if (sliderContainer.current !== null) {
        const { children } = sliderContainer.current

        if (children.length > 0) {
          //* Identificamos la ultima posición
          const index = children.length - 1

          const penultimolemento = children[index - 1]
          const ultimoElemento = children[index]

          sliderContainer.current.insertBefore(
            ultimoElemento,
            sliderContainer.current.firstChild
          )
          sliderContainer.current.insertBefore(
            penultimolemento,
            sliderContainer.current.firstChild
          )

          sliderContainer.current.style.transition = "none"
          const { offsetWidth } = children[0] as any
          sliderContainer.current.style.transform = `translateX(-${offsetWidth}px)`

          setTimeout(() => {
            if (sliderContainer.current !== null) {
              sliderContainer.current.style.transition = `600ms ease-out all`
              sliderContainer.current.style.transform = `translateX(0)`
            }
          }, 30)
        }
      }
    }
  }

  return (
    <Container>
      <CirclesContent>
        <img src={Circles} alt="" />
        <img src={Circles} alt="" />
        <img src={Circles} alt="" />
      </CirclesContent>
      <Content slide={slide}>
        <div>
          <h4>News & Articles</h4>
          <h2>DaCode Blog</h2>
          <p>
            On daCode blog we will review the latest in web development for the
            SaaS-, tech- and crypto industry.
          </p>
        </div>
        <SeeAll>
          <Button transparent>See all</Button>
        </SeeAll>
        <ul>
          <Slider ref={sliderContainer}>
            {news.map(({ title, desctiprion, link }) => (
              <New key={Math.random() * 10} slide={slide}>
                <h4>{title}</h4>
                <p>{desctiprion}</p>
              </New>
            ))}
          </Slider>
        </ul>
      </Content>
      <Arrowrigth onClick={slideRightSection} slide={slide}>
        <img src={ArrowShort} alt="arrow" />
      </Arrowrigth>
      <ArrowLeft onClick={slideLeftSection} slide={slide}>
        <img src={ArrowShort} alt="arrow" />
      </ArrowLeft>
    </Container>
  )
}

//* import components
import { Button } from "@components"

//* import assets
import ArrowLarge from "@assets/arrow-right.svg"
import ArrowShort from "@assets/Vector.svg"

//* import styles
import { Container, Content, New, Arrow } from "./styles"
import { useState } from "react"

const news = [
  {
    title: "Why Your SaaS Business should use WordPress",
    desctiprion:
      "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
    link: "",
  },
  {
    title: "Why Your SaaS Business should use WordPress",
    desctiprion:
      "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
    link: "",
  },
  {
    title: "Why Your SaaS Business should use WordPress",
    desctiprion:
      "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
    link: "",
  },
]

export const SevenSection = () => {
  const [slide, setSlide] = useState(false)

  console.log(slide)
  return (
    <Container>
      <Content slide={slide}>
        <div>
          <h5>News & Articles</h5>
          <h3>DaCode Blog</h3>
          <p>
            On daCode blog we will review the latest in web development for the
            SaaS-, tech- and crypto industry.
          </p>
          <Button transparent>See all</Button>
        </div>
        <ul>
          {news.map(({ title, desctiprion, link }) => (
            <New key={Math.random() * 10} slide={slide}>
              <h5>{title}</h5>
              <p>{desctiprion}</p>
              <a href="#">
                Read more <img src={ArrowLarge} alt={link} />
              </a>
            </New>
          ))}
        </ul>
      </Content>
      <Arrow onClick={() => setSlide(true)} slide={slide}>
        <img src={ArrowShort} alt="arrow" />
      </Arrow>
    </Container>
  )
}

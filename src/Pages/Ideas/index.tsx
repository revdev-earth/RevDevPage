//* import router
import { Link } from "react-router-dom"
//* import styles
import { Container, Section2, Section3Content } from "./styles"
//* import components
import { ContainerSection } from "@components"
import Idea from "./_components/Idea"
//* import sections
import OurCalendar from "@components/common/OurCalendar"

const ideas = [
  {
    title: "Rev Dev",
    description:
      "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
    image: "",
  },
  {
    title: "Rev Dev",
    description:
      "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
    image: "",
  },
  {
    title: "Rev Dev",
    description:
      "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
    image: "",
  },
  {
    title: "Rev Dev",
    description:
      "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
    image: "",
  },
]

const Ideas = () => {
  return (
    <Container>
      <ContainerSection>
        <h2>A few ideas that have taken shape</h2>
        <p>
          like all humans on this planet, we are all proud of what we have
          achieved and that is why we share the ideas of those who have come to
          imagine something in which we can all participate, do you have another
          idea? do you want to tell the world?
        </p>
      </ContainerSection>

      <Section2>
        <ul>
          {ideas.map((idea) => (
            <Idea key={Math.random() * 100} idea={idea} />
          ))}
        </ul>
      </Section2>

      <ContainerSection>
        <Section3Content>
          <h2>Do you want to be part?</h2>
          <Link to="#">check here more</Link>
        </Section3Content>
      </ContainerSection>

      <OurCalendar />
    </Container>
  )
}
export default Ideas

//* import router
import { Link } from 'react-router-dom'
//* import styles
import { Container, Section1, Section2, Section3 } from './styles'
//* import assets
import VectorImg1 from "@assets/Vector1.svg"
import VectorImg2 from "@assets/Vector2.svg"
//* import components
import ContainerSection from "@components/common/ContentSection"

const Ideas = ()  => {
    return (
        <Container>
            <ContainerSection>
                <h2>
                    A few ideas that have taken shape
                </h2>
                <p>
                like all humans on this planet, we are all proud of what we have achieved and that is why we share the ideas of those who have come to imagine something in which we can all participate, do you have another idea? do you want to tell the world?
                </p>
            </ContainerSection>

            <Section2>
                <ul>
                    <li>
                        <div></div>
                        <div>
                            <h4>Rev Dev</h4>
                            <p>Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.</p>
                        </div>
                    </li>
                </ul>
            </Section2>

            <ContainerSection>
                <h2>Do you want to be part?</h2>
                <Link to="#">check here more</Link>
            </ContainerSection>

        </Container>
    )
}
export default Ideas
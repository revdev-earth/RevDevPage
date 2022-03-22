//* import router
import { Link } from 'react-router-dom'
//* import styles
import { Container, Section4, Section2, Section3Content } from './styles'
//* import components
import ContainerSection from "@components/common/ContentSection"
import Idea from "./_components/Idea"
//*import assets
import Calendar from '@assets/image-calendar.png'
import Circles from '@assets/circles.svg'

const ideas = [ 
    {
        title: "Rev Dev",
        description: "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
        image: "" 
    },
    {
        title: "Rev Dev",
        description: "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
        image: "" 
    },
    {
        title: "Rev Dev",
        description: "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
        image: "" 
    },
    {
        title: "Rev Dev",
        description: "Nothing more and nothing less than us entered with the necessary papers to play an important role on the field, nothing more and nothing less than the one played with the 10 jersey, has left everything for the team and provide well-being to the world that we are.",
        image: "" 
    },
    

]

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
                    {ideas.map((idea) => <Idea key={Math.random() * 100} idea={idea}/>)}
                </ul>
            </Section2>

            <ContainerSection>
                <Section3Content>

                <h2>Do you want to be part?</h2>
                <Link to="#">check here more</Link>
                </Section3Content>
            </ContainerSection>

            <Section4>
                <div>
                <h3>Our Calendar</h3>
                <div>
                    <p>         
                        We want to know more about you?
                        What is your name? what do you do for a living?
                        What are you thinking about?
                        what is your next step, and more...
                    </p>    
                    <p>
                        when would you like to chat?
                    </p>
                    <p>
                        schedule in our calendar when you prefer, in our times we will find the best space together and we will see where we want to direct the navigation sail.
                    </p>
                    <p>
                        Do you want to start know?
                    </p>
                </div>
                </div>
                <div>
                    <h4>Schedule the meet with you</h4>
                    <img src={Circles} alt="circles"  />
                    <img src={Calendar} alt="Calendar"  />
                </div>

            </Section4>

        </Container>
    )
}
export default Ideas
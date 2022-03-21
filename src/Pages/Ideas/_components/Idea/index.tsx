//* import styles
import { Container } from './styles'

interface IIdea {
    idea: {
        title: string
        description: string
        image: string
    }
}

const Idea = ({idea}: IIdea) =>{
    console.log(":: idea ::", idea)
    return(
        <Container>
            <div><img  src={idea.image} alt="" /></div>
                <div>
                    <h4>{idea.title}</h4>
                    <p>{idea.description}</p>
                </div>
        </Container>
    )
}

export default Idea
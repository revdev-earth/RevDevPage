import { ReactNode } from "react";
//* import styles
import { Container } from "./styles";

//* import assets
import VectorImg1 from "@assets/Vector1.svg"
import VectorImg2 from "@assets/Vector2.svg"

interface IContainer  {
    children?: ReactNode
}

const ContainerSection = ({children} : IContainer) => {
    return(
        <Container>
            {children}
            <img src={VectorImg1} alt="vector1" />
            <img src={VectorImg2} alt="vector2" />
        </Container>
    )
}

export default ContainerSection
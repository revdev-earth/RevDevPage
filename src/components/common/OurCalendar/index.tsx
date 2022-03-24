//* import styles
import { Container } from "./styles"
//*import assets
import Calendar from "@assets/image-calendar.png"
import Circles from "@assets/circles.svg"

const OurCalendar = () => (
  <Container>
    <div>
      <h3>Our Calendar</h3>
      <div>
        <p>
          We want to know more about you? What is your name? what do you do for
          a living? What are you thinking about? what is your next step, and
          more...
        </p>
        <p>when would you like to chat?</p>
        <p>
          schedule in our calendar when you prefer, in our times we will find
          the best space together and we will see where we want to direct the
          navigation sail.
        </p>
        <p>Do you want to start know?</p>
      </div>
    </div>
    <div>
      <h4>Schedule the meet with you</h4>
      <img src={Circles} alt="circles" />
      <img src={Calendar} alt="Calendar" />
    </div>
  </Container>
)

export default OurCalendar

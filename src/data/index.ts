//* Import assets
import StartUp from "@assets/startup.svg"
import WordPress from "@assets/wordpress.svg"
import Layers from "@assets/layers.svg"
import MagnifyingGlass from "@assets/magnifying-glass.svg"
import webDesign from "@assets/web-design.svg"
import Img1 from "@assets/home/Image-h-1.png"
import Img2 from "@assets/home/Image-h-2.png"
import Img3 from "@assets/home/Image-h-3.png"

export const footer: string[][] = [
  ["Work", "Blog", "How We Work", "Testimonials"],
  ["Services", "Marketing Strategy", "Website Optimization", "Email Marketing"],
  ["Business Solution", "Partnership", "About Project", "Corporate"],
]

export const homeServices: {
  img: string
  title: string
  description: string
  link: string
}[] = [
  {
    img: WordPress,
    title: "Software and infrastructure",
    description:
      "you can opt for knowledge and personnel to shape the ideas proposed for the future",
    link: "#",
  },
  {
    img: StartUp,
    title: "Digital tools",
    description:
      "we put at your disposal development tools, to learn more about the products and services and thus aim higher",
    link: "#",
  },
  {
    img: Layers,
    title: "Company boost",
    description:
      "To reach more people we need more energy and we all do that impulse together, advancing and adapting to our now",
    link: "#",
  },
  {
    img: MagnifyingGlass,
    title: "front end",
    description:
      "What impresses us the most is what we see, so what better than making our clients see that they are at home.",
    link: "#",
  },
  {
    img: webDesign,
    title: "back end",
    description:
      "we improve the services that are interconnected to provide better security and response to our customers",
    link: "#",
  },
  {
    img: webDesign,
    title: "design",
    description:
      "we draw the best way to see your service, we want everyone to understand what you have for the world",
    link: "#",
  },
]

export const homeSection4 = [
  {
    id: 1,
    title: "Your Idea",
    description:
      "We are going to talk about the idea and what you expect from it, how you expect it to be built and what your plans are, who is going to participate and how you see yourself in it",
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "with everything we already know, then we start to plan together and we begin to increase the clarity capacity that we are going to give to the idea until it is stable enough to be maintained over time.",
  },
  {
    id: 3,
    title: "Backlog and Sprints",
    description:
      "With the ideas come the plans and the planning is immediate, we schedule all the issues that we can see so that we begin to make the idea take shape.",
  },
  {
    id: 4,
    title: "Your website goes live",
    description:
      "It is time for us to give shape to the time of our idea, that each part of itself and our plans are fulfilled, here we are already the idea becoming a reality",
  },
]
export const homeWorks = [
  [
    {
      img: Img1,
      description:
        "Growing up together among the consultations of others, we find that sitting in the window chatting with our neighbor makes us feel good, that is why we have given life to the windows",
    },
    {
      img: Img2,
      description:
        "Vacations are something that gives us relaxation and also motivates us to spend time as best we can, that's why we're going to air your plans",
    },
    {
      img: Img3,
      description:
        "Clean air, drinking water, connecting with nature and the now, are skills that we must nurture daily, that's why we make you feel with your daily plans",
    },
  ],
  [
    {
      img: Img1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    },
    {
      img: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    },
    {
      img: Img3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    },
  ],
  [
    {
      img: Img1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    },
    {
      img: Img2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    },
    {
      img: Img3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    },
  ],
]

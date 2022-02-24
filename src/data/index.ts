//* Import assets
import StartUp from "@assets/startup.svg"
import WordPress from "@assets/wordPress.svg"
import Layers from "@assets/layers.svg"
import MagnifyingGlass from "@assets/magnifying-glass.svg"
import webDesign from "@assets/web-design.svg"

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
    title: "WordPress Site",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    link: "#",
  },
  {
    img: StartUp,
    title: "WordPress Plugin",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    link: "#",
  },
  {
    img: Layers,
    title: "",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    link: "#",
  },
  {
    img: MagnifyingGlass,
    title: "",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    link: "#",
  },
  {
    img: webDesign,
    title: "",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    link: "#",
  },
  {
    img: webDesign,
    title: "",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    link: "#",
  },
]

export const homeSection4 = [
  {
    id: 1,
    title: "Your Idea",
    description:
      "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
  },
  {
    id: 2,
    title: "Strategy meeting",
    description:
      "This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.",
  },
  {
    id: 3,
    title: "Agile and Scrum framework",
    description:
      "In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.",
  },
  {
    id: 4,
    title: "Your website goes live",
    description:
      "The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.",
  },
]

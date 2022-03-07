//* import components
import { Button } from "@components"

//* import assets
import Arrow from "@assets/arrow-right.svg"

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
  return (
    <section>
      <div>
        <h4>News & Articles</h4>
        <h3>DaCode Blog</h3>
        <p>
          On daCode blog we will review the latest in web development for the
          SaaS-, tech- and crypto industry.
        </p>
        <Button>See all</Button>
      </div>
      <ul>
        {news.map(({ title, desctiprion, link }) => (
          <li>
            <h4>{title}</h4>
            <p>{desctiprion}</p>
            <a href="#">
              Read more <img src={Arrow} alt={link} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

interface HomeServicesProps {
  item: { img: string; title: string; description: string; link: string }
}

export const HomeServices = ({ item }: HomeServicesProps) => (
  <li>
    <h4>{item.title}</h4>
    <img src={item.img} alt={item.img} />
    <p>{item.description}</p>
    <a href={item.link}>Read More</a>
  </li>
)

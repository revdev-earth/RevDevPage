import { footer } from "../../../data"

//* Import Links
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Logo</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div>
          {footer.map((list) => (
            <ul key={Math.random() * 10}>
              {list.map((item) => (
                <li key={Math.random() * 10}>
                  <Link to="">{item}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div>Language</div>
      </div>
      <div>
        <div>RevDev 2020</div>
        <div>
          <ul>
            <li>FB</li>
            <li>TW</li>
            <li>IG</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

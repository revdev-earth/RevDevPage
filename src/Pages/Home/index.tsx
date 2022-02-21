import ImgHome1 from "../../assets/home/img-home-1.png"

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <h2>
            We helped you create your <span>website</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
            turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit
            quis leo non. At donec egestas cras in libero pellentesque. Donec
            amet phasellus
          </p>
          <div>
            <button>Get Started</button>
            <button>contact Us</button>
          </div>
        </div>
        <img src={ImgHome1} alt="" />
      </div>
    </main>
  )
}

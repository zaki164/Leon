import images from '../../constants';
import './About.css';

const About = () => {
  return (
    <section className="about" id="About">
      <div className="container">
        <h2 className="special-heading">About</h2>
        <p>Less is more work</p>
        <div className="about-content">
          <div className="image">
            <img src={images.about} alt="about" />
          </div>
          <article className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, error blanditiis. Fugit fugiat,
              asperiores quod ea optio modi nesciunt veritatis cumque in ex magni odit quia sit repudiandae
              pariatur aliquid.</p>
            <hr />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt architecto dolores tenetur
                amet deleniti, vel, magnam voluptatibus excepturi beatae sapiente quis praesentium iste minima
                ut error quam nostrum eveniet assumenda?</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
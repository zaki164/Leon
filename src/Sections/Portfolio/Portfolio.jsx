import images from '../../constants';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="Portfolio">
      <div className="container">
        <h2 className="special-heading">Portfolio</h2>
        <p>If you do it right, it will last forever.</p>
        <div className="portfolio-content">
          <figure className="card">
            <img src={images.portfolio1} alt="portfolio-1" />
              <figcaption className="info">
                <h3>Project Here</h3>
                <p>My creative ability is very difficult to measure because it can manifest in so many
                  surprising and.</p>
              </figcaption>
          </figure>
          <figure className="card">
            <img src={images.portfolio2} alt="portfolio-2" />
              <figcaption className="info">
                <h3>Project Here</h3>
                <p>My creative ability is very difficult to measure because it can manifest in so many
                  surprising and.</p>
              </figcaption>
          </figure>
          <figure className="card">
            <img src={images.portfolio3} alt="portfolio-3" />
              <figcaption className="info">
                <h3>Project Here</h3>
                <p>My creative ability is very difficult to measure because it can manifest in so many
                  surprising and.</p>
              </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
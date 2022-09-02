import images from '../../constants';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="Services">
      <div className="container">
        <h2 className="special-heading">Services</h2>
        <p>Don't Be Busy , Be Productive</p>
        <div className="services-content">
          <div className="col">
            <article className="srv">
              <i className="fas fa-palette"></i>
              <div className="text">
                <h3>Graphic Design</h3>
                <p>Graphic design is the process of visual communication and problem-solving using one or
                  more of typography, photography and illustration.</p>
              </div>
            </article>
            <article className="srv">
              <i className="fab fa-sketch"></i>
              <div className="text">
                <h3>UI & UX</h3>
                <p>Process of enhancing user satisfaction with a product by improving the usability,
                  accessibility, and pleasure provided in the interaction.</p>
              </div>
            </article>
          </div>
          <div className="col">
            <article className="srv">
              <i className="fas fa-vector-square"></i>
              <div className="text">
                <h3>Web Design</h3>
                <p>Web design encompasses many different skills and disciplines in the production and
                  maintenance of websites.</p>
              </div>
            </article>
            <article className="srv">
              <i className="fas fa-pencil-ruler"></i>
              <div className="text">
                <h3>
                  Web Development</h3>
                <p>Web development is a broad term for the work involved in developing a web site for the
                  Internet or an intranet.</p>
              </div>
            </article>
          </div>
          <div className="col">
            <div className="image image-invisible">
              <img src={images.services} alt="services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
import './Product.css';

const Product = () => {
  return (
    <section className="features">
      <div className="container">
        <article className="feat">
          <i className="fas fa-magic fa-3x"></i>
          <h3>Tell Us Your Idea</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sunt error nesciunt eligendi officiis
          </p>
        </article>
        <article className="feat">
          <i className="fas fa-gem fa-3x"></i>
          <h3>We Will Do All The Work</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sunt error nesciunt eligendi officiis
          </p>
        </article>
        <article className="feat">
          <i className="fas fa-globe-asia fa-3x"></i>
          <h3>Your Product is Worldwide</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque sunt error nesciunt eligendi officiis
          </p>
        </article>
      </div>
    </section>
  )
}

export default Product
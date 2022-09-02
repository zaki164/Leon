import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="Contact">
      <div className="container">
        <h2 className="special-heading">Contact</h2>
        <p>We are born to create</p>
        <article className="info">
          <p className="label">Feel free to drop us a line at:</p>
          <a href="mailto:Leonagency@mail.com?subject=Contact" className="link">Leonagency@mail.com</a>
          <div className="social">
            Find Us On Social Networks
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Contact
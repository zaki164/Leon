import { Navbar } from '../'
import { About, Contact, Product,  Footer, Landing, Portfolio, Services,  } from '../../Sections'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Product />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

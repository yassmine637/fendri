import Hero from '../components/Hero';
import Values from '../components/Values';
import About from '../components/About';
import Factory from '../components/Factory';
import Product from '../components/Product';
import Awards from '../components/Awards';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <About />
      <Factory />
      <Product />
      <ProductViewer />
      <Awards />
      <Contact />
    </>
  );
}

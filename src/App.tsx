import { useReveal } from './hooks/useReveal';
import { Nav } from './sections/Nav';
import { Intro } from './sections/Intro';
import { Marquee } from './sections/Marquee';
import { Story } from './sections/Story';
import { Product } from './sections/Product';
import { Strength } from './sections/Strength';
import { Detail } from './sections/Detail';
import { Pricing } from './sections/Pricing';
import { Faq } from './sections/Faq';
import { Cta } from './sections/Cta';
import { Footer } from './sections/Footer';

export default function App() {
  useReveal();

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#0c0d0f', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%', maxWidth: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Nav />
        <Intro />
        <Marquee />
        <Story />
        <Product />
        <Strength />
        <Detail />
        <Pricing />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}

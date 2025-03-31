import { HomeContent } from '../components/HomeContent';
import { Menu } from '../components/Menu';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';

export const Home = (() => {
  return (
    <>
      <HomeContent />
      <div id="menu"><Menu/></div>
      <Testimonials />
      <div id="about"><About/></div>
    </>
  );
});

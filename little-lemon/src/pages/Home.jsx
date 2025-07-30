/* Home component aggregating HomeContent, Menu, Testimonials, and About sections */
import { HomeContent } from '../components/HomeContent';
import { Menu } from '../components/Menu';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';

export const Home = () => {
  /* Combines all sections with IDs for in-page navigation */
  return (
    <>
      <HomeContent />
      <div id="menu"><Menu/></div>
      <Testimonials />
      <div id="about"><About/></div>
    </>
  );
};
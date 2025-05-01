import chefA from '../assets/images/Mario and Adrian A.jpg';
import chefB from '../assets/images/Mario and Adrian b.jpg';

export const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 mb-32 bg-white items-start">
      <div className="md:col-start-3 md:col-span-4 space-y-4">
        <h1 className="text-yellow-300 text-4xl font-bold">Little Lemon</h1>
        <h3 className="text-yellow-500 text-2xl font-semibold">Chicago</h3>
        <p className="text-gray-700 font-medium">
          We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <p className="text-gray-800">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          <br /><br />
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="md:col-start-8 md:col-span-3 flex justify-center relative pb-16 ml-4">
        <img src={chefB} alt="Chef Adrian" className="w-48 md:w-64 h-60 md:h-80 object-cover rounded-md z-10" />
        <img src={chefA} alt="Chef Mario" className="w-48 md:w-64 h-60 md:h-80 object-cover rounded-md absolute top-8 md:top-12 -left-10 md:-left-20 shadow-lg" />
      </div>
    </section>
  );
};

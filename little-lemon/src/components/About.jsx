/* About component displaying restaurant story and founder photos */
import chefA from "../assets/images/Mario and Adrian A.jpg";
import chefB from "../assets/images/Mario and Adrian b.jpg";

export const About = () => {
  /* Renders a responsive grid layout: 1 column on mobile, 12-column grid with offset on md screens */
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 mb-32 bg-white items-start">
      {/* Text section: Starts at col 3, spans 4 cols on md screens */}
      <div className="md:col-start-3 md:col-span-4 space-y-4">
        <h1 className="text-yellow-300 text-4xl font-bold">Little Lemon</h1>
        <h3 className="text-yellow-500 text-2xl font-semibold">Chicago</h3>
        <p className="text-gray-700 font-medium">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <p className="text-gray-800">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the US to pursue their dream.
          <br />
          <br />
          Mario crafts the menu with family recipes; Adrian handles marketing
          and menu expansion.
        </p>
      </div>
      {/* Image section: Starts at col 8, spans 3 cols, with layered photos */}
      <div className="md:col-start-8 md:col-span-3 flex justify-center relative pb-16 ml-4">
        <img
          src={chefB}
          alt="Chef Adrian"
          className="w-48 md:w-64 h-60 md:h-80 object-cover rounded-md z-10"
        />
        <img
          src={chefA}
          alt="Chef Mario"
          className="w-48 md:w-64 h-60 md:h-80 object-cover rounded-md absolute top-8 md:top-12 -left-10 md:-left-20 shadow-lg"
        />
      </div>
    </section>
  );
};

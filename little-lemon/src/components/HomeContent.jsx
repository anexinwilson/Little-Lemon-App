/* HomeContent component with welcome message, description, and food image */
import { Link } from "react-router-dom";
import headerImg from "../assets/images/restauranfood.jpg";

export const HomeContent = () => {
  /* Renders a grid layout: 1 col on mobile, 12 cols split on md screens */
  return (
    <section className="bg-[#495e57] w-full py-10 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 px-6 md:px-4">
        <div className="md:col-span-7 space-y-6">
          <h1 className="text-[#f4ce14] text-5xl md:text-6xl font-bold leading-tight">
            Little Lemon
          </h1>
          <p className="text-white text-base md:text-lg font-normal">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            to="/reservations"
            className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-6 py-3 rounded-md"
          >
            Reserve a table
          </Link>
        </div>
        <div className="md:col-span-5">
          <img
            src={headerImg}
            alt="Restaurant food"
            className="rounded-xl object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

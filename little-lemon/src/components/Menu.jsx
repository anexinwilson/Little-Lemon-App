import greekSalad from '../assets/images/greek salad.jpg';
import bruchetta from '../assets/images/bruchetta.svg';
import lemonDessert from '../assets/images/lemon dessert.jpg';

export const Menu = () => {
  return (
    <section className="px-6 py-12 bg-white text-center">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h2 className="text-4xl font-bold">This Week’s Specials!</h2>
        <button className="bg-yellow-400 text-black px-6 py-3 font-bold rounded hover:bg-yellow-300">
          Online Menu
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-lg shadow-md w-72 overflow-hidden">
          <img src={greekSalad} alt="Greek Salad" className="w-full h-48" />
          <div className="p-4 text-left space-y-2">
            <div className="flex justify-between font-semibold">
              <p>Greek Salad</p>
              <p>$12.99</p>
            </div>
            <p className="text-sm">
              The famous Greek salad of crispy lettuce, cucumbers, tomatoes, onions, feta cheese, and olives.
            </p>
            <div className="flex justify-between items-center pt-2 text-sm font-semibold text-gray-600">
              <p>Order a delivery</p>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png"
                alt="delivery"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md w-72 overflow-hidden">
          <img src={bruchetta} alt="Bruschetta" className="w-full h-48" />
          <div className="p-4 text-left space-y-2">
            <div className="flex justify-between font-semibold">
              <p>Bruschetta</p>
              <p>$8.99</p>
            </div>
            <p className="text-sm">
              Fresh tomatoes, garlic, and basil served on toasted bread and topped with parmesan cheese.
            </p>
            <div className="flex justify-between items-center pt-2 text-sm font-semibold text-gray-600">
              <p>Order a delivery</p>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png"
                alt="delivery"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md w-72 overflow-hidden">
          <img src={lemonDessert} alt="Lemon Dessert" className="w-full h-48" />
          <div className="p-4 text-left space-y-2">
            <div className="flex justify-between font-semibold">
              <p>Lemon Dessert</p>
              <p>$5.00</p>
            </div>
            <p className="text-sm">A light lemon cake with glaze, served with vanilla ice cream. A family recipe favorite!</p>
            <div className="flex justify-between items-center pt-2 text-sm font-semibold text-gray-600">
              <p>Order a delivery</p>
              <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png" alt="delivery" className="w-5 h-5"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

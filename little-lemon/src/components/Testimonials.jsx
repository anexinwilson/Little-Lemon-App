export const Testimonials = () => {
    const starIcon = "https://cdn-icons-png.flaticon.com/512/2107/2107957.png";
  
    const testimonials = [
      {
        name: "Ava R.",
        rating: 5,
        score: "4.7",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        comment: "Absolutely loved the lemon pasta! The cozy ambiance and service were amazing too."
      },
      {
        name: "Liam J.",
        rating: 5,
        score: "4.6",
        image: "https://randomuser.me/api/portraits/men/23.jpg",
        comment: "Little Lemon never disappoints. Great flavors, fresh ingredients, and super friendly staff!"
      },
      {
        name: "Sofia M.",
        rating: 3,
        score: "3.0",
        image: "https://randomuser.me/api/portraits/women/31.jpg",
        comment: "It was okay. A bit pricey for the portion size, but the lemon tart was delicious."
      },
      {
        name: "Ethan B.",
        rating: 5,
        score: "4.9",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        comment: "Incredible food, zesty flavors, and a lovely vibe. Highly recommend the lemon risotto!"
      }
    ];
  
    const getStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars[i] = <img key={i} src={starIcon} alt="star" className="w-4 h-4" />;
      }
      return stars;
    };
  
    return (
      <section className="bg-yellow-100 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Kind Words From Happy Customers!</h2>
  
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {testimonials.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded w-64 shadow space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {getStars(review.rating)}
                </div>
                <p className="text-sm font-medium">{review.score}</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={review.image} className="w-10 h-10 rounded-full" alt={`${review.name}`} />
                <p className="font-semibold">{review.name}</p>
              </div>
              <p className="text-sm text-gray-700 italic">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
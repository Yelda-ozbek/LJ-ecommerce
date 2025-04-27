import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EditorPickSection = () => {
  const categories = useSelector((state) => state.product.categories);

  // 🧠 Top 5 category (rating'e göre)
  const top5Categories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">EDITOR’S PICK</h2>
      <p className="text-center text-sm text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>

      {/* 🔹 MEN, WOMEN, ACCESSORIES, KIDS görselleri */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        
        {/* MEN */}
        <Link to="/shop" className="block">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/assets/men.jpeg"
              alt="Men"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-white px-3 py-1 font-semibold text-black text-sm rounded">
              MEN
            </span>
          </div>
        </Link>

        {/* WOMEN */}
        <Link to="/shop" className="block">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/assets/yelj.jpeg"
              alt="Women"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-white px-3 py-1 font-semibold text-black text-sm rounded">
              WOMEN
            </span>
          </div>
        </Link>

        {/* ACCESSORIES ve KIDS */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          
          {/* ACCESSORIES */}
          <Link to="/shop" className="block">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img
                src="/assets/accesss.jpeg"
                alt="Accessories"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-white px-3 py-1 font-semibold text-black text-sm rounded">
                ACCESSORIES
              </span>
            </div>
          </Link>

          {/* KIDS */}
          <Link to="/shop" className="block">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img
                src="/assets/kids.jpeg"
                alt="Kids"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-white px-3 py-1 font-semibold text-black text-sm rounded">
                KIDS
              </span>
            </div>
          </Link>

        </div>
      </div>

      {/* 🔥 Top 5 kategori alanı */}
      <h3 className="text-xl font-semibold mb-4">Top 5 Categories</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {top5Categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop/${cat.gender}/${cat.title.toLowerCase()}/${cat.id}`}
            className="block"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img
                src={cat.img}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-center text-lg font-semibold">
              {cat.title}
            </h3>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default EditorPickSection;

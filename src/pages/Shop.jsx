import ProductCard from "../components/ProductCard.jsx";

const products = [
    {
      image: "https://via.placeholder.com/300x400",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
    {
      image: "https://via.placeholder.com/300x400?text=2",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
    {
      image: "https://via.placeholder.com/300x400?text=3",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
    {
      image: "https://via.placeholder.com/300x400?text=4",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
    {
      image: "https://via.placeholder.com/300x400?text=5",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
    {
      image: "https://via.placeholder.com/300x400?text=6",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
    {
      image: "https://via.placeholder.com/300x400?text=7",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
    {
      image: "https://via.placeholder.com/300x400?text=8",
      title: "Graphic Design",
      desc: "English Department",
      price: "$6.48",
      oldPrice: "$16.48",
      colors: ["#16a34a", "#0ea5e9", "#f97316","#000000"],
    },
  ];
  

const Shop = () => {
  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">BESTSELLER PRODUCTS</h2>
      <p className="text-center text-sm text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((prod, index) => (
          <ProductCard key={index} {...prod} />
        ))}
      </div>
    </section>
  );
};

export default Shop;

import { Link } from "react-router-dom";

const ProductCard = ({ id, name, description, price, images }) => {
  const imageUrl = images?.[0]?.url || "https://via.placeholder.com/300x400";

  return (
    <Link
      to={`/product/${id}`}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 h-10">{description}</p>
        <div className="mt-2">
          <span className="text-lg font-bold text-blue-600">
            {price.toFixed(2)} ₺
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

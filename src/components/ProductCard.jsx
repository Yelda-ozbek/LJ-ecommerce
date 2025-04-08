const ProductCard = ({ image, title, desc, price, oldPrice, colors }) => {
    return (
      <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">{desc}</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-600 font-bold">{price}</span>
          <span className="text-gray-400 line-through text-sm">{oldPrice}</span>
        </div>
        <div className="flex gap-1">
          {colors.map((color, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full`}
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
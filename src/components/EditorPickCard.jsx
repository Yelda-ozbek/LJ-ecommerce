
// src/components/EditorPickCard.jsx
import { Link } from "react-router-dom";

const EditorPickCard = ({ title, image, gender, categoryName, categoryId }) => {
  const link = gender && categoryName && categoryId
    ? `/shop/${gender}/${categoryName}/${categoryId}`
    : "#"; // Link yoksa tıklanmasın

  return (
    <div className="relative group cursor-pointer">
      <img src={image} alt={title} className="rounded shadow w-full h-60 object-cover" />
      <Link
        to={link}
        className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold shadow transition group-hover:bg-blue-600 group-hover:text-white"
      >
        {title}
      </Link>
    </div>
  );
};

export default EditorPickCard;



/*const EditorPickCard = ({ image, title }) => {
    return (
      <div className="relative group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-1 font-semibold text-gray-800 rounded">
          {title}
        </div>
      </div>
    );
  };
  
  export default EditorPickCard;*/
  
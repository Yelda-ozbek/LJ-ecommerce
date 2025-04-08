const EditorPickCard = ({ image, title }) => {
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
  
  export default EditorPickCard;
  
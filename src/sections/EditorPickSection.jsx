import EditorPickCard from "../components/EditorPickCard";

const EditorPickSection = () => {
  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-2xl font-bold text-center mb-2">EDITOR’S PICK</h2>
      <p className="text-center text-sm text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sol - MEN */}
        <div className="md:col-span-1">
          <EditorPickCard
            title="MEN"
            image="https://via.placeholder.com/400x500?text=Men"
          />
        </div>

        {/* Orta - WOMEN */}
        <div className="md:col-span-1">
          <EditorPickCard
            title="WOMEN"
            image="https://via.placeholder.com/400x500?text=Women"
          />
        </div>

        {/* Sağ - 2 küçük kutu (ACCESSORIES + KIDS) */}
        <div className="md:col-span-2 grid grid-rows-2 gap-6">
          <EditorPickCard
            title="ACCESSORIES"
            image="https://via.placeholder.com/400x240?text=Accessories"
          />
          <EditorPickCard
            title="KIDS"
            image="https://via.placeholder.com/400x240?text=Kids"
          />
        </div>
      </div>
    </section>
  );
};

export default EditorPickSection;

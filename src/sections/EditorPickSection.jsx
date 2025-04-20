import EditorPickCard from "../components/EditorPickCard";
import yelye from "../assets/yelj.jpeg";
import men from "../assets/men.jpeg";
import acces from "../assets/accesss.jpeg";
import kids from "../assets/kids.jpeg";
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
            image={men}
          />
        </div>

        {/* Orta - WOMEN */}
        <div className="md:col-span-1">
          <EditorPickCard
            title="WOMEN"
            image={yelye}
          />
        </div>

        {/* Sağ - 2 küçük kutu (ACCESSORIES + KIDS) */}
        <div className="md:col-span-2 grid grid-rows-2 gap-6">
          <EditorPickCard
            title="ACCESSORIES"
            image={acces}
          />
          <EditorPickCard
            title="KIDS"
            image={kids}
          />
        </div>
      </div>
    </section>
  );
};

export default EditorPickSection;

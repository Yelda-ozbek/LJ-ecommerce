import HomeSlider from "../components/HomeSlider";
import EditorPickSection from "../sections/EditorPickSection";

const HomePage = () => {
  return (
    <>
      {/*kendime not... Hero Section yerine artık Slider kullanıyoruz */}
      <HomeSlider />

      {/* Diğer bölümler */}
      <EditorPickSection />
    </>
  );
};

export default HomePage;

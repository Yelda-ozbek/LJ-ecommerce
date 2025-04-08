import Header from "./Header";
import Footer from "./Footer";

const PageContent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] px-4 py-8">{children}</main>
      <Footer />
    </>
  );
};

export default PageContent;

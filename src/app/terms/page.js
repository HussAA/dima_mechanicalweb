import Footer from "@/components/footer";
import Header from "@/components/header";
import TermsHero from "@/components/Terms/hero";

const Page = () => {
  return (
    <>
      <header className="bg-[#FEF7F2] pb-20 pt-3">
        <Header />
        <TermsHero />
      </header>
      <section>
        <section className="py-36"></section>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Page;

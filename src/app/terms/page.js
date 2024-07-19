import Footer from "@/components/footer";
import Header from "@/components/header";
import ScrollArrow from "@/components/scrollButton";
import TermsHero from "@/components/Terms/hero";
import Terms from "@/components/Terms/terms";

const Page = () => {
  return (
    <>
      <header className="bg-[#fef7f2] pb-20 pt-3">
        <Header />
        <TermsHero />
      </header>
      <section>
        <section className="bg-[#ffffff] py-36">
          <Terms />
        </section>
      </section>
      <footer>
        <Footer />
        <ScrollArrow/>
      </footer>
    </>
  );
};

export default Page;

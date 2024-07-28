import Header from "@/components/header";
import AboutHero from "@/components/About/hero";
import Footer from "@/components/footer";
import ScrollArrow from "@/components/scrollButton";
import AboutVision from "@/components/About/vision";
import AboutApart from "@/components/About/apart";
import Contact from "@/components/LandingPage/contact";
import AboutServices from "@/components/About/services";
import AboutObjectives from "@/components/About/objectives";


const Page = () => {
    return (
        <>
      <header className="bg-[#FEF7F2] pb-20 pt-3">
        <Header />
        <AboutHero />
      </header>
      <section>
        <section className="py-24">
          <AboutVision/>
        </section>
        <section className="py-24">
          <AboutApart/>
        </section>
        <section className="py-24 bg-[#FEF7F2]">
          <AboutObjectives/>
        </section>
        <section className="py-24">
          <AboutServices/>
        </section>
        <section id="contact" className="my-[30px]">
          <Contact />
        </section>
     </section>
      <footer>
        <Footer/>
        <ScrollArrow/>
      </footer>
    </>
    );
}

export default Page;
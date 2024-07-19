import Header from "@/components/header";
import AboutHero from "@/components/About/hero";
import AllDepartments from "@/components/Departments/allDepartments";
import Footer from "@/components/footer";
import ScrollArrow from "@/components/scrollButton";



const Page = () => {
    return (
        <>
      <header className="bg-[#FEF7F2] pb-20 pt-3">
        <Header />
        <AboutHero />
      </header>
      <section>
        <section className="py-36">
          
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
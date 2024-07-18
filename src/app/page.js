import Footer from "@/components/footer";
import Header from "@/components/header";
import Contact  from "@/components/LandingPage/contact";
import Hero  from "@/components/LandingPage/hero";
import Stats from '@/components/LandingPage/statSection'
import DepartmentsLanding from '@/components/LandingPage/departments'
import Objectives from "@/components/LandingPage/objectives";
import ToolsForSale from "@/components/LandingPage/toolsForSale";




export default function Home() {
  return (
    <>
      <section className="bg-[#FEF7F2] pb-20 pt-3">
        <Header/>
        <Hero/>
      </section>
      <section className="my-[80px]">
        <Stats/>
      </section>
      <section className="my-[40px]">
        <DepartmentsLanding/>
      </section>
      <section className="my-[40px]">
        <Objectives/>
      </section>
      <section className="my-[40px]">
        <ToolsForSale/>
      </section>
      <section className="my-[30px]" id="contact">
        <Contact />
      </section>
      <section >
        <Footer />
      </section>
    </>
  );
}

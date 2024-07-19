"use client";

import Header from "@/components/header";
import ExtraHero from "@/components/departments/hero";
import AllDepartments from "@/components/departments/allDepartments";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <>
      <header className="bg-[#FEF7F2] pb-20 pt-3">
        <Header />
        <ExtraHero />
      </header>
      <section>
        <section className="py-36">
          <AllDepartments />
        </section>
     </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Page;

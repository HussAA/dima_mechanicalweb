"use client";

import Header from "@/components/header";
import ExtraHero from "@/components/Departments/hero";
import AllDepartments from "@/components/Departments/allDepartments";
import Footer from "@/components/footer";
import CNCdepartment from "@/components/Departments/cnc";
import Conventionaldepartment from "@/components/Departments/conventionalMachinery";
import Electricaldepartment from "@/components/Departments/electrical";
import WeldingDepartment from "@/components/Departments/welding";
import MoldDepartment from "@/components/Departments/moldAndDie";

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
        <section className="py-36">
          <CNCdepartment />
        </section>
        <section className="py-36">
          <Conventionaldepartment />
        </section>
        <section className="py-24 bg-[#d6cfc6]">
          <Electricaldepartment />
        </section>
        <section className="py-36">
          <MoldDepartment />
        </section>
     </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Page;

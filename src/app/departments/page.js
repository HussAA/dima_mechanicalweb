"use client";

import Header from "@/components/header";
import DepartmentHero from "@/components/Departments/hero";
import AllDepartments from "@/components/Departments/allDepartments";
import Footer from "@/components/footer";
import CNCdepartment from "@/components/Departments/cnc";
import Conventionaldepartment from "@/components/Departments/conventionalMachinery";
import Electricaldepartment from "@/components/Departments/electrical";
import WeldingDepartment from "@/components/Departments/welding";
import MoldDepartment from "@/components/Departments/moldAndDie";
import ScrollArrow from "@/components/scrollButton";
import SheetMetalDepartment from "@/components/Departments/sheetMetal";
import GearsDepartment from "@/components/Departments/gearBox";
import Contact from "@/components/LandingPage/contact";
const Page = () => {
  return (
    <>
      <header className="bg-[#FEF7F2] pb-20 pt-3">
        <Header />
        <DepartmentHero />
      </header>
      <section>
        <section className="pb-24 pt-32">
          <AllDepartments />
        </section>
        <section id="cnc" className="py-24">
          <CNCdepartment />
        </section>
        <section id="conventional" className="py-24">
          <Conventionaldepartment />
        </section>
        <section id="electrical" className="py-24 bg-[#d6cfc6]">
          <Electricaldepartment />
        </section>
        <section id="mold" className="py-24">
          <MoldDepartment />
        </section>
        <section id="sheet" className="py-24">
          <SheetMetalDepartment />
        </section>
        <section id="welding" className="py-24 bg-gradient-to-l from-[#f7ddb6] to-[#e9e3de]">
          <WeldingDepartment />
        </section>
        <section id="gears" className="py-24">
          <GearsDepartment />
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
};

export default Page;

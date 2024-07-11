import Footer from "@/components/footer";
import Header from "@/components/header";
import Contact  from "@/components/contact";

export default function Home() {
  return (
    <>
      <section>
        <Header/>
      </section>
      <section className="mb-[57px]">
        <Contact />
      </section>
      <section >
        <Footer />
      </section>
    </>
  );
}

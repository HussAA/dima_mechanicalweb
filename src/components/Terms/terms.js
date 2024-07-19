import { termsEng, termsArabic } from "@/data/terms";
import Link from "next/link";

const Terms = () => {
  return (
    <>
    <div className="w-11/12 md:w-10/12 xl:w-8/12 mx-auto">
        <Link href="#arabic" className="flex justify-end underline text-cyan-900">Arabic</Link>
      {termsEng.map((term, index) => (
        <div key={index}>
          <div className="md:text-2xl text:xl uppercase font-semibold text-slate-900">
            {`${index + 1}`}. {term.title}
            <div className="border-b my-4 mb-8"/>
          </div>
          <div className="md:text-lg text-sm mb-20 font-medium text-gray-900">{term.description}</div>
        </div>
      ))}
    </div>
    <div>
        <TermsArabic/>
    </div>
    </>
  );
};

export default Terms;


const TermsArabic = () => {
    return (
      <div id="arabic" className="w-11/12 md:w-10/12 xl:w-8/12 mx-auto pt-20" dir="rtl">

        {termsArabic.map((term, index) => (
          <div key={index}>
            <div className="md:text-2xl text:xl uppercase font-semibold text-slate-900">
              {`${index + 1}`}. {term.title}
              <div className="border-b my-4 mb-8"/>
            </div>
            <div className="md:text-lg text-sm mb-20 font-medium text-gray-900">{term.description}</div>
          </div>
        ))}
      </div>
    );
  };


import Image from "next/image";
const cards = [
  {
    id: 1,
    title: "Dial Indicator",
    label: "100 Riyal",
    description: "يمكن تحقيق قياسات دقيقة باستخدام هذه الأداة، التي تضمن محاذاة دقيقة ومعايرة في مهام التصنيع والميكانيكا.",
    imageSrc: "/dial.jpg",
  },
  {
    id: 2,
    title: "Drill Bit",
    label: "30 Riyal",
    description: "تعتبر هذه الأداة ضرورية لإنشاء ثقوب دقيقة في مواد مختلفة، وتستخدم عادة في عمليات الحفر لتطبيقات مختلفة.",
    imageSrc: "/image1.png",
  },
  {
    id: 3,
    title: "Side Milling Cutters",
    label: "80 Riyal",
    description: "تُستخدم هذه الأداة في قطع وتشكيل المواد، وهي فعالة في إنشاء فتحات وأخاديد في مجموعة من عمليات التصنيع.",
    imageSrc: "/chainrings.jpg",
  },
];

const ToolsForSale = () => {
  return (
    <section className="py-12 bg-[#FEF7F2]">
      <div className="mx-auto w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 ">
        <h2 className="text-[30px] md:text-[40px] mb-12 font-semibold text-center text-[#4F3527]">
          Machine Tools <br/>For Sales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-4 lg:gap-8 xl:gap-10 mx-auto ">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#DDC7BB] rounded-lg shadow-md shadow-gray-400 overflow-hidden md:w-auto sm:w-6/12 w-9/12 mx-auto"
            >
              <div className="w-full xl:h-48 h-36 relative shadow-md">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL="data:..." automatically provided
                  placeholder="blur" 
                />
              </div>
              <div className="p-4 pb-10">
                <div className="text-xl font-bold">{card.title}</div>
                <span className="text-sm text-[#2B1B12] mb-6 block font-medium">
                  {card.label}
                </span>
                <div dir="rtl" className="text-[#2B1B12] text-sm font-medium">{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsForSale;

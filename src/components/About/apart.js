import Image from "next/image";
import { IconCircleFilled } from '@tabler/icons-react';

const list = [
  "أسعارنا تنافسية ولا تقبل المنافسة.",
  "أكثر من 10 سنوات من الخبرة.",
  "تم تحديث أحدث مخرطة CNC وآلات الليزر وأفضل تجربة عمل.",
  "ضمان جودة التصنيع وسرعة التنفيذ.",
  "لقد تمكنا من تقديم العديد من الخدمات لأكبر عدد من العملاء.",
  "توفير خدمة الصيانة المجانية خلال فترة الضمان.",
];

const AboutApart = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center gap-10 mx-auto">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 justify-center order-2">
        {/* Gray background div */}
        <div className="hidden sm:block md:bottom-[10%] 2xl:bottom-[8%] 2xl:-left-[1%] md:right-[1%] md:w-[101%] h-[105%] sm:right-[15%] sm:bottom-[10%] sm:w-8/12 bg-[#e2ded6] absolute rounded-xl" />

        {/* Image */}
        <Image
          width={999}
          height={999}
          src="/apart.webp"
          alt="stat Image"
          className="rounded-xl md:w-full sm:w-8/12 w-11/12 mx-auto xl:max-h-[400px] md:max-h-[350px] md:h-auto h-[280px] object-cover sm:relative sm:-left-5 sm:-top-5"
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur"
        />
      </div>

      {/* Right Side */}
      <div className="sm:w-8/12 w-11/12 md:w-1/2">
        {/* Title */}
        <div className="text-[#4F3527] relative capitalize text-3xl md:text-4xl font-bold mb-5">
          What sets us apart?
          <div className="absolute top-[105%] left-0 w-1/4 border-b-4 border-[#fabf51]" />
        </div>
        {/* Description */}
        <p
          dir="rtl"
          className="text-[#4F3527] capitalize md:text-lg font-semibold mb-5 pt-10"
        >
          على المستوى المحلي، تمكنا من الحصول على قاعدة كبيرة من العملاء،
          وساهمنا في جمع تلك القاعدة مجموعة من المميزات التي جعلتنا نحظى بأولوية
          في العمل عن غيرنا، وفي مخرطة ديمة العروبة تميزنا بـ:
        </p>
        <div
          dir="rtl"
          className="font-medium text-[16px] mb-6 text-right text-[#4F3527]"
        >
          <ul className="list-disc list-inside">
            {list.length &&
              list.map((item, index) => (
                <li key={index} className="flex items-start mb-2">
                <IconCircleFilled className="ml-2 w-2" />
                <span>{item}</span>
              </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutApart;

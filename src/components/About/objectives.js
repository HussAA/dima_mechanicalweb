import Image from "next/image";
import { IconCircleFilled } from '@tabler/icons-react';
const list = [
  "العمل على توسيع دائرة المنتجات لتلبية احتياجات سوق العمل.",
  "استقطاب أكبر عدد من الكوادر المدربة وخاصة فريق الصيانة.",
  "التطوير الدائم لخدماتنا وأساليب عملنا.",
  "العمل على التوسع الجغرافي لمقراتنا في كافة مدن المملكة العربية السعودية.",
  "العمل علي أن يكون عملنا مميزا ومختلفا عن الآخرين.",
  "العمل على تصنيع كافة قطع الغيار بكافة أشكالها وأنواعها.",
];

const AboutObjectives = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center gap-10 mx-auto">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 justify-center">
        {/* Gray background div */}
        <div className="hidden sm:block md:-top-[35%] 2xl:bottom-[8%] 2xl:-left-[1%] md:right-[1%] md:w-[60%] h-[150%] sm:right-[15%] sm:-bottom-[18%] sm:w-5/12 bg-[#fdddd3] absolute rounded-xl" />

        {/* Image */}
        <Image
          width={999}
          height={999}
          src="/objective.webp"
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
        <div className="text-[#4F3527] capitalize text-3xl md:text-4xl font-bold mb-5">
          Objectives
        </div>
        {/* Description */}
        <p
          dir="rtl"
          className="text-[#4F3527] capitalize lg:text-lg font-semibold mb-5 pt-10"
        >
          في مؤسسة ديما العروبة للخراطة للصيانة، وضعنا مجموعة من الأهداف
          المختلفة التي تساهم في إثراء مسيرتنا بمزيد من النجاحات سواء على
          المستوى المحلي أو العالمي أيضاً، ومع أهدافنا ابتكرنا العديد من الحلول
          العملية التي دعمتنا في سوق العمل في مجال الخراطة والصيانة، أهدافنا هي:
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

export default AboutObjectives;

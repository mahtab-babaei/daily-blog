"use client";
import { Grid, Text } from "@radix-ui/themes";
import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = [
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید؟",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم؟",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    },
  ];
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Grid gap="5" className="w-full">
      {items.map((item, index) => (
        <Grid gap="3" className="bg-white rounded-xl p-6" key={index}>
          <button
            className="flex justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <Text className="text-dark" size="3" weight="bold">
              {item.title}
            </Text>
            <Text className="text-dark" size="3" weight="bold">
              {openIndex === index ? "-" : "+"}
            </Text>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <Text className="text-light">{item.content}</Text>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Accordion;

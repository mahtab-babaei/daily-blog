"use client";
import { Grid, Text } from "@radix-ui/themes";
import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = [
    {
      title: "چجوری میتونم در دیلی بلاگ ثبت نام کنم؟",
      content:
        "برای ثبت نام در دیلی بلاگ، کافی است به صفحه اصلی سایت مراجعه کرده و روی دکمه ثبت نام کلیک کنید. سپس اطلاعات لازم شامل نام کاربری، ایمیل و رمز عبور خود را وارد کرده و شرایط و قوانین را بپذیرید.",
    },
    {
      title: "قوانین و شرایط پست گذاشتن در دیلی بلاگ چیه؟",
      content:
        "برای ارسال پست در دیلی بلاگ، کاربران باید به موارد زیر توجه کنند: محتوای پست باید اصل و متعلق به خود نویسنده باشد. انتشار محتوای توهین‌آمیز، نژادپرستانه یا غیرقانونی مجاز نیست. همچنین از درج محتوای حاوی تبلیغات یا اسپم خودداری کنید. لطفاً قبل از ارسال پست، قوانین کامل را مطالعه کرده و به آن‌ها احترام بگذارید.",
    },
    {
      title: "آیا تعداد پست‌های روزانه ی کاربران در دیلی بلاگ دارای محدودیته؟",
      content:
        "بله، در دیلی بلاگ هر کاربر می‌تواند حداکثر ۳ پست در روز منتشر کند. این محدودیت به منظور حفظ کیفیت محتوا و جلوگیری از شلوغی سایت اعمال شده است. در صورت نیاز به انتشار پست‌های بیشتر، می‌توانید با تیم پشتیبانی دیلی بلاگ تماس بگیرید و درخواست خود را مطرح کنید.",
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

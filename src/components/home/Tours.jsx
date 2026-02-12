import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../../assets/icons/arrow-left-white.svg";
import Call from "../../assets/icons/call.svg";
import Left from "../../assets/icons/left.svg";
import Location from "../../assets/icons/location.svg";
import Smstracking from "../../assets/icons/sms-tracking.svg";
import LeftArrowBlack from "../../assets/icons/arrow-left.svg";
import CalendarIcon from "../../assets/icons/calendar-2.svg";
import Shiraz1 from "../../assets/images/shiraz1.png";
import Shiraz2 from "../../assets/images/shiraz2.png";
import Shiraz3 from "../../assets/images/shiraz3.png";
import Shiraz4 from "../../assets/images/shiraz4.png";
import AboutUs from "../../assets/icons/about-us.svg";
import Sky from "../../assets/images/sky.png";
import Building from "../../assets/images/building.png";
import Beach from "../../assets/images/beach.png";
import Island from "../../assets/images/island.png";
import Palace from "../../assets/images/palace.png";
import LightLogo from "../../assets/images/one-light-logo.png";
import OnePlane from "../../assets/images/oneplane.png";
import BlackPlane from "../../assets/images/blackplane.png";
import Logo from "../../assets/icons/logo.svg";
import Curve from "../../assets/icons/curve.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// 

export default function Tours() {
  const toursList = [
    {
      id: 1,
      name: "تور شیراز",
      time: "15 تا 20 خرداد",
      price: "۹,۸۲۰,۰۰۰",
      img: Shiraz1,
    },
    {
      id: 2,
      name: "تور شیراز",
      time: "15 تا 20 خرداد",
      price: "۹,۸۲۰,۰۰۰",
      img: Shiraz2,
    },
    {
      id: 3,
      name: "تور شیراز",
      time: "15 تا 20 خرداد",
      price: "۹,۸۲۰,۰۰۰",
      img: Shiraz3,
    },
    {
      id: 4,
      name: "تور شیراز",
      time: "15 تا 20 خرداد",
      price: "۹,۸۲۰,۰۰۰",
      img: Shiraz4,
    },
  ];

  const accList = [
    {
      value: "item1",
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
    },
    {
      value: "item2",
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
    },
    {
      value: "item3",
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
    },
    {
      value: "item4",
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
    },
    {
      value: "item5",
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.",
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex gap-6 mb-7">
        <div className="flex gap-2 min-h-[50px] items-center">
          <div className="h-full w-1.5 rounded-tl-md rounded-bl-md bg-black"></div>
          <h2 className="text-black text-[24px] font-extrabold whitespace-nowrap">
            جدیدترین تورها
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <div className="min-w-2 min-h-2 bg-black rounded-full"></div>
          <div className="text-xs whitespace-pre-wrap">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </div>
        </div>
        <Link
          to="/"
          className="flex min-w-[184px] justify-center items-center text-sm bg-black gap-1 rounded-[14px] h-10"
        >
          مشاهده بیشتر
          <img src={LeftArrow} className="relative top-0.5" />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6 relative">
        {toursList?.map((tour, index) => (
          <div
            key={tour.id}
            className="h-[333px] rounded-[26px] relative overflow-hidden"
          >
            <img
              src={tour.img}
              className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-0"
            />
            <div className="relative h-full flex justify-between flex-col">
              <span className="flex relative max-w-max top-[11px] right-[14px] h-6 rounded-[15px] items-center bg-[#c7c7c7] gap-1.5 px-[5.5px]">
                <img src={CalendarIcon} />
                <span className="text-black text-[10px] whitespace-nowrap">
                  {tour.time}
                </span>
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-[95px] w-full overflow-hidden">
                <div className="flex justify-between gap-[7px]">
                  <div className="h-[46px] rounded-tl-[26px] bg-[rgba(0,0,0,0.8)] flex-1 pr-[14px] text-sm text-white flex items-center relative">
                    {tour.name}
                    <div className="absolute bg-[rgba(234,236,236,0.2)] bottom-0 w-[calc(100%-14px)] rounded-full h-[1px]"></div>
                    <img src={Curve} className="absolute -left-5 top-[26px]" />
                  </div>
                  
                  <div className="h-[39px] bg-[rgba(0,0,0,0.8)] rounded-tr-[26px] rounded-br-[26px] flex-1">
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-white relative top-1 left-5">
                        تومان
                      </span>
                      <div className="text-balance text-center text-[#C7C7C7]">
                        {tour.price}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[50px] bg-[rgba(0,0,0,0.8)] px-[14px] flex justify-between items-center">
                  <div className="w-1/2 line-clamp-2 text-[#C7C7C7] text-[10px]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
                    متن ساختگی با تولید سادگی نامفهوم
                  </div>
                  <Link to="/" className="flex items-center h-full gap-1">
                    <span className="text-xs">مشاهده</span>
                    <img src={LeftArrow} className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-us my-20">
        <div className="flex gap-2 min-h-[50px] items-center mb-4">
          <div className="h-[50px] w-1.5 rounded-tl-md rounded-bl-md bg-black"></div>
          <h2 className="text-black text-[24px] font-extrabold whitespace-nowrap">
            درباره ما
          </h2>
        </div>
        <div className="flex justify-between gap-8">
          <div className="w-[48%]">
            <div className="text-sm text-black font-bold mb-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </div>
            <div className="text-xs text-black text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </div>
            <div className="text-sm text-black font-bold mb-2 mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </div>
            <div className="text-xs text-black text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </div>
          </div>
          <div className="w-[52%]">
            <img src={AboutUs} className="w-full" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 mb-[29px]">
        <div className="flex gap-2 min-h-[50px] items-center">
          <div className="h-full w-1.5 rounded-tl-md rounded-bl-md bg-black"></div>
          <h2 className="text-black text-[24px] font-extrabold whitespace-nowrap">
            مقالات
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <div className="min-w-2 min-h-2 bg-black rounded-full"></div>
          <div className="text-xs whitespace-pre-wrap">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </div>
        </div>
        <Link
          to="/"
          className="flex min-w-[184px] justify-center items-center text-sm bg-black gap-1 rounded-[14px] h-10"
        >
          مشاهده بیشتر
          <img src={LeftArrow} className="relative top-0.5" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="h-[480px] rounded-[24px] p-4 bg-[#F5F5F5]">
          <img className="h-[298px] rounded-[18px] mb-4" src={Palace} />
          <div className="text-sm font-bold text-black mb-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </div>
          <span className="text-sm text-black font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها{" "}
          </span>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-[#727272]">24 خرداد 1403</span>
            <Link
              to="/"
              className="flex min-w-[133px] justify-center items-center text-sm hover:text-black bg-white text-black gap-1 rounded-[14px] h-10"
            >
              مشاهده بیشتر
              <img src={LeftArrowBlack} className="relative top-0.5" />
            </Link>
          </div>
        </div>
        <div className="h-[480px] rounded-[24px] p-4 bg-[#F5F5F5]">
          <img className="h-[298px] rounded-[18px] mb-4" src={Sky} />
          <div className="text-sm font-bold text-black mb-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </div>
          <span className="text-sm text-black font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها{" "}
          </span>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-[#727272]">24 خرداد 1403</span>
            <Link
              to="/"
              className="flex min-w-[133px] justify-center items-center text-sm hover:text-black bg-white text-black gap-1 rounded-[14px] h-10"
            >
              مشاهده بیشتر
              <img src={LeftArrowBlack} className="relative top-0.5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between h-full">
          <div className="p-[14px] max-h-[152px] rounded-[14px] bg-[#f5f5f5] flex justify-between gap-[14px]">
            <img className="w-[124px] h-[124px] rounded-lg" src={Island} />
            <div className="h-full flex flex-col justify-between">
              <div className="">
                <div className="text-xs font-bold max-w-full leading-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </div>
                <div className="text-xs line-clamp-2 mt-1 max-w-full text-justify leading-5">
                  لورم نامفهوم از صنعت چاپ لورم
                </div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-[#727272]">24 خرداد 1403</span>
                <Link
                  to="/"
                  className="flex min-w-[133px] justify-center items-center text-xs hover:text-black bg-white text-black gap-1 rounded-[14px] h-8"
                >
                  مشاهده بیشتر
                  <img src={LeftArrowBlack} className="relative top-0.5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-[14px] max-h-[152px] rounded-[14px] bg-[#f5f5f5] flex justify-between gap-[14px]">
            <img className="w-[124px] h-[124px] rounded-lg" src={Building} />
            <div className="h-full flex flex-col justify-between">
              <div className="">
                <div className="text-xs font-bold max-w-full leading-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </div>
                <div className="text-xs line-clamp-2 mt-1 max-w-full text-justify leading-5">
                  لورم ایپسوم متن ساختگی
                </div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-[#727272]">24 خرداد 1403</span>
                <Link
                  to="/"
                  className="flex min-w-[133px] justify-center items-center text-xs hover:text-black bg-white text-black gap-1 rounded-[14px] h-8"
                >
                  مشاهده بیشتر
                  <img src={LeftArrowBlack} className="relative top-0.5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-[14px] max-h-[152px] rounded-[14px] bg-[#f5f5f5] flex justify-between gap-[14px]">
            <img className="w-[124px] h-[124px] rounded-lg" src={Beach} />
            <div className="h-full flex flex-col justify-between">
              <div className="">
                <div className="text-xs font-bold max-w-full leading-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </div>
                <div className="text-xs line-clamp-2 mt-1 max-w-full text-justify leading-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-[#727272]">24 خرداد 1403</span>
                <Link
                  to="/"
                  className="flex min-w-[133px] justify-center items-center text-xs hover:text-black bg-white text-black gap-1 rounded-[14px] h-8"
                >
                  مشاهده بیشتر
                  <img src={LeftArrowBlack} className="relative top-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 my-20">
        <div className="w-[34%] relative">
          <img
            src={OnePlane}
            className="w-full max-h-[463px] object-cover z-0"
          />
          <img
            src={LightLogo}
            className="object-cover absolute left-6 top-6 z-10"
          />
        </div>
        <div className="w-[66%]">
          <div className="flex gap-6 mb-[29px]">
            <div className="flex gap-2 min-h-[50px] items-center">
              <div className="h-full w-1.5 rounded-tl-md rounded-bl-md bg-black"></div>
              <h2 className="text-black text-[24px] font-extrabold whitespace-nowrap">
                پرسش‌های متداول
              </h2>
            </div>
            <div className="flex gap-2 items-center">
              <div className="min-w-2 min-h-2 bg-black rounded-full"></div>
              <div className="text-xs whitespace-pre-wrap">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              </div>
            </div>
            <Link
              to="/"
              className="flex min-w-[184px] justify-center items-center text-sm bg-black gap-1 rounded-[14px] h-10"
            >
              مشاهده بیشتر
              <img src={LeftArrow} className="relative top-0.5" />
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full mb-2.5">
            {accList?.map((acc, index) => (
              <AccordionItem
                key={acc.value}
                value={acc.value}
                className="pl-5 group transition-all mb-2.5 pr-4 hover:no-underline bg-[#f5f5f5] rounded-[14px]
              data-[state=open]:bg-[#141414] border-none
              data-[state=open]:text-white"
              >
                <AccordionTrigger
                  className="hover:no-underline h-[50px] rounded-[14px]
                    data-[state=open]:!rounded-b-none
                    data-[state=open]:border-b data-[state=open]:border-[#373737]
                    data-[state=open]:pb-3 [&>svg]:hidden"
                >
                  <span>{acc.title}</span>
                  <div className="shrink-0">
                    <span className="group-data-[state=open]:hidden relative bottom-0.5 text-xl">
                      +
                    </span>
                    <span className="hidden group-data-[state=open]:block relative bottom-1">
                      __
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-[23px]">
                  {acc.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-[34%]">
          <div className="flex flex-col gap-3 mb-[29px]">
            <div className="flex gap-2 min-h-[50px] items-center">
              <div className="h-[50px] w-1.5 rounded-tl-md rounded-bl-md bg-black"></div>
              <h2 className="text-black text-[24px] font-extrabold whitespace-nowrap">
                تماس با ما
              </h2>
            </div>
            <div className="flex gap-2 items-center">
              <div className="min-w-2 min-h-2 bg-black rounded-full"></div>
              <div className="text-xs whitespace-pre-wrap leading-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <div className="flex gap-2.5 w-full items-center">
              <div className="w-[52px] h-[53px] rounded-2xl bg-black flex items-center justify-center">
                <img src={Location} />
              </div>
              <span className="text-sm text-black">تهران ، جهان کودک</span>
            </div>
            <div className="flex gap-2.5 w-full items-center">
              <div className="w-[52px] h-[53px] rounded-2xl bg-black flex items-center justify-center">
                <img src={Smstracking} />
              </div>
              <Link to="mailto:me@gmail.com" className="text-sm hover:text-black font-normal text-black">me@gmail.com</Link>
            </div>
            <div className="flex gap-2.5 w-full items-center">
              <div className="w-[52px] h-[53px] rounded-2xl bg-black flex items-center justify-center">
                <img src={Call} />
              </div>
              <Link to="tel:02112345698" className="text-sm hover:text-black font-normal text-black">021-12345698</Link>
            </div>
          </div>
        </div>
        <div className="w-[66%]">
          <ContactForm />
        </div>
      </div>
      <div className="mt-20 mb-10 rounded-3xl overflow-hidden h-[340px] flex justify-between">
        <div className="airplane-box h-full flex-1 pr-[15px] flex justify-center flex-col">
          <div className="text-[20px] pr-[60px] font-bold text-black mb-4">
            لورم ایپسوم متن ساختگی با تولید سادگی
          </div>
          <Link
            to={"/"}
            className="flex max-w-fit items-center pr-[60px] gap-2 text-[#424242] hover:text-[#424242] text-[20px]"
          >
            مشاهده لینک دانلود
            <img src={Left} className="relative top-1" />
          </Link>
          <div className="flex gap-[34px] pr-[45px] mt-6">
            <div className="flex flex-col gap-[18px]">
              <Link
                to="/"
                className="flex justify-between px-[14px] items-center w-[192px] h-10 bg-black rounded-[10px] gap-2 text-white"
              >
                <span>دانلود نسخه اندروید</span>
                <img className="" src={LeftArrow} />
              </Link>
              <Link
                to="/"
                className="flex justify-between px-[14px] items-center w-[192px] h-10 bg-black rounded-[10px] gap-2 text-white"
              >
                <span>دانلود نسخه ویندوز</span>
                <img className="" src={LeftArrow} />
              </Link>
            </div>
            <div className="flex flex-col gap-[18px]">
              <Link
                to="/"
                className="flex justify-between px-[14px] items-center w-[192px] h-10 bg-black rounded-[10px] gap-2 text-white"
              >
                <span>دانلود نسخه IOS</span>
                <img className="" src={LeftArrow} />
              </Link>
              <Link
                to="/"
                className="flex justify-between px-[14px] items-center w-[192px] h-10 bg-black rounded-[10px] gap-2 text-white"
              >
                <span>وب اپلیکیشن</span>
                <img className="" src={LeftArrow} />
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <img src={BlackPlane} />
        </div>
      </div>
      <div className="flex items-center flex-col mb-12">
        <img src={Logo} className="w-[119px] mb-5 h-[89px]" />
        <span className="max-w-[500px] text-sm text-black mb-10">
          متن "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم..." یک متن ساختگی
          است که معمولاً در طراحی صفحات وب و متون چاپی به عنوان جایگزین موقت .
        </span>
        <NewsletterSubscription />
      </div>
      <div className="flex justify-center gap-[60px] items-center text-base pb-2.5 mb-4 border-b border-[#DCDCDC]">
        <Link className="text-[#424242] hover:text-[#424242]" to="/">
          جستجو بلیط
        </Link>
        <Link className="text-[#424242] hover:text-[#424242]" to="/">
          درباره ما
        </Link>
        <Link className="text-[#424242] hover:text-[#424242]" to="/">
          پرسش‌های متداول
        </Link>
        <Link className="text-[#424242] hover:text-[#424242]" to="/">
          تماس با ما
        </Link>
      </div>
      <div className="flex justify-between items-center text-xs text-black mb-20">
        <span>کلیه حقوق محفوظ و متعلق به دات وان می‌باشد.</span>
        <Link className="text-[#000] !text-xs hover:text-[#000]" to="/">
          قوانین و مقررات
        </Link>
      </div>
    </div>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // پاک کردن خطا هنگام تایپ
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // نام
    if (!formData.firstName.trim()) {
      newErrors.firstName = "نام الزامی است";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "نام باید حداقل 2 کاراکتر باشد";
    }

    // نام خانوادگی
    if (!formData.lastName.trim()) {
      newErrors.lastName = "نام خانوادگی الزامی است";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "نام خانوادگی باید حداقل 2 کاراکتر باشد";
    }

    // ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "ایمیل الزامی است";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "فرمت ایمیل صحیح نیست";
    }

    // شماره تماس
    const phoneRegex = /^09\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "شماره تماس الزامی است";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "شماره تماس باید 11 رقم و با 09 شروع شود";
    }

    // توضیحات
    if (!formData.description.trim()) {
      newErrors.description = "توضیحات الزامی است";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "توضیحات باید حداقل 10 کاراکتر باشد";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // شبیه‌سازی ارسال
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("✅ فرم با موفقیت ارسال شد:", formData);

      setIsSubmitting(false);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      });

      alert("فرم با موفقیت ارسال شد! (لاگ کنسول را بررسی کنید)");
    }, 1500);
  };

  return (
    <div className="min-h-[388px] bg-[#f5f5f5] flex items-center rounded-3xl justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-[#f5f5f5] rounded-3xl"
      >
        {/* ردیف اول - نام و نام خانوادگی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* نام */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-sm text-black mb-1.5"
              style={{ fontSize: "14px" }}
            >
              نام:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="وارد کنید..."
              className={`h-10 px-4 bg-white rounded-lg outline-none transition-all
                ${errors.firstName ? "border-2 border-red-500" : "border border-white focus:border-blue-400"}`}
              style={{
                height: "40px",
                fontSize: "14px",
                "::placeholder": {
                  color: "#cfcfcf",
                  fontSize: "14px",
                },
              }}
            />
            {/* {errors.firstName && (
              <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>
            )} */}
          </div>

          {/* نام خانوادگی */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-sm text-black mb-1.5"
              style={{ fontSize: "14px" }}
            >
              نام خانوادگی:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="وارد کنید..."
              className={`h-10 px-4 bg-white rounded-lg outline-none transition-all
                ${errors.lastName ? "border-2 border-red-500" : "border border-white focus:border-blue-400"}`}
              style={{
                height: "40px",
                fontSize: "14px",
              }}
            />
            {/* {errors.lastName && (
              <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>
            )} */}
          </div>
        </div>

        {/* ردیف دوم - ایمیل و شماره تماس */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* ایمیل */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm text-black mb-1.5"
              style={{ fontSize: "14px" }}
            >
              ایمیل:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="وارد کنید..."
              className={`h-10 px-4 bg-white rounded-lg outline-none transition-all
                ${errors.email ? "border-2 border-red-500" : "border border-white focus:border-blue-400"}`}
              style={{
                height: "40px",
                fontSize: "14px",
              }}
            />
            {/* {errors.email && (
              <span className="text-red-500 text-xs mt-1">{errors.email}</span>
            )} */}
          </div>

          {/* شماره تماس */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-sm text-black mb-1.5"
              style={{ fontSize: "14px" }}
            >
              شماره تماس:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="وارد کنید..."
              className={`h-10 px-4 bg-white rounded-lg outline-none transition-all
                ${errors.phone ? "border-2 border-red-500" : "border border-white focus:border-blue-400"}`}
              style={{
                height: "40px",
                fontSize: "14px",
              }}
            />
            {/* {errors.phone && (
              <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
            )} */}
          </div>
        </div>

        {/* توضیحات */}
        <div className="flex flex-col mb-6">
          <label
            htmlFor="description"
            className="text-sm text-black mb-1.5"
            style={{ fontSize: "14px" }}
          >
            توضیحات:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="وارد کنید..."
            className={`px-4 py-3 bg-white rounded-lg outline-none resize-none transition-all
              ${errors.description ? "border-2 border-red-500" : "border border-white focus:border-blue-400"}`}
            style={{
              height: "76px",
              fontSize: "14px",
            }}
          />
          {/* {errors.description && (
            <span className="text-red-500 text-xs mt-1">{errors.description}</span>
          )} */}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-[119px] h-10 text-center text-sm rounded-[14px] bg-black text-white font-medium transition-all
            ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800 active:scale-95"}`}
          >
            {isSubmitting ? "در حال ارسال..." : "ارسال"}
          </button>
        </div>
      </form>

      {/* <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #cfcfcf;
          font-size: 14px;
        }
      `}</style> */}
    </div>
  );
};

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // پاک کردن خطا هنگام تایپ
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // اعتبارسنجی
    if (!email.trim()) {
      setError("ایمیل الزامی است");
      return;
    }

    if (!validateEmail(email)) {
      setError("فرمت ایمیل صحیح نیست");
      return;
    }

    // شبیه‌سازی ارسال
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("✅ عضویت موفق:", email);
      alert("عضویت شما با موفقیت ثبت شد!");
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white flex items-center justify-center py-6">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        {/* Container اصلی */}
        <div className="relative">
          {/* اینپوت */}
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="johndoe@gmail.com"
            className={`w-full h-10 pl-4 bg-[#f5f5f5] rounded-[10px] text-left outline-none transition-all
              ${error ? "pr-[145px] border-2 border-red-500" : "pr-[145px] border-2 border-transparent"}`}
            style={{
              width: "483px",
              height: "40px",
              fontSize: "14px",
            }}
          />

          {/* دکمه عضویت */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`absolute right-1 text-center top-1/2 -translate-y-1/2 bg-black text-white rounded-[10px] 
              transition-all hover:bg-gray-800 active:scale-95
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            style={{
              width: "133px",
              height: "32px",
              fontSize: "14px",
            }}
          >
            {isSubmitting ? "در حال ارسال..." : "عضویت در خبرنامه"}
          </button>
        </div>

        {/* نمایش خطا */}
        {/* {error && (
          <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
            <svg 
              className="w-3 h-3" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>{error}</span>
          </p>
        )} */}
      </form>

      {/* <style jsx>{`
        input::placeholder {
          color: #cfcfcf;
          font-size: 14px;
        }
      `}</style> */}
    </div>
  );
};


// export default SearchBar;

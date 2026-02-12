import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// ── ایمپورت از date-fns-jalali (نه date-fns) ──────────────────────────────
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isAfter,
  isBefore,
  isToday,
} from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

// ── آیکون‌ها ──────────────────────────────────────────────────────────────
import SearchIcon from "../../assets/icons/search-normal.svg";
import SwitchIcon from "../../assets/icons/switch.svg";
import LocationIcon from "../../assets/icons/locationBlack.svg";
import CalendarIcon from "../../assets/icons/calendar-2.svg";
import AirplaneIcon from "../../assets/icons/airplane2.svg";
import RoundedIcon from "../../assets/icons/rounded.svg";
import TourIcon from "../../assets/icons/bank.svg";
import BuildingIcon from "../../assets/icons/building.svg";
import Airplane2Icon from "../../assets/icons/airplane.svg";
import TrainIcon from "../../assets/icons/bus.svg";
import BusIcon from "../../assets/icons/solar_bus.svg";

// ═══════════════════════════════════════════════════════════════════════════
//  تقویم شمسی کاملاً سفارشی
// ═══════════════════════════════════════════════════════════════════════════
const JalaliCalendar = ({ selected, onSelect, minDate, disabled }) => {
  const [currentMonth, setCurrentMonth] = useState(selected || new Date());

  // نام روزهای هفته به فارسی (شنبه تا جمعه)
  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  // ساخت روزهای ماه جاری + روزهای پُرکننده
  const buildCalendarDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    // startOfWeek با locale فارسی شنبه را اول هفته می‌گیرد
    const calStart = startOfWeek(monthStart, { locale: faIR });
    const calEnd = endOfWeek(monthEnd, { locale: faIR });

    return eachDayOfInterval({ start: calStart, end: calEnd });
  };

  const days = buildCalendarDays();

  const isDisabled = (date) => {
    if (disabled) return disabled(date);
    if (minDate && isBefore(date, minDate) && !isSameDay(date, minDate))
      return true;
    return false;
  };

  const handleSelect = (date) => {
    if (!isDisabled(date)) onSelect(date);
  };

  // عنوان تقویم: ماه + سال شمسی
  const caption = format(currentMonth, "MMMM yyyy", { locale: faIR });

  return (
    <div
      className="p-3 bg-white rounded-xl select-none"
      dir="rtl"
      style={{ minWidth: 280 }}
    >
      {/* ── هدر ماه ── */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setCurrentMonth((prev) => subMonths(prev, 1))}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>

        <span className="text-sm font-semibold text-gray-800">{caption}</span>

        <button
          onClick={() => setCurrentMonth((prev) => addMonths(prev, 1))}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* ── نام روزها ── */}
      <div className="grid grid-cols-7 mb-1">
        {weekDays.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-gray-400 py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* ── روزها ── */}
      <div className="grid grid-cols-7 gap-y-1">
        {days.map((date, idx) => {
          const isCurrentMonth = isSameMonth(date, currentMonth);
          const isSelected = selected && isSameDay(date, selected);
          const isDisabledDay = isDisabled(date);
          const isTodayDate = isToday(date);

          return (
            <button
              key={idx}
              onClick={() => handleSelect(date)}
              disabled={isDisabledDay}
              className={`
                h-8 w-8 mx-auto flex items-center justify-center rounded-full text-xs transition-all
                ${!isCurrentMonth ? "opacity-30 cursor-default" : ""}
                ${isDisabledDay ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
                ${isSelected ? "bg-black text-white hover:bg-gray-800 font-bold" : ""}
                ${isTodayDate && !isSelected ? "border border-black font-semibold" : ""}
                ${!isSelected && !isDisabledDay && isCurrentMonth ? "text-gray-800" : ""}
              `}
            >
              {/* فرمت روز به عدد فارسی */}
              {format(date, "d", { locale: faIR })}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
//  کامپوننت اصلی SearchBar
// ═══════════════════════════════════════════════════════════════════════════
const SearchBar = () => {
  const [travelMode, setTravelMode] = useState("flight");
  const [tripType, setTripType] = useState("oneway");
  const [flightType, setFlightType] = useState("domestic");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const [openOrigin, setOpenOrigin] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);
  const [openPassengers, setOpenPassengers] = useState(false);
  const [openDeparture, setOpenDeparture] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);

  // ── لیست شهرها ──────────────────────────────────────────────────────────
  const cities = [
    { value: "tehran", label: "تهران", code: "THR" },
    { value: "mashhad", label: "مشهد", code: "MHD" },
    { value: "isfahan", label: "اصفهان", code: "IFN" },
    { value: "shiraz", label: "شیراز", code: "SYZ" },
    { value: "tabriz", label: "تبریز", code: "TBZ" },
    { value: "ahvaz", label: "اهواز", code: "AWZ" },
    { value: "dubai", label: "دبی", code: "DXB" },
    { value: "istanbul", label: "استانبول", code: "IST" },
  ];

  // ── تب‌های حمل‌ونقل ───────────────────────────────────────────────────────
  const travelModes = [
    { id: "flight", label: "پرواز", icon: Airplane2Icon },
    { id: "hotel", label: "هتل", icon: BuildingIcon },
    { id: "train", label: "قطار", icon: TrainIcon },
    { id: "bus", label: "اتوبوس", icon: BusIcon },
    { id: "tour", label: "تور", icon: TourIcon },
  ];

  // ── توابع ────────────────────────────────────────────────────────────────
  const handleSwitch = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOrigin(destination);
    setDestination(origin);
  };

  const handleTripType = (type) => {
    setTripType(type);
    if (type === "oneway") setReturnDate(null);
  };

  const updatePassengers = (type, op) => {
    setPassengers((prev) => ({
      ...prev,
      [type]:
        op === "increase"
          ? prev[type] + 1
          : Math.max(type === "adults" ? 0 : 0, prev[type] - 1),
    }));
  };

  const totalPassengers =
    passengers.adults + passengers.children + passengers.infants;

  // ── فرمت تاریخ برای نمایش ────────────────────────────────────────────────
  const formatDate = (date) =>
    date ? format(date, "d MMMM yyyy", { locale: faIR }) : null;

  // ── استایل‌های مشترک ───────────────────────────────────────────────────────
  const inputBase =
    "flex-1 h-[40px] bg-white rounded-[12px] px-3 flex items-center justify-between hover:shadow-md transition-shadow";

  return (
    <div className="w-full rounded-[40px] top-search relative" dir="rtl">
      <div className="absolute bottom-[-51px] right-20 w-[calc(100%-160px)]">
        {/* ── ردیف بالا: تب‌ها + سوییچ‌ها ── */}
        <div className="flex justify-between mb-2.5 items-end">
          {/* تب‌های نوع سفر */}
          <div className="tab-box flex justify-between items-center px-[52px] gap-2 h-[61px] w-[434px] rounded-[20px] bg-[#f5f5f5]">
            {travelModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => mode.id == "flight" && setTravelMode(mode.id)}
                className={`flex items-center px-4 relative py-2 rounded-xl flex-col ${mode.id !== "flight" ? "cursor-not-allowed" : ""}`}
              >
                <img src={mode.icon} className="w-6 h-6" alt={mode.label} />
                <span
                  className={`text-xs ${travelMode === mode.id ? "font-bold" : "font-normal"}`}
                >
                  {mode.label}
                </span>
                {travelMode === mode.id && (
                  <div className="w-4 h-1 rounded-full bg-black absolute bottom-0 left-[calc(50%-8px)]" />
                )}
              </button>
            ))}
          </div>

          {/* سوییچ داخلی/خارجی + رفت/رفت‌وبرگشت */}
          <div className="rounded-t-[24px] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-white rounded-[14px] p-1 h-10">
              {["domestic", "international"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFlightType(t)}
                  className={`py-2 rounded-[14px] text-center text-xs min-w-[92px] font-medium transition-all ${
                    flightType === t
                      ? "bg-[#0C0C0C] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {t === "domestic" ? "داخلی" : "خارجی"}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-white rounded-[14px] p-1 h-10">
              <button
                onClick={() => handleTripType("oneway")}
                className={`min-w-[116px] flex justify-center items-center gap-1 py-2 rounded-[14px] text-xs font-medium transition-all ${
                  tripType === "oneway"
                    ? "bg-[#0C0C0C] text-white"
                    : "bg-white text-black"
                }`}
              >
                <img
                  src={AirplaneIcon}
                  className="relative top-0.5"
                  style={tripType !== "oneway" ? { filter: "invert(1)" } : {}}
                />
                <span>رفت</span>
              </button>
              <button
                onClick={() => handleTripType("roundtrip")}
                className={`min-w-[116px] flex justify-center items-center gap-1 h-full rounded-[14px] text-xs font-medium transition-all ${
                  tripType === "roundtrip"
                    ? "bg-[#0C0C0C] text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="flex relative">
                  <img
                    src={AirplaneIcon}
                    className="absolute top-1 -right-2"
                    style={
                      tripType !== "roundtrip" ? { filter: "invert(1)" } : {}
                    }
                  />
                  <img
                    src={RoundedIcon}
                    className="relative top-0.5"
                    style={
                      tripType !== "roundtrip"
                        ? { filter: "invert(0) brightness(0)" }
                        : {}
                    }
                  />
                </div>
                رفت و برگشت
              </button>
            </div>
          </div>
        </div>

        {/* ── باکس اصلی جستجو ── */}
        <div className="bg-[#F5F5F5] h-[120px] rounded-[30px] p-4 flex items-center">
          <div className="flex items-center gap-2 w-full relative">
            {/* ── تاریخ رفت ── */}
            <Popover open={openDeparture} onOpenChange={setOpenDeparture}>
              <PopoverTrigger asChild>
                <button className={inputBase}>
                  <div className="flex items-center gap-3">
                    <img src={CalendarIcon} className="w-5 h-5" />
                    <span
                      className="text-xs"
                      style={{ color: departureDate ? "#000" : "#999999" }}
                    >
                      {formatDate(departureDate) || "تاریخ رفت"}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-black" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 bg-white shadow-lg border border-gray-100 rounded-xl"
                align="start"
              >
                <JalaliCalendar
                  selected={departureDate}
                  onSelect={(date) => {
                    setDepartureDate(date);
                    setOpenDeparture(false);
                  }}
                  minDate={new Date()}
                />
              </PopoverContent>
            </Popover>

            {/* ── تاریخ برگشت ── */}
            {tripType === "roundtrip" && (
              <Popover
                open={openReturn}
                onOpenChange={(v) => {
                  if (departureDate) setOpenReturn(v);
                }}
              >
                <PopoverTrigger asChild>
                  <button
                    className={`${inputBase} ${!departureDate ? "cursor-not-allowed opacity-70" : ""}`}
                    disabled={!departureDate}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={CalendarIcon}
                        className="w-5 h-5"
                        style={
                          !departureDate
                            ? { filter: "grayscale(1) opacity(0.5)" }
                            : {}
                        }
                      />
                      <span
                        className="text-xs"
                        style={{
                          color: !departureDate
                            ? "#949698"
                            : returnDate
                              ? "#000"
                              : "#999999",
                        }}
                      >
                        {formatDate(returnDate) || "تاریخ برگشت"}
                      </span>
                    </div>
                    <ChevronDown
                      className="w-5 h-5"
                      style={{ color: !departureDate ? "#949698" : "#000" }}
                    />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 bg-white shadow-lg border border-gray-100 rounded-xl"
                  align="start"
                >
                  <JalaliCalendar
                    selected={returnDate}
                    onSelect={(date) => {
                      setReturnDate(date);
                      setOpenReturn(false);
                    }}
                    minDate={departureDate}
                  />
                </PopoverContent>
              </Popover>
            )}

            {/* ── مبدا ── */}
            <Popover open={openOrigin} onOpenChange={setOpenOrigin}>
              <PopoverTrigger asChild>
                <button className={inputBase}>
                  <div className="flex items-center gap-3">
                    <img src={LocationIcon} className="w-5 h-5" />
                    <span
                      className="text-xs"
                      style={{ color: origin ? "#000" : "#999999" }}
                    >
                      {origin || "مبدا"}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-black" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[280px] p-0 bg-white shadow-lg border border-gray-100 rounded-xl"
                align="start"
              >
                <Command className="bg-white">
                  <CommandInput
                    placeholder="جستجوی شهر..."
                    className="h-[40px] pr-1 text-right"
                  />
                  <CommandList>
                    <CommandEmpty>شهری یافت نشد</CommandEmpty>
                    <CommandGroup className="max-h-[260px] overflow-auto">
                      {cities.map((city) => (
                        <CommandItem
                          key={city.value}
                          value={city.label}
                          onSelect={() => {
                            setOrigin(city.label);
                            setOpenOrigin(false);
                          }}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center justify-between w-full">
                            <span>{city.label}</span>
                            <span className="text-xs text-gray-400">
                              {city.code}
                            </span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* آیکون جابجایی */}
            <span
              role="button"
              tabIndex={0}
              onClick={handleSwitch}
              onKeyDown={(e) => e.key === "Enter" && handleSwitch(e)}
              className="absolute right-[calc(50%-18px)] z-10 w-[28px] h-[28px] flex items-center justify-center"
            >
              <img src={SwitchIcon} className="w-5 h-5" alt="Switch" />
            </span>
            {/* ── مقصد + آیکون Switch ── */}
            <Popover open={openDestination} onOpenChange={setOpenDestination}>
              <PopoverTrigger asChild>
                <button className={`${inputBase} relative`}>
                  <div className="flex items-center gap-3">
                    <img src={LocationIcon} className="w-5 h-5" />
                    <span
                      className="text-xs"
                      style={{ color: destination ? "#000" : "#999999" }}
                    >
                      {destination || "مقصد"}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-black" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[280px] p-0 bg-white shadow-lg border border-gray-100 rounded-xl"
                align="start"
              >
                <Command className="bg-white">
                  <CommandInput
                    placeholder="جستجوی شهر..."
                    className="h-[40px] pr-1 text-right"
                  />
                  <CommandList>
                    <CommandEmpty>شهری یافت نشد</CommandEmpty>
                    <CommandGroup className="max-h-[260px] overflow-auto">
                      {cities.map((city) => (
                        <CommandItem
                          key={city.value}
                          value={city.label}
                          onSelect={() => {
                            setDestination(city.label);
                            setOpenDestination(false);
                          }}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center justify-between w-full">
                            <span>{city.label}</span>
                            <span className="text-xs text-gray-400">
                              {city.code}
                            </span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* ── تعداد مسافر ── */}
            <Popover open={openPassengers} onOpenChange={setOpenPassengers}>
              <PopoverTrigger asChild>
                <button className={inputBase + " max-w-[115px]"}>
                  <div className="flex items-center gap-1">
                    <User className="w-5 h-5 text-black" />
                    <span
                      className={`text-xs ${totalPassengers > 0 ? "text-black" : "text-[#999999]"}`}
                    >
                      {totalPassengers > 0
                        ? `${totalPassengers + " نفر"}`
                        : "تعداد مسافر"}
                    </span>
                  </div>
                  {/* <ChevronDown className="w-5 h-5 text-black" /> */}
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[300px] bg-white p-4 shadow-lg border border-gray-100 rounded-xl"
                align="start"
              >
                <div className="space-y-4" dir="rtl">
                  {[
                    {
                      key: "adults",
                      label: "بزرگسال",
                      desc: "بالای ۱۲ سال",
                      min: 0,
                    },
                    {
                      key: "children",
                      label: "کودک",
                      desc: "۲ تا ۱۲ سال",
                      min: 0,
                    },
                    {
                      key: "infants",
                      label: "نوزاد",
                      desc: "زیر ۲ سال",
                      min: 0,
                    },
                  ].map(({ key, label, desc, min }) => (
                    <div
                      key={key}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-medium">{label}</div>
                        <div className="text-xs text-gray-400">{desc}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updatePassengers(key, "decrease")}
                          disabled={passengers[key] <= min}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-lg hover:bg-gray-50 disabled:opacity-30"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm font-medium">
                          {passengers[key]}
                        </span>
                        <button
                          onClick={() => updatePassengers(key, "increase")}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-lg hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setOpenPassengers(false)}
                    className="w-full text-center bg-black text-white py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    تایید
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            {/* ── دکمه جستجو ── */}
            <button className="w-[139px] h-[40px] bg-black text-white rounded-[14px] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors flex-shrink-0">
              <span className="font-medium text-xs">جستجو</span>
              <img src={SearchIcon} className="w-5 h-5" alt="Search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

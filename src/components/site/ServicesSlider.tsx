import React, { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import crossDockHero from "@/assets/cross-dock-hero.png";
import containerUnloadingHero from "@/assets/container-unloading-hero.png";
import palletStorageHero from "@/assets/pallet-storage-hero.png";
import palletRestackingHero from "@/assets/pallet-restacking-hero.png";
import transloadingHero from "@/assets/transloading-hero.png";
import fulfillmentHero from "@/assets/fulfillment-hero.png";

export interface ServiceCard {
  num: string;
  kicker: string;
  title: string;
  body: string;
  image: string;
  cta: string;
  to: string;
}

export const SERVICES_DATA: ServiceCard[] = [
  {
    num: "01",
    kicker: "Rapid Response",
    title: "Cross-Docking Services",
    body: "Immediate freight transfers, shifted cargo correction, and emergency same-day cross-docking near Port Newark to eliminate costly detention fees.",
    image: crossDockHero,
    cta: "Explore Cross-Docking",
    to: "/cross-dock-new-jersey",
  },
  {
    num: "02",
    kicker: "Port & Import",
    title: "Container Unloading",
    body: "Expert floor-loaded 20' and 40' ocean container stripping, palletization, SKU sorting, and rapid dock turnarounds.",
    image: containerUnloadingHero,
    cta: "Explore Container Unloading",
    to: "/container-unloading-new-jersey",
  },
  {
    num: "03",
    kicker: "Warehousing",
    title: "Pallet Storage",
    body: "Secure short and long-term palletized warehousing in New Jersey with real-time inventory tracking and high-density rack storage.",
    image: palletStorageHero,
    cta: "Explore Pallet Storage",
    to: "/pallet-storage-new-jersey",
  },
  {
    num: "04",
    kicker: "Freight Recovery",
    title: "Pallet Restacking & Rework",
    body: "Correction of fallen, leaning, or damaged pallets, re-wrapping, re-banding, and load stabilization for carrier compliance.",
    image: palletRestackingHero,
    cta: "Explore Pallet Rework",
    to: "/pallet-restacking-new-jersey",
  },
  {
    num: "05",
    kicker: "Intermodal",
    title: "Container Transloading",
    body: "Direct freight transfer from ocean containers into 53' dry vans and over-the-road trailers for nationwide distribution.",
    image: transloadingHero,
    cta: "Explore Transloading",
    to: "/transloading-new-jersey",
  },
  {
    num: "06",
    kicker: "Distribution",
    title: "3PL Order Fulfillment",
    body: "Complete B2B and B2C order pick, pack, ship, and inventory management solutions strategically located near NJ port corridors.",
    image: fulfillmentHero,
    cta: "Explore 3PL Fulfillment",
    to: "/fulfillment-new-jersey",
  },
];

export function ServicesSlider() {
  const [sliderShift, setSliderShift] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;

    // Mouse tilt calculation (-8px to +8px)
    const shift = (percentage - 0.5) * 16;
    setSliderShift(shift);

    // Extreme Right (outer 15%) & Extreme Left (outer 15%) Hover Auto-Slide
    if (percentage > 0.85) {
      triggerAutoSlide("right");
    } else if (percentage < 0.15) {
      triggerAutoSlide("left");
    } else {
      stopAutoSlide();
    }
  };

  const triggerAutoSlide = (direction: "left" | "right") => {
    if (autoSlideTimerRef.current) return; // already sliding
    if (!swiperInstance) return;

    if (direction === "right") {
      swiperInstance.slideNext();
    } else {
      swiperInstance.slidePrev();
    }

    autoSlideTimerRef.current = setInterval(() => {
      if (!swiperInstance) return;
      if (direction === "right") {
        swiperInstance.slideNext();
      } else {
        swiperInstance.slidePrev();
      }
    }, 700);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };

  const handleContainerMouseLeave = () => {
    setSliderShift(0);
    stopAutoSlide();
  };

  return (
    <div className="relative">
      {/* Header & Text */}
      <div className="max-w-4xl">
        <p className="label-mono font-mono text-xs uppercase tracking-widest text-[#F40009]">
          WHAT WE OFFER
        </p>
        <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
          Warehouse, 3PL & Logistics Services in New Jersey
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
          Cross-docking, container unloading, pallet storage, and third-party logistics (3PL) solutions strategically located near Port Newark to support fast, efficient freight movement across New Jersey and the Northeast.
        </p>
      </div>

      {/* Outer Slider Section Group for Hover Nav Arrows */}
      <div className="group/slider relative mt-12">
        {/* Left Arrow Overlay Button (<) */}
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          aria-label="Previous slide"
          className="absolute left-1 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#F40009]/40 bg-[#052424]/90 text-white shadow-2xl opacity-0 transition-all duration-300 hover:scale-110 hover:border-[#F40009] hover:bg-[#F40009] hover:text-white group-hover/slider:opacity-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow Overlay Button (>) */}
        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          aria-label="Next slide"
          className="absolute right-1 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#F40009]/40 bg-[#052424]/90 text-white shadow-2xl opacity-0 transition-all duration-300 hover:scale-110 hover:border-[#F40009] hover:bg-[#F40009] hover:text-white group-hover/slider:opacity-100"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Swiper.js Slider & Directional Mouse Shift Container */}
        <div
          onMouseMove={handleContainerMouseMove}
          onMouseLeave={handleContainerMouseLeave}
          className="transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${sliderShift}px)` }}
        >
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            grabCursor={true}
            simulateTouch={true}
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
            }}
            className="services-swiper !overflow-visible pb-12 pt-6 px-2"
          >
            {SERVICES_DATA.map((s) => (
              <SwiperSlide key={s.num} className="!h-auto flex flex-col !overflow-visible">
                <Link
                  to={s.to}
                  className="group/card service-card relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#F40009]/35 bg-surface shadow-[0_0_15px_rgba(244, 0, 9,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#F40009] hover:shadow-[0_0_25px_rgba(244, 0, 9,0.65)]"
                >
                  {/* Card Top Image (Uniform 200px height) */}
                  <div className="relative h-[200px] w-full shrink-0 overflow-hidden border-b border-[#F40009]/20">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      draggable={false}
                      className="h-[200px] w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Card Body (Flex distribution with mt-auto CTA button) */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <p className="label-mono font-mono text-xs uppercase tracking-widest text-[#F40009]">
                        {s.num} · {s.kicker}
                      </p>
                      <h3 className="mt-3 text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover/card:text-[#F40009]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#aaaaaa]">
                        {s.body}
                      </p>
                    </div>

                    {/* Bottom CTA Arrow Link (pushed to absolute bottom) */}
                    <div className="mt-auto pt-6 border-t border-[#F40009]/20 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F40009]">
                        {s.cta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/card:translate-x-1.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

import arrow from "/public/arrow1.png";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function OurService() {
  const data = [
    {
      title: "Website Design & Development",
      description:
        "Transform your online presence with our expert website design and development services. From custom design to advanced functionality",
      color: "#1D3A94",
    },
    {
      title: "Shopify Platform Setup & Customization",
      description:
        "Launch your online store with ease using our Shopify platform setup and customization services. ",
      color: "#F0AD00",
    },
    {
      title: "Website maintenance & updates",
      description:
        "Keep your website running smoothly with our professional website maintenance and update services. From regular updates to emergency fixes, we've got you covered.",
      color: "#B8445B",
    },
    {
      title: "Website maintenance & updates",
      description:
        "Keep your website running smoothly with our professional website maintenance and update services. From regular updates to emergency fixes, we've got you covered.",
      color: "#1D3A94",
    },
  ];

  return (
    <>
      <section className="bg-background px-5">
        <div className="text-mainColor page-padding text-center">
          <div>
            <h3 className="subtitle font-bold text-mainColor3">
              -Our Services-
            </h3>
            <h2 className="mt-5 mb-16 title">
              Take Your Business to the Next Level <br /> with Our Customized
              Web Solutions
            </h2>
            <div className="mt-10">
              <Swiper
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {data.map((data, index) => (
                  <SwiperSlide
                    key={index}
                    className="min-h-[400px] flex flex-col justify-around	text-left border p-10 gap-5 rounded-3xl border-[#1D3A94]"
                  >
                    <div className="relative min-h-[62px]">
                      <p className="font-semibold title">0{index + 1}</p>
                      <div
                        className={`h-[62px] w-[62px] rounded-full border border-black opacity-10 absolute -top-1 left-7`}
                        style={{ backgroundColor: `${data.color}` }}
                      />
                    </div>
                    <p className="subtitle font-medium w-3/4">{data.title}</p>
                    <p className="description">{data.description}</p>
                    <Link href="/" className="flex gap-2">
                      Learn More
                      <Image src={arrow} alt="" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

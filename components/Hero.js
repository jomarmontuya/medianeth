import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/hero-image.png";
import vector from "../public/vector.png";
import vector1 from "../public/vector1.png";
import arrow from "../public/arrow1.png";

export default function Hero() {
  return (
    <>
      <section className="container mx-auto relative text-mainColor">
        <Image
          src={vector}
          alt="Vector"
          className="hidden md:absolute right-0 z-10 bottom-0"
        />
        <Image
          src={vector1}
          alt="Vector"
          className="hidden md:absolute left-0 z-10 bottom-0"
        />
        <div>
          <div className="grid xl:grid-cols-2 gap-10">
            <div className="flex xl:hidden justify-center">
              <Image
                src={heroImage}
                alt="Hero Image"
                width={600}
                className="z-50"
              />
            </div>

            <div>
              <h1 className="hero-title">
                Transform Your Online Presence with Our Expert Web Development
                Services
              </h1>
              <div className="my-5 sm:my-10 subtitle space-y-5 mainColor2">
                <p>
                  Do you want to bring your company to the next level? Our web
                  development team can help you create a professional, modern
                  website that will attract and retain customers.
                </p>
                <p>
                  We have the skills and experience to bring your vision to
                  life, from custom design to e-commerce platform setup.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 font-semibold subtitle">
                <Link
                  href=""
                  className="w-2/4 sm:w-auto bg-mainColor3 text-white px-5 py-2"
                >
                  Contact Us
                </Link>
                <div className="flex gap-2 items-center text-mainColor3  px-5 py-2">
                  <Link href="" className="">
                    Learn More
                  </Link>
                  <Image src={arrow} alt="Hero Image" />
                </div>
              </div>
            </div>

            <div className="hidden xl:flex">
              <Image src={heroImage} alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

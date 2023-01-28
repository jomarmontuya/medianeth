import Image from "next/image"
import Link from "next/link"
import image from "/public/image-1.png"
import arrow from "../public/arrow1.png"

export default function WhoWeAre() {
    return (
        <>
            <section className="px-5">
                <div className="text-mainColor page-padding">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <Image src={image} alt="" className=""/>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="subtitle font-bold ">Who We Are</h3>
                            <h2 className="my-5 title lg:w-3/4">Meet the Team Behind Medianeth</h2>
                            <p className="description">We are a group of enthusiastic web development professionals dedicated to assisting businesses in their online success. With a combined 10 years of experience, we have the skills and expertise to provide our clients with high-quality results.</p>
                            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 font-semibold text-sm mt-5">
                                <Link href="" className="sm:w-auto bg-mainColor3 text-white px-5 py-2">Contact Us</Link>
                                <div className="flex gap-2 items-center text-mainColor3  px-5 py-2">
                                    <Link href="" className="">VIEW OUR SERVICES</Link>
                                    <Image src={arrow} alt="Hero Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

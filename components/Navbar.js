import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "/public/medianeth-logo.png"


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <section className="text-mainColor border-b px-5">
                <div className="container mx-auto py-5">
                    <div className="flex items-center gap-5 justify-between">
                        <div className="xl:mb-0 flex items-center">
                            <Image src={logo} alt="logo"/>
                        </div>
                        <button className="lg:hidden" onClick={handleNav}>
                            <div className="bar1" />
                            <div className="bar2" />
                            <div className="bar3" />
                        </button>
                        <div className="hidden lg:flex xl:w-3/5 mx-auto justify-center gap-10 items-center">
                            <Link href="/">Home</Link>
                            <Link href="https://www.google.com">Services</Link>
                            <Link href="https://www.google.com">Portfolio</Link>
                            <Link href="https://www.google.com">About  Us</Link>
                            <Link href="https://www.google.com">Testimonials</Link>
                            <div className="hidden lg:flex xl:hidden">
                                <Link href="https://www.google.com" className="bg-mainColor3 py-2 px-5 flex justify-end text-white w-32 xl:w-auto">Let&apos;s Talk
                                    <Image src="/arrow.png" alt="arrow" width={20} height={0}/>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden xl:flex">
                            <Link href="https://www.google.com" className="bg-mainColor3 py-2 px-5 flex justify-end text-white w-32 xl:w-auto">Let&apos;s Talk
                                <Image src="/arrow.png" alt="arrow" width={20} height={0}/>
                            </Link>
                        </div>
                    </div>
                    <div className={nav ? "flex flex-col xl:w-3/5 mx-auto justify-center gap-10 items-center mt-5 text-center" : "hidden"}>
                        <Link href="https://www.google.com" className="hover:bg-mainColor3 w-full hover:text-white py-2">Home</Link>
                        <Link href="https://www.google.com" className="hover:bg-mainColor3 w-full hover:text-white py-2">Services</Link>
                        <Link href="https://www.google.com" className="hover:bg-mainColor3 w-full hover:text-white py-2">Portfolio</Link>
                        <Link href="https://www.google.com" className="hover:bg-mainColor3 w-full hover:text-white py-2">About  Us</Link>
                        <Link href="https://www.google.com" className="hover:bg-mainColor3 w-full hover:text-white py-2">Testimonials</Link>
                        <div className="hidden lg:flex xl:hidden">
                            <Link href="https://www.google.com" className="bg-mainColor3 py-2 px-5 flex justify-end text-white w-32 xl:w-auto">Let&apos;s Talk
                                <Image src="/arrow.png" alt="arrow" width={20} height={0}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    )
}

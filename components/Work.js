import Image from "next/image"
import Link from "next/link"
import work1 from "/public/work-1.png"
import work2 from "/public/work-2.png"
import work3 from "/public/work-3.png"
import work4 from "/public/work-4.png"
import work5 from "/public/work-5.png"

export default function Work() {
    const works = [
        {img: work1, href: '/'},
        {img: work2, href: '/'},
        {img: work3, href: '/'},
        {img: work4, href: '/'},
        {img: work5, href: '/'},
        {img: work3, href: '/'},

    ]
    const listItems = works.map((work, index) =>
    <Link key={index} href={work.href}>
        <Image src={work.img} alt="" className="z-50"/>
    </Link>
    );
    return (
        <>
            <section className="bg-mainColor4 px-5">
                <div className="text-white page-padding text-center">
                    <div>
                        <h3 className="subtitle font-bold bg-[#0083FF] w-2/4 md:w-2/12 mx-auto py-2">-Our Work-</h3>
                        <h2 className="mt-5 mb-16 title">Take a Look at Our Range of Services in Action</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                            {listItems}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

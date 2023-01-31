import Image from "next/image"
import Link from "next/link"
/* Importing the image from the public folder. */
import blog1 from "/public/blog-1.png"
import blog2 from "/public/blog-2.png"
import blog3 from "/public/blog-3.png"
import time from "/public/time.png"
import person from "/public/person.png"
import comment from "/public/comment.png"

export default function Newsletter() {
    const blogs = [
        {img: blog1, href: '/', title: '35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.', date: 'January 25, 2021', author: 'Cristofer Westervelt', comments: '10 Comments'},
        {img: blog2, href: '/', title: 'Ridiculously powerful 2021 iPad Pro may drop this month', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.', date: 'January 25, 2021', author: 'Cristofer Westervelt', comments: '10 Comments'},
        {img: blog3, href: '/', title: 'Memphis Design: the defining look of the 1980s', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.', date: 'January 25, 2021', author: 'Cristofer Westervelt', comments: '10 Comments'},
    ]
    const listItems = blogs.map((blogs, index) =>
    <div key={index} className="flex flex-col p-5 bg-white text-[#373737] rounded-xl text-left max-w-[400px] gap-3 md:gap-5">
        <Image src={blogs.img} alt={blogs.title} className="w-full rounded-xl"/>
        <p className="font-medium text-xl">{blogs.title}</p>
        <div className="grid grid-cols-2 sm:flex justify-between text-xs w-full">
            <div className="flex gap-2 sm:justify-center items-center">
                <Image src={time} alt="time"/>
                <p>{blogs.date}</p>
            </div>
            <div className="flex gap-2 sm:justify-center items-center">
                <Image src={person} alt="time"/>
                <p>{blogs.author}</p>
            </div>
            <div className="flex gap-2 sm:justify-center items-center">
                <Image src={comment} alt="time"/>
                <p>{blogs.comments}</p>
            </div>
        </div>
        <p className="text-[#7B7B7B] text-sm">{blogs.description}</p>
        <a href={blogs.href} className="text-[#3952A1] font-medium">Read More</a>
    </div>
    );
    return (
        <>
            <section className="bg-mainColor4 px-5">
                <div className="text-white page-padding text-center">
                    <div>
                        <h3 className="subtitle font-bold bg-[#0083FF] w-2/4 md:w-2/12 mx-auto py-2">-Our Blog-</h3>
                        <h2 className="mt-5 mb-16 title">Every Single Update From Here</h2>
                        <div className="grid sm:grid-cols-2 lg:flex justify-center gap-8 md:gap-5 lg:gap-10">
                            {listItems}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

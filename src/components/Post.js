import { formatDate } from "@/utils/date/formatDate";
import Image from "next/image";
import Link from "next/link";

export default function Post({ image, title, description, author, publishedDate, tags = [], slug }) {
    // console.log(image)
    return (
        <>
            <div className="@container">
                <article className="border-2 border-gray-950 grid @sm:grid-cols-2">
                    {image && <Image className="w-full h-full object-cover" src={image} width={1024} height={1024} alt="" />}
                    <div className="p-4 space-y-4">
                        <div className="flex gap-4 flex-wrap">
                            {tags.slice(0, 2).map((tag, index) => (
                                <Link key={index} className="p-[.5em_1.5em] bg-sky-950 text-gray-50 text-xs rounded-full hover:opacity-75 focus-visible:opacity-75" href={"/"} >{tag}</Link>
                            ))}
                        </div>
                        <h3 className="text-2xl text-sky-950">{title}</h3>
                        <p className="line-clamp-3">{description}</p>
                        <Link className="p-[.5em_1.5em] bg-sky-950 text-gray-50 hover:opacity-75 focus-visible:opacity-75 inline-block" href={`/posts/${slug}`} >Read more</Link>
                        <div className="flex gap-4 flex-wrap stroke-sky-950">
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" id="user">
                                    <path fill="#5F5F5F" fillRule="evenodd" d="M16 3C12.6863 3 10 5.68629 10 9 10 12.3137 12.6863 15 16 15 19.3137 15 22 12.3137 22 9 22 5.68629 19.3137 3 16 3zM12 9C12 6.79086 13.7909 5 16 5 18.2091 5 20 6.79086 20 9 20 11.2091 18.2091 13 16 13 13.7909 13 12 11.2091 12 9zM16 16C11.3964 16 8.55024 17.432 6.88425 19.4829 5.25081 21.4936 4.89906 23.9225 4.89418 25.6472 4.88831 27.7194 6.68961 29 8.49209 29H23.5079C25.3104 29 27.1117 27.7194 27.1058 25.6472 27.1009 23.9225 26.7492 21.4936 25.1158 19.4829 23.4498 17.432 20.6036 16 16 16zM6.89417 25.6528C6.89843 24.1465 7.21281 22.2504 8.4366 20.7439 9.62785 19.2775 11.83 18 16 18 20.17 18 22.3722 19.2775 23.5634 20.7439 24.7872 22.2504 25.1016 24.1465 25.1058 25.6528 25.1078 26.3582 24.4829 27 23.5079 27H8.49209C7.51708 27 6.89217 26.3582 6.89417 25.6528z" clipRule="evenodd"></path>
                                </svg>
                                <p>{author}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <g fill="#134563">
                                        <path d="M49.6 54H14.4C12 54 10 52 10 49.6V17.3c0-2.4 1.6-4.4 3.7-4.4h2.2v2.9h-2.2c-.3 0-.7.6-.7 1.5v32.3c0 .8.7 1.5 1.5 1.5h35.2c.8 0 1.5-.7 1.5-1.5V17.3c0-.9-.5-1.5-.7-1.5h-2.2v-2.9h2.2c2 0 3.7 2 3.7 4.4v32.3C54 52 52 54 49.6 54" />
                                        <path d="M20.3 18.8c-.8 0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.9c-.1.8-.7 1.5-1.5 1.5m23.4 0c-.8 0-1.5-.7-1.5-1.5v-5.9c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.9c0 .8-.7 1.5-1.5 1.5m-19-5.9h14.6v3H24.7zm-11.8 8.8h38.2v3H12.9zm32.3 5.9h2.9v2.9h-2.9zm-5.9 0h3v2.9h-3zm-5.8 0h2.9v2.9h-2.9zm-5.9 0h2.9v2.9h-2.9zm-5.9 0h3v2.9h-3zm23.5 5.9h2.9v2.9h-2.9zm-5.9 0h3v2.9h-3zm-5.8 0h2.9v2.9h-2.9zm-5.9 0h2.9v2.9h-2.9zm-5.9 0h3v2.9h-3zm-5.8 0h2.9v2.9h-2.9zm29.3 5.8h2.9v3h-2.9zm-5.9 0h3v3h-3zm-5.8 0h2.9v3h-2.9zm-5.9 0h2.9v3h-2.9zm-5.9 0h3v3h-3zm-5.8 0h2.9v3h-2.9zm23.4 5.9h3v2.9h-3zm-5.8 0h2.9v2.9h-2.9zm-5.9 0h2.9v2.9h-2.9zm-5.9 0h3v2.9h-3zm-5.8 0h2.9v2.9h-2.9z" />
                                    </g>
                                </svg>
                                <p>{formatDate(publishedDate)}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div >
        </>
    )
}

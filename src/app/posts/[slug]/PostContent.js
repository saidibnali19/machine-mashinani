"use client"

import { useTina } from "tinacms/dist/react"
import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { formatDate } from "@/utils/date/formatDate"

export default function PostContent(props) {
    const { data } = useTina(props)

    return (
        <>
            <article className="post | max-w-5xl mx-auto px-4 space-y-4 py-32 sm:py-36">
                <h1 className="text-5xl sm:text-7xl font-serif text-sky-950 capitalize">{data.post.title}</h1>
                <p className="text-center">By {data.post.author} | {formatDate(data.post.publishedDate)}</p>
                <div className="flex gap-4 w-min justify-center mx-auto p-4">
                    <svg className="size-8 bg-sky-950 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <g fill="none" stroke="#f9fafb">
                            <path d="M11.5 15.5h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4z" />
                            <circle cx="8" cy="8" r="3.5" />
                            <circle cx="12.5" cy="3.5" r=".5" />
                        </g>
                    </svg>
                    <svg className="size-8 bg-sky-950 p-1" xmlns="http://www.w3.org/2000/svg" fill="#f9fafb" viewBox="0 0 24 24">
                        <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6z" />
                        <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6z" />
                        <path d="M5.8 22.5H1.6c-.3 0-.5-.2-.5-.5V8.4c0-.3.2-.5.5-.5h4.3c.3 0 .5.2.5.5V22c-.1.3-.3.5-.6.5zm-3.7-1h3.3V8.9H2.1v12.6zm20.9 1h-4.9c-.3 0-.5-.2-.5-.5v-5.8c0-1.2-.3-2.6-1.9-2.6-1.1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.3c0 .3-.2.5-.5.5H8.5c-.1 0-.3-.1-.4-.1S8 22.1 8 22V8.4c0-.1 0-.3.1-.4.1 0 .2-.1.4-.1h4.8c.3 0 .5.2.5.5V9c.8-.7 2.1-1.3 3.8-1.3 3.7 0 5.9 2.6 5.9 6.7V22c0 .3-.2.5-.5.5zm-4.4-1h3.9v-7.1c0-3.5-1.8-5.7-4.9-5.7-2.3 0-3.6 1.2-3.8 1.9-.1.2-.3.4-.6.3-.2 0-.4-.2-.4-.5V8.9H9v12.6h3.8v-5.8c0-.4 0-.8.1-1.2.5-1.3 1.5-2 2.8-2 1.8 0 2.9 1.3 2.9 3.6v5.4z" />
                        <path d="M23 22.5h-4.9c-.3 0-.5-.2-.5-.5v-5.8c0-1.2-.3-2.6-1.9-2.6-1.1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v6.3c0 .3-.2.5-.5.5H8.5c-.1 0-.3-.1-.4-.1S8 22.1 8 22V8.4c0-.1 0-.3.1-.4.1 0 .2-.1.4-.1h4.8c.3 0 .5.2.5.5V9c.8-.7 2.1-1.3 3.8-1.3 3.7 0 5.9 2.6 5.9 6.7V22c0 .3-.2.5-.5.5zm-4.4-1h3.9v-7.1c0-3.5-1.8-5.7-4.9-5.7-2.3 0-3.6 1.2-3.8 1.9-.1.2-.3.4-.6.3-.2 0-.4-.2-.4-.5V8.9H9v12.6h3.8v-5.8c0-.4 0-.8.1-1.2.5-1.3 1.5-2 2.8-2 1.8 0 2.9 1.3 2.9 3.6v5.4zM3.6 7.2C1.8 7.2.5 6 .5 4.4c0-1.7 1.3-2.9 3.1-2.9s3 1.2 3.1 2.8c0 1.7-1.3 2.9-3.1 2.9zm0-4.7c-1.3 0-2.1.7-2.1 1.9 0 1.1.8 1.9 2.1 1.9s2.1-.7 2.1-1.9-.8-1.9-2.1-1.9z" />
                    </svg>
                    <svg className="size-8 bg-sky-950 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <g>
                            <circle cx="8" cy="8" r="7.5" fill="none" stroke="#f9fafb" />
                            <path fill="none" stroke="#f9fafb" d="M3.76 10.28c2.1-.49 5.44-.47 7.5.98M3.44 8c3.68-.75 6.5-.34 8.8 1.3M3.11 5.72c3.06-1.08 7.38-.88 10.11.98" />
                        </g>
                    </svg>
                </div>
                <Image className="max-h-[60vh] object-cover" src={data.post.image} width={1024} height={1024} alt="" />
                <div className="max-w-prose space-y-4">
                    <TinaMarkdown content={data.post.body} />
                </div>
            </article>
        </>
    )
}
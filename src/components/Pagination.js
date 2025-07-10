"use client"

import Link from "next/link"

export default function Pagination({ currentPage, hasNextPage }) {
    const prevPage = currentPage - 1
    const nextPage = currentPage + 1
    return (
        <>
            <div>
                {prevPage > 0 && (
                    <Link href={prevPage === 1 ? "/" : `/page/${prevPage}`}>← Previous</Link>
                )}
                {
                    hasNextPage && (
                        <Link href={`/pages/${nextPage}`}>Next →</Link>
                    )
                }
            </div>
        </>
    )
}

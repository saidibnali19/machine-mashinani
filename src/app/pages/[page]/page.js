import Pagination from "@/components/Pagination";
import Post from "@/components/Post";
import { fetchPaginatedPosts } from "@/utils/tinaPagination";
import { notFound } from "next/navigation";

const POSTS_PER_PAGE = 6;

export default async function page({ params }) {
    const theParams = await params
    const page = parseInt(theParams.page)
    if (isNaN(page) || page < 2) return notFound()

    const { posts, hasNextPage } = await fetchPaginatedPosts({ page, pageSize: POSTS_PER_PAGE })
    return (
        <>
            <article className="bg-gray-100  py-32 sm:py-36  ">
                <div className="max-w-5xl px-4 mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                    {
                        posts.map(post => (
                            <Post key={post._sys.filename} image={post.image} title={post.title} description={post.description} tags={post.tags} author={post.author} publishedDate={post.publishedDate} slug={post._sys.filename} />
                        ))
                    }
                </div>
                <Pagination currentPage={page} hasNextPage={hasNextPage} />
            </article>
        </>
    )
}

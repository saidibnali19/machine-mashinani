import Post from "./Post";

export default function AllPosts({ posts }) {
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
            </article>
        </>
    )
}

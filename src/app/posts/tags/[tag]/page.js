import Post from "@/components/Post"
import client from "../../../../../tina/__generated__/client"

export default async function page({ params }) {
    const theParams = await params
    const tag = decodeURIComponent(theParams.tag)

    const { data } = await client.queries.postConnection({ first: 50 })
    const posts = data.postConnection.edges.map(edge => edge.node)

    // Filter posts with given tag
    const filtered = posts.filter(post =>
        post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    )

    console.log(filtered)
    return (
        <>
            <article>
                <h1>Posts tagged with {tag}</h1>
                {
                    filtered.length > 0 ? (
                        <div className="">
                            {filtered.map(post => (
                                <Post key={post._sys.filename} image={post.image} title={post.title} description={post.description} author={post.author} publishedDate={post.publishedDate} tags={post.tags} slug={post._sys.filename} />
                            ))}
                        </div>
                    ) : (
                        <p>No posts found for this tag.</p>
                    )
                }
            </article>
        </>
    )
}

import Post from "./Post";

export default function FeaturedPost({ image, title, description, author, publishedDate, tags, slug }) {
    // console.log(tags)
    return (
        <>
            <article className="max-w-5xl mx-auto py-32 sm:py-36 ">
                <div className="border-2 border-gray-950 m-4 p-4 space-y-4">
                    <h2>FeaturedPost</h2>
                    <Post image={image} title={title} description={description} author={author} publishedDate={publishedDate} tags={tags} slug={slug} />
                </div>
            </article>
        </>
    )
}

import Post from "./Post";

export default function FeaturedPost() {
    return (
        <>
            <article className="max-w-5xl mx-auto py-32 sm:py-36 ">
                <div className="border-2 border-gray-950 m-4 p-4 space-y-4">
                    <h2>FeaturedPost</h2>
                    <Post />
                </div>
            </article>
        </>
    )
}

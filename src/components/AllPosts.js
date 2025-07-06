import Post from "./Post";

export default function AllPosts() {
    return (
        <>
            <article className="max-w-5xl px-4 mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    [1, 2, 3, 4, 5, 6].map(num => (
                        <Post key={num} />
                    ))
                }
            </article>
        </>
    )
}

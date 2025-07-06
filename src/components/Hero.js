import Link from "next/link";

export default function Hero() {
    return (
        <>
            <article className="min-h-screen bg-gray-950 bg-[url(/images/hero.webp)] bg-center relative">
                <div className="max-w-5xl mx-auto px-4 absolute inset-[auto_0_1rem_0] space-y-4">
                    <h1 className="text-6xl sm:text-8xl font-serif text-sky-950 capitalize">Machine mashinani</h1>
                    <p className="text-gray-50 max-w-prose">Insights, tutorials, and trends in artificial intelligence and data analysis for the local scene</p>
                    <Link className="text-gray-50 inline-block p-[.5em_1.5em] bg-sky-950 hover:opacity-75 focus-visible:opacity-75" href="/" >Read Latest Article</Link>
                </div>
            </article>
        </>
    )
}

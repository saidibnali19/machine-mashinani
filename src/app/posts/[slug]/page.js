import { notFound } from "next/navigation"
import client from "../../../../tina/__generated__/client"
import PostContent from "./PostContent"

export async function generateStaticParams() {
    try {
        const result = await client.queries.postConnection()
        return result.data.postConnection.edges.map(edge => (
            {
                slug: edge.node._sys.filename
            }
        ))
    }
    catch (error) {
        console.error("Static params error:", error)
        return []
    }
}

export default async function PostPage({ params }) {
    const theParams = await params
    const slug = theParams.slug

    try {
        const { data, query, variables } = await client.queries.post({
            relativePath: `${slug}.md`
        })

        return (
            <PostContent data={data} query={query} variables={variables} />
        )
    }
    catch (e) {
        console.error("Post load error:", e)
        notFound()
    }
}
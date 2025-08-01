import Post from "./client-page"
import client from "../../../tina/__generated__/client"

export async function generateStaticParams() {
    const pages = await client.queries.postConnection()
    const paths = pages.data.postConnection.edges.map(edge => (
        { slug: edge.node._sys.breadcrumbs, }
    ))

    return paths || []
}

export default async function PostPage({ params }) {
    const data = await client.queries.post({
        relativePath: `${params.slug}.md`,
    })

    return <Post {...data}></Post>
}
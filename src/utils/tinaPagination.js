import client from "../../tina/__generated__/client"

export async function fetchPaginatedPosts({ page, pageSize }) {
    let hasNextPage = false
    let after = null
    let allPosts = []

    // Fetch pages incrementally until the target page
    for (let i = 1; i <= page; i++) {
        const { data } = await client.queries.postConnection({
            first: pageSize,
            after,
        })

        const currentBatch = data.postConnection.edges.map(e => e.node)
        after = data.postConnection.pageInfo.endCursor
        hasNextPage = data.postConnection.pageInfo.hasNextPage
        allPosts = currentBatch
    }

    return {
        posts: allPosts,
        hasNextPage
    }
}

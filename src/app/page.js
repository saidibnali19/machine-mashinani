import AllPosts from "@/components/AllPosts";
import FeaturedPost from "@/components/FeaturedPost";
import Hero from "@/components/Hero";
import client from "../../tina/__generated__/client";

export default async function Home() {
  const { data } = await client.queries.postConnection()

  const posts = data.postConnection.edges.map(edge => edge.node)

  const featuredPost = posts.find(post => post.featured === true)

  return (
    <>
      <Hero />
      <FeaturedPost title={featuredPost.title} description={featuredPost.description} author={featuredPost.author} publishedDate={featuredPost.publishedDate} tags={featuredPost.tags} slug={featuredPost._sys.filename} image={featuredPost.image} />
      <AllPosts posts={posts} />
    </>
  );
}

import AllPosts from "@/components/AllPosts";
import FeaturedPost from "@/components/FeaturedPost";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPost />
      <AllPosts />
    </>
  );
}

import { Blogs } from "./components/blogs";
import { Carousels1 } from "./components/carousel1";
import { TrendingCards } from "./components/trending-cards";

export default function Home() {
  return (
    <main>
      <Carousels1 />
      <TrendingCards />
      <Blogs />
    </main>
  );
}

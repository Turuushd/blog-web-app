// import { Carousels } from "./components/carousels";
// import { Carousels1 } from "./components/carousel1";
import { Blogs } from "./components/blogs";
import { Carousels2 } from "./components/carousel2";
import { TrendingCards } from "./components/trending-cards";

export default function Home() {
  return (
    <main>
      {/* <Carousels /> */}
      {/* <Carousels1 /> */}
      <Carousels2 />
      {/* blogs */}
      <TrendingCards />
      <Blogs />
    </main>
  );
}

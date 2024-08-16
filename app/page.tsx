import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularCatergories from "@/components/PopularCatergories";

import PopularProducts from "@/components/PopularProducts";
import PopularProductsTwo from "@/components/PopularProductsTwo";
import Banner from "@/components/Banner";
import HotDeals from "@/components/HotDeals";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Hero />
      <PopularProducts />
      <PopularCatergories />
      <PopularProductsTwo />
      <Banner />
      <HotDeals />
    </div>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularCatergories from "@/components/PopularCatergories";

import PopularProducts from "@/components/PopularProducts";
import PopularProductsTwo from "@/components/PopularProductsTwo";
import Banner from "@/components/Banner";
import HotDeals from "@/components/HotDeals";
import Discount from "@/components/Discount";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestNews from "@/components/LatestNews";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Social from "@/components/Social";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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
      <Discount />
      <FeaturedProducts />
      <LatestNews />
      <Testimonials />
      <Partners />
      <Social />
      <Newsletter />
      <Footer />
    </div>
  );
}

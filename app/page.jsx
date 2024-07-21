import FeaturedProperties from "@/components/FeaturedProperties";

import Hero from "@/components/Hero";
import HomeProperty from "@/components/HomeProperty";
import InfoBoxes from "@/components/InfoBoxes";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperty />
    </>
  );
}

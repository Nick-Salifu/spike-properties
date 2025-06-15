import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";

export default function HomePage() { 
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}

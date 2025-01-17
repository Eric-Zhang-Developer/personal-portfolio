import HeroSection from "@/components/core/hero-section";

export default function Home() {
  return (
    <section className=" flex flex-1 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.14))] justify-center items-center">
      <HeroSection></HeroSection>
    </section>
  );
}

import HeroSection from "@/components/core/hero-section";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-theme(spacing.16)-theme(spacing.14))] flex-1 items-center justify-center">
      <HeroSection></HeroSection>
    </section>
  );
}

import Hero from "@/app/components/Hero";
import CountdownTimer from "@/app/components/CountdownTimer";
import ValueProposition from "@/app/components/ValueProposition";
import PainSolution from "@/app/components/PainSolution";
import Testimonials from "@/app/components/Testimonials";
import VideoSalesLetter from "@/app/components/VideoSalesLetter";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* SEO Head Tags */}
      <Head>
        <title>🚀 Produk Terbaik untuk Sukses Anda | Nama Brand</title>
        <meta
          name="description"
          content="Temukan solusi terbaik untuk meningkatkan produktivitas dan kesuksesan Anda. Bergabung sekarang untuk mendapatkan akses eksklusif!"
        />
        <meta name="keywords" content="produk digital, kursus online, sukses bisnis, strategi pemasaran" />
        <meta name="author" content="Nama Brand" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph untuk Social Media */}
        <meta property="og:title" content="🚀 Produk Terbaik untuk Sukses Anda | Nama Brand" />
        <meta property="og:description" content="Temukan solusi terbaik untuk meningkatkan produktivitas dan kesuksesan Anda." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.namabrand.com/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🚀 Produk Terbaik untuk Sukses Anda | Nama Brand" />
        <meta name="twitter:description" content="Temukan solusi terbaik untuk meningkatkan produktivitas dan kesuksesan Anda." />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Schema Markup JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Nama Produk",
              image: "/images/product-image.jpg",
              description:
                "Temukan solusi terbaik untuk meningkatkan produktivitas dan kesuksesan Anda.",
              brand: {
                "@type": "Brand",
                name: "Nama Brand",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "IDR",
                price: "499000",
                availability: "https://schema.org/InStock",
                url: "https://www.namabrand.com/",
              },
            }),
          }}
        />
      </Head>

      <main>
        <Hero />
        <CountdownTimer />
        <ValueProposition />
        <PainSolution />
        <VideoSalesLetter />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}

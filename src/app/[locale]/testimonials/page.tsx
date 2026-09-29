"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20 pb-16">
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

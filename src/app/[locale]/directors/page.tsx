"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { DIRECTORS } from "@/data/society-data";

export default function DirectorsPage() {
  const t = useTranslations("About");
  const locale = useLocale();

  const isMr = locale === "mr";

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-primary/15 via-primary/5 to-background py-16 px-4 border-b">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              <span>विशाल जुन्नर सहकारी पतपेढी लि.</span>
              <span>•</span>
              <span>नोंदणी क्र. BOM/RSR/S/928/1979</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {t("directorsTitle")}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("directorsSubtitle")}
            </p>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          {/* Key Office Bearers (Chairman & Vice Chairman) */}
          <div className="mb-12">
            <h2 className="text-xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              {isMr ? "प्रमुख पदाधिकारी" : "Principal Office Bearers"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {DIRECTORS.slice(0, 2).map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all border-primary/20 group bg-card">
                  <div className="relative h-72 w-full overflow-hidden bg-muted flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.nameEn}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-primary text-[11px] font-bold tracking-wider uppercase mb-1">
                        {isMr ? item.designationMr : item.designationEn}
                      </span>
                      <h3 className="text-xl font-extrabold font-heading">
                        {isMr ? item.nameMr : item.nameEn}
                      </h3>
                      <p className="text-xs text-white/80 font-medium">
                        {isMr ? item.nameEn : item.nameMr}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-12">
            <h2 className="text-xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              {isMr ? "संचालक मंडळ सदस्य" : "Board of Directors"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIRECTORS.slice(2, 10).map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all border-border group bg-card">
                  <div className="relative h-64 w-full overflow-hidden bg-muted flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.nameEn}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="inline-block px-2 py-0.5 rounded bg-primary/90 text-[10px] font-bold tracking-wider uppercase mb-1">
                        {isMr ? item.designationMr : item.designationEn}
                      </span>
                      <h4 className="text-base font-bold font-heading leading-tight">
                        {isMr ? item.nameMr : item.nameEn}
                      </h4>
                      <p className="text-[11px] text-white/80">
                        {isMr ? item.nameEn : item.nameMr}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Representatives & Executive Director */}
          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              {isMr ? "कर्मचारी प्रतिनिधी व मुख्य कार्यकारी अधिकारी" : "Employee Representatives & Executive Leadership"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {DIRECTORS.slice(10).map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all border-border group bg-card">
                  <div className="relative h-64 w-full overflow-hidden bg-muted flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.nameEn}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="inline-block px-2 py-0.5 rounded bg-amber-600 text-[10px] font-bold tracking-wider uppercase mb-1">
                        {isMr ? item.designationMr : item.designationEn}
                      </span>
                      <h4 className="text-base font-bold font-heading leading-tight">
                        {isMr ? item.nameMr : item.nameEn}
                      </h4>
                      <p className="text-[11px] text-white/80">
                        {isMr ? item.nameEn : item.nameMr}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Banner */}
        <section className="py-12 bg-muted/50 border-y">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
            <h3 className="text-2xl font-bold font-heading text-primary">
              {isMr ? "पारदर्शक सहकार • प्रामाणिक सेवा" : "Transparent Cooperation • Ethical Governance"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isMr
                ? "गेल्या ४६ वर्षांपासून विशाल जुन्नर सहकारी पतपेढीच्या संचालक मंडळाने सभासदांच्या विश्वासास पात्र राहत संस्थेला महाराष्ट्रातील अग्रगण्य सहकाराचे मॉडेल बनवले आहे. सलग 'अ' वर्ग ऑडिट मानांकन हे आमच्या प्रामाणिक कारभाराची साक्ष आहे."
                : "For over 46 years, the leadership of Vishal Junnar Sahakari Pathpedhi Ltd has faithfully preserved member trust and transformed the institution into a premier cooperative model in Maharashtra, backed by continuous 'A' Class Audit ranking."}
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

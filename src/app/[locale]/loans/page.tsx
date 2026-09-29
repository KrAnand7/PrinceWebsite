"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { EmiCalculator } from "@/components/calculator/emi-calculator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LOAN_SCHEMES } from "@/data/society-data";

export default function LoansPage() {
  const t = useTranslations("Loans");
  const locale = useLocale();
  const isMr = locale === "mr";

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", labelEn: "All Loans (10 Schemes)", labelMr: "सर्व कर्ज योजना (१० योजना)" },
    { id: "personal", labelEn: "Personal & Daily", labelMr: "वैयक्तिक व दैनंदिन" },
    { id: "vehicle", labelEn: "Vehicle Loans", labelMr: "वाहन तारण" },
    { id: "business", labelEn: "Business & Mortgage", labelMr: "व्यवसाय व मालमत्ता" },
    { id: "home", labelEn: "Home & Pagadi", labelMr: "गृहकर्ज व पगडी" },
  ];

  const filteredLoans = LOAN_SCHEMES.filter(
    (l) => activeCategory === "all" || l.category === activeCategory
  );

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
              <span>{isMr ? "शाखा पातळीवर त्वरित कर्ज मंजुरी" : "Rapid Branch Level Sanctions"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="py-8 px-4 max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <Button
                key={c.id}
                variant={activeCategory === c.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(c.id)}
                className="rounded-full text-xs font-medium"
              >
                {isMr ? c.labelMr : c.labelEn}
              </Button>
            ))}
          </div>
        </section>

        {/* Loan Schemes Grid */}
        <section className="py-6 px-4 max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLoans.map((scheme) => (
              <Card key={scheme.slug} className="flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all border-border bg-card group">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-xs font-extrabold px-2.5 py-1 rounded-full font-heading">
                      {scheme.interestRate}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      कमाल: {scheme.maxAmount}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                    {isMr ? scheme.titleMr : scheme.titleEn}
                  </CardTitle>
                  <CardDescription className="text-[11px] text-muted-foreground">
                    मुदत: {scheme.tenure}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between text-xs text-muted-foreground">
                  <ul className="space-y-1.5">
                    {(isMr ? scheme.featuresMr : scheme.featuresEn).slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] leading-tight">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t flex gap-2">
                    <Link href={`/loans/${scheme.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        {isMr ? "तपशील व कागदपत्रे →" : "Details & Documents →"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive EMI Calculator */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <EmiCalculator />
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

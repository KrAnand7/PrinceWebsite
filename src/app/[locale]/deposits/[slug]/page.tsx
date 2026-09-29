"use client";

import React, { use } from "react";
import { useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { DepositCalculator } from "@/components/calculator/deposit-calculator";
import { Card, CardContent } from "@/components/ui/card";
import { DEPOSIT_SCHEMES, DepositScheme } from "@/data/society-data";

export default function DepositSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const locale = useLocale();
  const isMr = locale === "mr";

  const foundScheme = DEPOSIT_SCHEMES.find((s) => s.slug === slug);
  const deposit: DepositScheme = foundScheme || {
    slug,
    titleEn: slug.replace(/-/g, " ").toUpperCase(),
    titleMr: slug.replace(/-/g, " "),
    interestRate: "Up to 8.90% P.A.",
    minAmount: "₹5,000",
    tenure: "Flexible",
    loanFacility: "90% Loan available",
    featuresEn: [
      "High guaranteed returns backed by 'A' Class audit safety",
      "Doorstep banking and digital passbook facility",
      "Nomination and premature closure facilities available",
    ],
    featuresMr: [
      "'अ' वर्ग ऑडिट मानांकनामुळे ठेवीची १००% सुरक्षितता",
      "घरपोच बँकिंग आणि डिजिटल पासबुक सुविधा",
      "वारसदार नोंदणी व मुदतपूर्व बंद करण्याचे पर्याय उपलब्ध",
    ],
  };

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
              <span>{isMr ? "ठेव योजना तपशील" : "Deposit Scheme Details"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {isMr ? deposit.titleMr : deposit.titleEn}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isMr
                ? `${deposit.interestRate} परतावा • मुदत: ${deposit.tenure} • ${deposit.loanFacility}`
                : `${deposit.interestRate} Return • Tenure: ${deposit.tenure} • ${deposit.loanFacility}`}
            </p>
          </div>
        </section>

        {/* Key Highlights Grid */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 border-primary/15 bg-card">
              <div className="text-xs text-muted-foreground mb-1">{isMr ? "व्याजदर / परतावा" : "Interest Rate"}</div>
              <div className="text-xl font-black text-primary font-heading">{deposit.interestRate}</div>
            </Card>

            <Card className="p-6 border-primary/15 bg-card">
              <div className="text-xs text-muted-foreground mb-1">{isMr ? "किमान गुंतवणूक" : "Min Investment"}</div>
              <div className="text-xl font-black text-foreground font-heading">{deposit.minAmount}</div>
            </Card>

            <Card className="p-6 border-primary/15 bg-card">
              <div className="text-xs text-muted-foreground mb-1">{isMr ? "ठेव मुदत" : "Deposit Tenure"}</div>
              <div className="text-xl font-black text-foreground font-heading">{deposit.tenure}</div>
            </Card>

            <Card className="p-6 border-primary/15 bg-card">
              <div className="text-xs text-muted-foreground mb-1">{isMr ? "कर्ज सुविधा" : "Loan Facility"}</div>
              <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-heading">{deposit.loanFacility}</div>
            </Card>
          </div>

          {/* Scheme Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-heading text-foreground">
                {isMr ? "योजनेची प्रमुख वैशिष्ट्ये व फायदे" : "Key Features & Benefits"}
              </h2>
              <div className="space-y-3">
                {(isMr ? deposit.featuresMr : deposit.featuresEn).map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-card border">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-foreground leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/15 space-y-2">
                <h3 className="text-sm font-bold text-primary font-heading">
                  {isMr ? "ठेव खाते कसे सुरू करावे?" : "How to Open This Account?"}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {isMr
                    ? "आपल्या जवळच्या शाखेत जाऊन किंवा आमच्या अधिकृत दैनिक प्रतिनिधीमार्फत पासपोर्ट फोटो, पॅन कार्ड आणि आधार कार्ड देऊन त्वरित खाते उघडू शकता. अधिक माहितीसाठी 9004479027 वर संपर्क साधा."
                    : "Visit any of our 40+ branches with your KYC documents (PAN card, Aadhaar card, and passport photos) or contact our doorstep representative at 9004479027."}
                </p>
              </div>
            </div>

            {/* Calculator for this scheme */}
            <div>
              <DepositCalculator />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

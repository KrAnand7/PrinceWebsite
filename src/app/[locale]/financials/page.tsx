"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ANNUAL_REPORTS } from "@/data/society-data";

export default function FinancialsPage() {
  const t = useTranslations("Financials");
  const locale = useLocale();
  const isMr = locale === "mr";

  const financialHighlights = [
    { title: isMr ? "एकूण ठेवी" : "Total Deposits", value: "₹ ३५० कोटी+", desc: isMr ? "सभासदांचा अखंड विश्वास" : "Member Trust & Deposits" },
    { title: isMr ? "कर्ज वाटप" : "Total Loans Disbursed", value: "₹ २६० कोटी+", desc: isMr ? "सुलभ व वेळेवर पतपुरवठा" : "Accessible Cooperative Credit" },
    { title: isMr ? "खेळते भांडवल" : "Working Capital", value: "₹ ३८० कोटी+", desc: isMr ? "आर्थिक स्थिरता व सक्षमता" : "Strong Financial Stability" },
    { title: isMr ? "सलग ऑडिट दर्जा" : "Continuous Audit Rating", value: "'अ' वर्ग (A+)", desc: isMr ? "गेल्या २५+ वर्षांपासून अखंड" : "Over 25+ Consecutive Years" },
  ];

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
              <span>{isMr ? "वार्षिक अहवाल व आर्थिक स्थिती" : "Annual Reports & Financial Health"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Audit Rating Banner */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-background border border-emerald-500/30 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                {t("auditRating")}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-heading">
                {isMr ? "सलग 'अ' वर्ग ऑडिट मानांकन" : "Continuous 'A' Class Audit Rating"}
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                {isMr
                  ? "विशाल जुन्नर सहकारी पतपेढीने गेल्या २५ हून अधिक वर्षांपासून सलग 'अ' वर्ग (A+) ऑडिट मानांकन कायम राखले आहे. हे आमच्या पारदर्शक हिशोब, मजबूत एनपीए व्यवस्थापन आणि सभासदांच्या पैशाच्या संपूर्ण सुरक्षेचे प्रतीक आहे."
                  : "Vishal Junnar Sahakari Pathpedhi Ltd has maintained the prestigious 'A' Class Audit Rating for over 25 consecutive years, reflecting immaculate accounting, sound NPA recovery, and total member funds protection."}
              </p>
            </div>
            <div className="w-28 h-28 rounded-full bg-emerald-600 text-white font-black text-4xl flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800 shrink-0 font-heading">
              A+
            </div>
          </div>
        </section>

        {/* Financial Highlights Grid */}
        <section className="py-8 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((stat, idx) => (
              <Card key={idx} className="text-center border-primary/15 hover:border-primary/40 hover:shadow-lg transition-all bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl sm:text-3xl font-extrabold text-primary font-heading">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="font-bold text-sm text-foreground font-heading">{stat.title}</p>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Official Annual Reports Download Grid */}
        <section className="py-12 px-4 max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              {isMr ? "कायदेशीर दस्तऐवज" : "Statutory Disclosures"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading">{t("downloadsTitle")}</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {isMr
                ? "आमच्या वार्षिक ताळेबंद, नफा-तोटा पत्रक आणि संचालक मंडळाच्या अहवालाची अधिकृत पीडीएफ फाईल डाउनलोड करा."
                : "Download official published balance sheets, profit & loss statements, and leadership reports."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ANNUAL_REPORTS.map((report, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg hover:border-primary/30 transition-all bg-card flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary font-heading">
                      {report.year}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium">PDF • {report.fileSize}</span>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground font-heading">
                    {isMr ? report.titleMr : report.titleEn}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {isMr ? "वार्षिक सर्वसाधारण सभा अहवाल" : "Annual General Meeting Report"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-sm group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>{isMr ? "अहवाल डाउनलोड करा (PDF)" : "Download PDF Report"}</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

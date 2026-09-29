"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { DepositCalculator } from "@/components/calculator/deposit-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DEPOSIT_SCHEMES } from "@/data/society-data";

export default function DepositsPage() {
  const t = useTranslations("Deposits");
  const locale = useLocale();
  const isMr = locale === "mr";

  const rateTable = [
    { tenure: isMr ? "विशाल दामदीडपट ठेव (६४ महिने)" : "Vishal Damdidpat (64 Months)", general: "१.५ पट (दीडपट परतावा)", senior: "१.५ पट + ९०% कर्ज सुविधा" },
    { tenure: isMr ? "विशाल मुदत ठेव (१०९ महिने)" : "Vishal Double Deposit (109 Months)", general: "२.० पट (दामदुप्पट परतावा)", senior: "दामदुप्पट हमी + ९०% कर्ज" },
    { tenure: isMr ? "विशाल समृद्धी ठेव (१३ महिने विशेष)" : "Vishal Samruddhi (13 Months Special)", general: "८.६५% p.a.", senior: "८.९०% p.a. (महिला व ज्येष्ठ)" },
    { tenure: isMr ? "१ वर्ष ते ३ वर्षे मुदत ठेव" : "1 Year to 3 Years Term Deposit", general: "८.२५% p.a.", senior: "८.७५% p.a." },
    { tenure: isMr ? "आवर्त ठेव (आर.डी. १ ते ३ वर्षे)" : "Recurring Deposit (1 to 3 Years)", general: "८.००% p.a.", senior: "८.५०% p.a." },
    { tenure: isMr ? "दैनिक बचत ठेव (पिग्मी १ वर्ष)" : "Daily Deposit (Pigmy 1 Year)", general: "आकर्षक दैनिक व्याज", senior: "घरपोच संकलन पावतीसह" },
    { tenure: isMr ? "बचत खाते (दैनिक शिल्लक व्याज)" : "Savings Account (Daily Product)", general: "४.००% p.a.", senior: "४.००% p.a." },
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
              <span>{isMr ? "सलग 'अ' वर्ग मानांकन • १००% ठेवींची सुरक्षा" : "'A' Class Audit Rating • Secure Deposits"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Featured Deposit Schemes Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              {isMr ? "लोकप्रिय ठेव योजना" : "Flagship Deposit Products"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-heading">
              {isMr ? "आपल्या बचतीवर मिळवा कमाल परतावा" : "Maximize Your Savings With High Cooperative Yields"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPOSIT_SCHEMES.map((scheme) => (
              <Card key={scheme.slug} className="border-border hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between bg-card group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-primary/10 text-primary font-heading">
                      {scheme.interestRate}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium">मुदत: {scheme.tenure}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                    {isMr ? scheme.titleMr : scheme.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-xs text-muted-foreground flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b text-[11px]">
                      <span className="text-muted-foreground">{isMr ? "किमान ठेव रक्कम:" : "Min Amount:"}</span>
                      <span className="font-semibold text-foreground">{scheme.minAmount}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b text-[11px]">
                      <span className="text-muted-foreground">{isMr ? "कर्ज / ओडी सुविधा:" : "Loan Facility:"}</span>
                      <span className="font-semibold text-primary">{scheme.loanFacility}</span>
                    </div>

                    <ul className="space-y-1.5 pt-2">
                      {(isMr ? scheme.featuresMr : scheme.featuresEn).slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] leading-tight">
                          <span className="text-emerald-500 font-bold shrink-0">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/deposits/${scheme.slug}`}>
                    <Button variant="outline" size="sm" className="w-full text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {isMr ? "तपशील व अर्ज पहा →" : "View Details & Apply →"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive Deposit Calculator */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <DepositCalculator />
        </section>

        {/* Interest Rate Comparison Table */}
        <section className="py-12 px-4 max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              {isMr ? "व्याजदर तक्ता" : "Comparative Rate Sheet"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading">{t("ratesTitle")}</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {isMr
                ? "ज्येष्ठ नागरिक व महिला सभासदांसाठी विशेष अधिक व्याजदराचा लाभ उपलब्ध."
                : "Special high-interest benefits available for Senior Citizens and Women members."}
            </p>
          </div>

          <div className="overflow-x-auto border rounded-2xl shadow-sm bg-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/10 text-primary border-b border-primary/20 text-xs sm:text-sm font-semibold">
                  <th className="py-4 px-6">{isMr ? "ठेव योजना व मुदत" : "Deposit Scheme & Tenure"}</th>
                  <th className="py-4 px-6">{isMr ? "सर्वसाधारण परतावा" : "General Return"}</th>
                  <th className="py-4 px-6 text-amber-600 dark:text-amber-400">{isMr ? "महिला व ज्येष्ठ नागरिक" : "Senior & Women"}</th>
                </tr>
              </thead>
              <tbody className="divide-y text-xs sm:text-sm">
                {rateTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/40 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-foreground">{row.tenure}</td>
                    <td className="py-3.5 px-6 font-bold text-primary">{row.general}</td>
                    <td className="py-3.5 px-6 font-bold text-amber-600 dark:text-amber-400">{row.senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

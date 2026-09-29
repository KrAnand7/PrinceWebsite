"use client";

import React, { use } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { EmiCalculator } from "@/components/calculator/emi-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LOAN_SCHEMES, LoanScheme } from "@/data/society-data";

export default function LoanSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const locale = useLocale();
  const isMr = locale === "mr";

  const foundLoan = LOAN_SCHEMES.find((l) => l.slug === slug);
  const loan: LoanScheme = foundLoan || {
    slug,
    titleEn: slug.replace(/-/g, " ").toUpperCase(),
    titleMr: slug.replace(/-/g, " "),
    interestRate: "12.00% - 14.00% P.A.",
    maxAmount: "Up to ₹1,50,00,000",
    tenure: "Up to 180 Months",
    category: "business",
    featuresEn: [
      "Rapid branch-level sanction and disbursement",
      "Flexible repayment tenure to match your cashflow",
      "No hidden processing charges",
    ],
    featuresMr: [
      "शाखा पातळीवर त्वरित कर्ज मंजुरी व वाटप",
      "हप्ते भरण्यासाठी सोयीस्कर परतफेडीची मुदत",
      "कोणतेही छुपे शुल्क नाही",
    ],
    eligibilityEn: [
      "Must be an active member of Vishal Junnar Sahakari Pathpedhi Ltd",
      "Verifiable monthly income source",
      "Two solvent member guarantors",
    ],
    eligibilityMr: [
      "पतपेढीचे अधिकृत सभासद असणे आवश्यक",
      "उत्पन्नाचा नियमित व प्रमाणित स्त्रोत",
      "दोन सक्षम जामीनदार",
    ],
    documentsEn: [
      "KYC: Aadhaar Card, PAN Card, Ration Card, Voter ID",
      "Last 3 years ITR / Salary slips of applicant and guarantors",
      "Last 6 months bank statement",
    ],
    documentsMr: [
      "केवायसी: आधार कार्ड, पॅन कार्ड, रेशन कार्ड, मतदान कार्ड",
      "कर्जदार व जामीनदारांचे मागील ३ वर्षांचे आयटीआर किंवा पगारपत्रक",
      "मागील ६ महिन्यांचे बँक स्टेटमेंट",
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
              <span>{isMr ? "कर्ज योजना तपशील" : "Loan Product Details"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {isMr ? loan.titleMr : loan.titleEn}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isMr
                ? `व्याजदर: ${loan.interestRate} • कमाल मर्यादा: ${loan.maxAmount} • मुदत: ${loan.tenure}`
                : `Interest Rate: ${loan.interestRate} • Max Limit: ${loan.maxAmount} • Tenure: ${loan.tenure}`}
            </p>
          </div>
        </section>

        {/* Loan Details Grid */}
        <section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Highlights Bar */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-card rounded-2xl border shadow-sm text-center">
              <div>
                <span className="text-[11px] text-muted-foreground block">{isMr ? "वार्षिक व्याजदर" : "Interest Rate"}</span>
                <span className="text-lg sm:text-xl font-black text-primary font-heading">{loan.interestRate}</span>
              </div>
              <div className="border-x">
                <span className="text-[11px] text-muted-foreground block">{isMr ? "कमाल मर्यादा" : "Max Limit"}</span>
                <span className="text-lg sm:text-xl font-black text-foreground font-heading">{loan.maxAmount}</span>
              </div>
              <div>
                <span className="text-[11px] text-muted-foreground block">{isMr ? "परतफेड मुदत" : "Max Tenure"}</span>
                <span className="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 font-heading">{loan.tenure}</span>
              </div>
            </div>

            {/* Features */}
            <Card className="border-border shadow-sm bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground font-heading">
                  {isMr ? "वैशिष्ट्ये व फायदे" : "Key Features & Benefits"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {(isMr ? loan.featuresMr : loan.featuresEn).map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-foreground leading-relaxed">{f}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Eligibility & Documents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border shadow-sm bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold text-foreground font-heading flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {isMr ? "पात्रता अटी" : "Eligibility Criteria"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  {(isMr ? loan.eligibilityMr : loan.eligibilityEn).map((el, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">• {el}</p>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border shadow-sm bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold text-foreground font-heading flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    {isMr ? "आवश्यक कागदपत्रे" : "Required Documents"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  {(isMr ? loan.documentsMr : loan.documentsEn).map((doc, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">• {doc}</p>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* EMI Calculator */}
            <div>
              <EmiCalculator />
            </div>
          </div>

          {/* Sidebar CTA & Branch contact */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground shadow-xl border-none p-6 space-y-4">
              <h3 className="text-xl font-extrabold font-heading">
                {isMr ? "कर्जासाठी संपर्क साधा" : "Apply for This Loan"}
              </h3>
              <p className="text-xs leading-relaxed opacity-90">
                {isMr
                  ? "शाखा पातळीवर विनाविलंब कर्ज मंजुरीसाठी आजच आपल्या जवळच्या शाखेला भेट द्या किंवा आमच्या हेल्पलाइनवर कॉल करा."
                  : "Visit your nearest branch for fast branch-level sanctions or call our helpline directly."}
              </p>
              <div className="p-3 bg-white/10 rounded-xl space-y-1 text-xs">
                <p className="font-semibold">हेल्पलाइन: 9004479027 / 8976948371</p>
                <p className="text-[11px] opacity-80">सोम-शुक्र १० ते ६ | शनि १० ते १:३०</p>
              </div>
              <Link href="/branches" className="block">
                <Button variant="secondary" className="w-full font-bold text-xs">
                  {isMr ? "जवळची शाखा शोधा (४०+ शाखा)" : "Locate Nearest Branch (40+)"}
                </Button>
              </Link>
            </Card>

            <Card className="p-6 border-border space-y-3 bg-card">
              <h4 className="font-bold text-sm text-foreground font-heading">
                {isMr ? "इतर कर्ज योजना" : "Other Loan Schemes"}
              </h4>
              <div className="space-y-2 text-xs">
                {LOAN_SCHEMES.filter((l) => l.slug !== slug).slice(0, 5).map((l) => (
                  <Link
                    key={l.slug}
                    href={`/loans/${l.slug}`}
                    className="block p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-primary transition-colors flex justify-between items-center"
                  >
                    <span>{isMr ? l.titleMr : l.titleEn}</span>
                    <span className="text-[11px] font-bold text-primary">{l.interestRate}</span>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

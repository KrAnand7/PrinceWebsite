"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DIRECTORS } from "@/data/society-data";

export default function AboutPage() {
  const t = useTranslations("About");
  const locale = useLocale();
  const isMr = locale === "mr";

  const milestones = [
    {
      year: "1978",
      titleEn: "Founding by Junnar Youth",
      titleMr: "गुढीपाडवा १९७८: स्थापनेचा संकल्प",
      descEn: "Founded on Gudi Padwa by migrated youth in Mumbai to serve their native Junnar soil. 550 members contributed ₹6 nominal subscriptions, raising ₹1,32,500 share capital.",
      descMr: "मुंबईतील गिरणगावात उपजिविकेसाठी आलेल्या जुन्नरच्या युवकांनी जन्मभूमीच्या ऋणातून मुक्त होण्यासाठी ५५० सभासदांकडून प्रत्येकी ₹६ चे वर्गणी गोळा करून ₹१,३२,५०० भांडवल उभे केले.",
    },
    {
      year: "1979",
      titleEn: "Formal Inauguration",
      titleMr: "जानेवारी १९७९: पतपेढीचे उद्घाटन",
      descEn: "Formally inaugurated in January 1979 in presence of Hon. Bhai Vaidya (Minister of State for Home Affairs) and began active banking operations in Ghodapdeo, Mumbai.",
      descMr: "तत्कालीन गृहराज्यमंत्री मा. भाई वैद्य यांच्या उपस्थितीत जानेवारी १९७९ मध्ये घोडपदेव येथे पतपेढीचे विधिवत कामकाज सुरू झाले.",
    },
    {
      year: "1983",
      titleEn: "Perseverance Through Crisis",
      titleMr: "१९८३: संकटावर मात व खंबीर वाटचाल",
      descEn: "During the historic Mumbai mill workers strike, the society steadfastly protected members' savings, emerging as a pillar of cooperative trust in Maharashtra.",
      descMr: "मुंबईतील ऐतिहासिक गिरणी कामगार संपाच्या भीषण संकटातही संस्थेने सभासदांच्या ठेवींचे रक्षण करत सहकार क्षेत्रातील आपले स्थान अभेद्य ठेवले.",
    },
    {
      year: "2012",
      titleEn: "Vishal Junnar Pratishthan",
      titleMr: "२०१२: विशाल जुन्नर प्रतिष्ठान",
      descEn: "Established the social trust to offer educational scholarships, student personality camps, and ₹1,00,000 assistance for critical medical treatments and accident relief.",
      descMr: "जानेवारी २०१२ मध्ये विशाल जुन्नर प्रतिष्ठान या ट्रस्टची स्थापना करून विद्यार्थी शिष्यवृत्ती, व्यक्तिमत्त्व शिबिरे आणि दुर्धर आजारांवर ₹१ लाखांपर्यंतची मदत सुरू केली.",
    },
    {
      year: "2024+",
      titleEn: "40+ Branches & Core Banking",
      titleMr: "आज: ४०+ शाखा व डिजिटल बँकिंग",
      descEn: "Over 46 years of continuous 'A' Class Audit ranking, serving 50,000+ members with ₹350+ Cr deposits across Mumbai, Thane, Navi Mumbai, and Pune.",
      descMr: "सलग 'अ' वर्ग ऑडिट मानांकनासह ४०+ शाखांचे जाळे, ₹३५०+ कोटी ठेवी आणि ५०,००० हून अधिक सभासदांना वेब-आधारित कोअर बँकिंग सेवा.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Banner with Authentic Background Image */}
        <section className="relative py-20 px-4 border-b overflow-hidden bg-primary/95 text-white">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image
              src="/images/reference/about_us.jpg"
              alt="About Us Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-5xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold">
              <span>विशाल जुन्नर सहकारी पतपेढी लि.</span>
              <span>•</span>
              <span>नोंदणी क्र. BOM/RSR/S/928/1979</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl font-heading">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* History & Story Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                {isMr ? "आमचा गौरवशाली इतिहास" : "Our Glorious History"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-heading leading-tight">
                {t("historyTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {t("historyDesc")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/15">
                  <div className="font-extrabold text-primary text-2xl font-heading">१९७९</div>
                  <div className="text-xs text-muted-foreground font-medium">{isMr ? "स्थापना वर्ष" : "Established"}</div>
                </div>
                <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                  <div className="font-extrabold text-amber-600 dark:text-amber-400 text-2xl font-heading">&apos;अ&apos; वर्ग</div>
                  <div className="text-xs text-muted-foreground font-medium">{isMr ? "सलग ऑडिट दर्जा" : "Audit Grade"}</div>
                </div>
                <div className="p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20 col-span-2 sm:col-span-1">
                  <div className="font-extrabold text-teal-600 dark:text-teal-400 text-2xl font-heading">४०+</div>
                  <div className="text-xs text-muted-foreground font-medium">{isMr ? "शाखांचे जाळे" : "Branches"}</div>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary shadow-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    👁️
                  </div>
                  <h3 className="text-xl font-bold text-primary font-heading">{t("visionTitle")}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("visionDesc")}</p>
              </Card>

              <Card className="border-l-4 border-l-amber-500 shadow-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 font-heading">{t("missionTitle")}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("missionDesc")}</p>
              </Card>

              <Card className="border-l-4 border-l-emerald-500 shadow-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    🤝
                  </div>
                  <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 font-heading">
                    {isMr ? "सामाजिक बांधीलकी (प्रतिष्ठान)" : "Social Trust (Pratishthan)"}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("socialDesc")}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="py-16 px-4 bg-muted/40 border-y">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                {isMr ? "प्रगतीची गौरवगाथा" : "Historical Milestones"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-heading">
                {isMr ? "४६ वर्षांचा प्रेरणादायी प्रवास" : "46 Years of Inspiring Journey"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow relative">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-extrabold text-sm mb-3 font-heading">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-foreground font-heading mb-2">
                    {isMr ? m.titleMr : m.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isMr ? m.descMr : m.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directors Preview */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                {isMr ? "अनुभवी नेतृत्व" : "Visionary Leadership"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading mt-2">
                {t("directorsTitle")}
              </h2>
            </div>
            <Link href="/directors">
              <Button variant="outline" className="gap-2 text-primary font-semibold">
                {isMr ? "संपूर्ण संचालक मंडळ पहा →" : "View All Directors →"}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIRECTORS.slice(0, 4).map((d) => (
              <Card key={d.id} className="overflow-hidden hover:shadow-lg transition-all group bg-card">
                <div className="relative h-60 w-full overflow-hidden bg-muted">
                  <Image
                    src={d.image}
                    alt={d.nameEn}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block px-2 py-0.5 rounded bg-primary text-[10px] font-bold uppercase mb-1">
                      {isMr ? d.designationMr : d.designationEn}
                    </span>
                    <h4 className="text-base font-bold font-heading">{isMr ? d.nameMr : d.nameEn}</h4>
                  </div>
                </div>
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

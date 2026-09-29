"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";

export default function SocialInitiativesPage() {
  const t = useTranslations("About");
  const locale = useLocale();
  const isMr = locale === "mr";

  const initiatives = [
    {
      icon: "🎓",
      titleEn: "Educational Scholarships (Class 4 to Post-Graduation)",
      titleMr: "शैक्षणिक शिष्यवृत्ती (इयत्ता ४ थी ते पदव्युत्तर पदवी)",
      descEn: "Merit-based financial aid, textbooks, and felicitation for children of society members pursuing school, higher education, engineering, medicine, and postgraduate degrees.",
      descMr: "पतपेढीच्या सभासदांच्या पाल्यांना इयत्ता ४ थी ते पदव्युत्तर उच्च शिक्षणासाठी वार्षिक गुणवत्ता शिष्यवृत्ती, वह्या-पुस्तके वाटप व गुणगौरव सोहळा.",
    },
    {
      icon: "🏥",
      titleEn: "Medical & Critical Illness Relief (Up to ₹1,00,000)",
      titleMr: "दुर्धर आजार व अपघात साहाय्य (₹१,००,०००/- पर्यंत)",
      descEn: "Financial medical assistance up to ₹1,00,000 for members battling severe/incurable medical ailments or in case of accidental demise of member.",
      descMr: "सभासदांना कर्करोग, हृदय शस्त्रक्रिया किंवा तत्सम दुर्धर आजारांवरील उपचारांसाठी आणि अपघाती निधनानंतर कुटुंबाला ₹१,००,०००/- पर्यंत आर्थिक मदत.",
    },
    {
      icon: "📚",
      titleEn: "Student Culture Mala & Career Guidance",
      titleMr: "विद्यार्थी संस्कार माला व करिअर मार्गदर्शन शिबिरे",
      descEn: "Over 40 years of continuous personality development camps, educational lecture series, and competitive exam guidance workshops for rural youth.",
      descMr: "गेल्या ४० वर्षांपासून सातत्याने विद्यार्थी संस्कार माला, शैक्षणिक व्याख्यानमाला, करिअर मार्गदर्शन आणि व्यक्तिमत्त्व विकास शिबिरांचे आयोजन.",
    },
    {
      icon: "🌾",
      titleEn: "Farmers Welfare & Rural Outreach",
      titleMr: "शेतकरी मेळावे व ग्रामीण विकास",
      descEn: "Agricultural finance seminars, organic farming guidance, and support systems for farming communities across Junnar, Ambegaon, and Sangamner talukas.",
      descMr: "जुन्नर, आंबेगाव, पारनेर परिसरातील शेतकऱ्यांसाठी आधुनिक शेती व्याख्याने, मार्गदर्शन मेळावे आणि सुलभ कृषीपूरक वित्तपुरवठा.",
    },
    {
      icon: "🤝",
      titleEn: "Vishal Junnar Pratishthan (Est. Jan 2012)",
      titleMr: "विशाल जुन्नर प्रतिष्ठान (स्थापना जानेवारी २०१२)",
      descEn: "Independent public charitable trust established by Vishal Junnar family to conduct expansive community welfare beyond statutory limits.",
      descMr: "वैधानिक नियमांच्या मर्यादेपलीकडे जाऊन समाजोपयोगी कार्य करण्यासाठी जानेवारी २०१२ मध्ये स्थापन झालेली विशाल जुन्नर परिवाराची धर्मदाय संस्था.",
    },
    {
      icon: "🌱",
      titleEn: "Tree Plantation & Environment Conservation",
      titleMr: "वृक्षारोपण व पर्यावरण संवर्धन",
      descEn: "Annual environmental conservation drives, tree plantations on fort foothills in Junnar, and ecological preservation initiatives.",
      descMr: "जुन्नरमधील शिवनेरी व ऐतिहासिक किल्ल्यांच्या परिसरात वृक्षारोपण मोहीम आणि पर्यावरण संवर्धनाचे उपक्रम.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        {/* Banner with Authentic Background */}
        <section className="relative py-20 px-4 border-b overflow-hidden bg-primary/95 text-white">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image
              src="/images/reference/social.jpg"
              alt="Social Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-5xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold">
              <span>विशाल जुन्नर प्रतिष्ठान</span>
              <span>•</span>
              <span>{isMr ? "सामाजिक बांधीलकी व जनकल्याण" : "Social Commitment & Member Welfare"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl font-heading">
              {t("socialTitle")}
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t("socialDesc")}
            </p>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              {isMr ? "समाजोन्नतीचे उपक्रम" : "Community Welfare Programs"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-heading">
              {isMr ? "सहकारातून समाजकारण आणि सर्वांगीण विकास" : "Social Progress Through Genuine Cooperation"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all border-border bg-card group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                    {isMr ? item.titleMr : item.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isMr ? item.descMr : item.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quote / Highlight Box */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20 text-center space-y-3">
            <p className="text-lg font-extrabold text-primary font-heading italic">
              {isMr
                ? "&quot;पहिले पाऊल म्हणजे पुढच्या प्रवासाची सुरुवात...! परिवाराच्या भावी वाटचालीस मनःपूर्वक शुभेच्छा!&quot;"
                : "&quot;The first step marks the beginning of a noble journey...! Dedicated to the ongoing prosperity of our community.&quot;"}
            </p>
            <p className="text-xs text-muted-foreground">
              {isMr
                ? "— विशाल जुन्नर परिवार (पतपेढी, सेवा मंडळ व प्रतिष्ठान)"
                : "— Vishal Junnar Family (Pathpedhi, Seva Mandal & Pratishthan)"}
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

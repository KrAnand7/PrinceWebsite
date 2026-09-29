"use client";

import React from "react";
import { useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { DIGITAL_SERVICES } from "@/data/society-data";

export default function ServicesPage() {
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
              <span>{isMr ? "अत्याधुनिक डिजिटल बँकिंग सेवा" : "Modern Digital Banking Facilities"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {isMr ? "डिजिटल व सहकारी बँकिंग सेवा" : "Digital & Cooperative Banking Services"}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isMr
                ? "वेब-आधारित कोअर बँकिंग, मायक्रो एटीएम, युपीआय ई-कलेक्शन आणि २४x७ तत्काळ निधी हस्तांतरणासह जलद ग्राहक सेवा."
                : "Empowering our members with centralized Web-Based Core Banking, Micro ATMs, UPI collections, and 24x7 instant fund transfers."}
            </p>
          </div>
        </section>

        {/* Digital Services Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIGITAL_SERVICES.map((s) => (
              <Card key={s.id} className="p-6 border-border hover:border-primary/40 hover:shadow-lg transition-all bg-card flex flex-col justify-between group">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                    {s.icon === "server" && "🖥️"}
                    {s.icon === "credit-card" && "💳"}
                    {s.icon === "arrow-right-left" && "⚡"}
                    {s.icon === "qr-code" && "📱"}
                    {s.icon === "smartphone" && "📲"}
                    {s.icon === "file-check" && "📑"}
                    {s.icon === "bell" && "🔔"}
                    {s.icon === "wallet" && "🛍️"}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-heading mb-2 group-hover:text-primary transition-colors">
                      {isMr ? s.titleMr : s.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {isMr ? s.descMr : s.descEn}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Banking Feature Banner */}
        <section className="py-12 px-4 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary to-primary/85 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
                Any Branch Banking (ABB)
              </span>
              <h2 className="text-2xl font-extrabold font-heading">
                {isMr ? "एकाच खात्यातून सर्व ४०+ शाखांमध्ये व्यवहार" : "Transact Across All 40+ Branches"}
              </h2>
              <p className="text-xs opacity-90 max-w-xl leading-relaxed">
                {isMr
                  ? "आमच्या अत्याधुनिक वेब-आधारित कोअर बँकिंग प्रणालीमुळे आपण मुंबई, नवी मुंबई, ठाणे अथवा पुण्याच्या कोणत्याही शाखेत जाऊन पैसे जमा किंवा काढू शकता."
                  : "Thanks to our centralized Web-Based Core Banking, members can deposit or withdraw cash and verify statements at any branch across Maharashtra."}
              </p>
            </div>
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl font-black font-heading">
                ४०+
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

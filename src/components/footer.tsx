"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Nav");

  return (
    <footer className="bg-muted/80 border-t border-border mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: About & Trust */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Vishal Junnar Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-primary font-heading">विशाल जुन्नर पतपेढी</span>
                <span className="text-[11px] text-muted-foreground font-medium">स्थापना १९७९ • सलग &apos;अ&apos; वर्ग ऑडिट</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
            <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/15 text-xs text-primary font-medium space-y-1">
              <div className="font-semibold">{navT("registration")}</div>
              <div className="text-[11px] text-muted-foreground">महाराष्ट्र सहकारी संस्था अधिनियम १९६० अंतर्गत नोंदणीकृत</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-heading">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">{navT("home")}</Link></li>
              <li><Link href="/about_us" className="hover:text-primary transition-colors">{navT("overview")}</Link></li>
              <li><Link href="/directors" className="hover:text-primary transition-colors">{navT("directors")}</Link></li>
              <li><Link href="/branches" className="hover:text-primary transition-colors">{navT("branches")}</Link></li>
              <li><Link href="/social_initiatives" className="hover:text-primary transition-colors">{navT("socialInitiatives")}</Link></li>
              <li><Link href="/annual_reports" className="hover:text-primary transition-colors">{navT("annualReports")}</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition-colors">{navT("testimonials")}</Link></li>
              <li><Link href="/contact_us" className="hover:text-primary transition-colors">{navT("contact")}</Link></li>
            </ul>
          </div>

          {/* Col 3: Services & Schemes */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-heading">{t("services")}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/loans/personal-loan" className="hover:text-primary transition-colors">{navT("personalLoan")} (₹२ लाख)</Link></li>
              <li><Link href="/loans/daily-personal-loan" className="hover:text-primary transition-colors">{navT("dailyPersonalLoan")}</Link></li>
              <li><Link href="/loans/type/new-vehicle-loan" className="hover:text-primary transition-colors">{navT("newVehicleLoan")} (१२% p.a.)</Link></li>
              <li><Link href="/loans/type/business-loans" className="hover:text-primary transition-colors">{navT("businessLoans")}</Link></li>
              <li><Link href="/loans/type/old-home-parchase-loan" className="hover:text-primary transition-colors">{navT("oldHomePurchase")} (१०.७५%)</Link></li>
              <li><Link href="/deposits/damdidpat-deposit" className="hover:text-primary transition-colors">विशाल दामदीडपट ठेव (६४ महिने)</Link></li>
              <li><Link href="/deposits/fixed-deposit" className="hover:text-primary transition-colors">विशाल मुदत ठेव (दामदुप्पट १०९ महिने)</Link></li>
              <li><Link href="/deposits/vishal-samruddhi-deposit" className="hover:text-primary transition-colors">विशाल समृद्धी ठेव (८.९०%)</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-heading">{t("contactInfo")}</h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  प्रशासकीय कार्यालय (वाशी):
                </p>
                <p className="leading-relaxed pl-3 text-[11px]">
                  द कॉर्पोरेट पार्क, युनिट नं. ८०१ ते ८१०, ८ वा मजला, प्लॉट १४-१५, सेक्टर १८, वाशी, नवी मुंबई - ४०० ७०३
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  नोंदणीकृत मुख्य कार्यालय (भायखळा):
                </p>
                <p className="leading-relaxed pl-3 text-[11px]">
                  बी-३, तळमजला, ससेक्स इंडस्ट्रियल इस्टेट, दादोजी कोंडदेव क्रॉस लेन, भायखळा (पूर्व), मुंबई – ४०० ०२७
                </p>
              </div>

              <div className="pt-1 space-y-1 pl-3 text-[11px]">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">दूरध्वनी:</span> 9004479027 / 8976948371 / 022-23719928
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">ईमेल:</span> admin@vjsp.co.in / headoffice@vjsp.co.in
                </p>
                <p className="flex items-center gap-2 text-primary font-medium">
                  <span className="font-semibold text-foreground">वेळ:</span> सोम-शुक्र: १० ते ६ | शनि: १० ते १:३० | रवि: बंद
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>{t("copyright")}</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">{t("termsOfService")}</Link>
            <Link href="/branches" className="hover:text-primary transition-colors">४०+ शाखा</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

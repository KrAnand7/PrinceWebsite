"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isMr = locale === "mr";

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "Loan Inquiry", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!GOOGLE_SHEETS_URL) {
        throw new Error("Google Sheets URL not configured");
      }

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      // With no-cors mode, we can't read the response, but if fetch didn't throw, it was sent
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "Loan Inquiry", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        isMr
          ? "संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा."
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
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
              <span>{isMr ? "नोंदणी क्र. BOM/RSR/S/928/1979" : "Reg No. BOM/RSR/S/928/1979"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border shadow-lg bg-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-primary font-heading">{t("formTitle")}</CardTitle>
              <CardDescription className="text-xs">{t("hours")}</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                  <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                    {isMr ? "संदेश पाठवला!" : "Message Sent!"}
                  </h3>
                  <p className="text-xs text-muted-foreground">{t("successMessage")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">{t("nameLabel")} *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isMr ? "उदा. मंगेश जाधव" : "e.g. Rajesh Patil"}
                      className="w-full px-4 py-2 text-xs rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-foreground">{t("phoneLabel")} *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9004479000"
                        className="w-full px-4 py-2 text-xs rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-foreground">{t("emailLabel")}</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2 text-xs rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">{t("subjectLabel")}</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2 text-xs rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="Personal Loan">{isMr ? "वैयक्तिक कर्ज चौकशी" : "Personal Loan Inquiry"}</option>
                      <option value="Home Loan">{isMr ? "गृहकर्ज चौकशी" : "Home Loan Inquiry"}</option>
                      <option value="Vehicle Loan">{isMr ? "वाहन कर्ज चौकशी" : "Vehicle Loan Inquiry"}</option>
                      <option value="Fixed Deposit">{isMr ? "मुदत ठेव (FD) चौकशी" : "Fixed Deposit Inquiry"}</option>
                      <option value="Savings Account">{isMr ? "बचत खाते उघडणे" : "Open Savings Account"}</option>
                      <option value="Other">{isMr ? "इतर चौकशी" : "General Inquiry"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-foreground">{t("messageLabel")}</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isMr ? "आपला संदेश येथे लिहा..." : "Write your inquiry or message here..."}
                      className="w-full px-4 py-2 text-xs rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full text-xs font-bold py-2.5 disabled:opacity-60">
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {isMr ? "पाठवत आहे..." : "Sending..."}
                      </span>
                    ) : (
                      t("sendButton")
                    )}
                  </Button>

                  {error && (
                    <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-center text-xs text-red-600 dark:text-red-400 font-medium">
                      {error}
                    </div>
                  )}
                </form>
              )}
            </CardContent>
          </Card>

          {/* Office Information & Network */}
          <div className="space-y-6">
            {/* Administrative Office */}
            <Card className="border-border shadow-md bg-card">
              <CardHeader className="pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-fit">
                  {isMr ? "प्रशासकीय कार्यालय" : "Administrative Office"}
                </span>
                <CardTitle className="text-lg font-bold text-foreground font-heading">
                  {isMr ? "वाशी, नवी मुंबई" : "Vashi, Navi Mumbai"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p className="leading-relaxed">
                  द कॉर्पोरेट पार्क प्रिमायसेस को-ऑप. सोसायटी लि., युनिट क्र. ८०१ ते ८१०, ८ वा मजला, प्लॉट क्र. १४ आणि १५, सेक्टर क्र. १८, वाशी, नवी मुंबई - ४०० ७०३.
                </p>
                <p className="font-semibold text-primary pt-1">
                  दूरध्वनी: 9004479027 / 8976948371
                </p>
                <p className="text-[11px] text-muted-foreground">ईमेल: admin@vjsp.co.in</p>
              </CardContent>
            </Card>

            {/* Registered Head Office */}
            <Card className="border-border shadow-md bg-card">
              <CardHeader className="pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full w-fit">
                  {isMr ? "नोंदणीकृत मुख्य कार्यालय" : "Registered Head Office"}
                </span>
                <CardTitle className="text-lg font-bold text-foreground font-heading">
                  {isMr ? "भायखळा, मुंबई" : "Byculla, Mumbai"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p className="leading-relaxed">
                  बी-३, तळमजला, ससेक्स इंडस्ट्रियल इस्टेट, दादोजी कोंडदेव क्रॉस लेन, भायखळा (पूर्व), मुंबई – ४०० ०२७.
                </p>
                <p className="font-semibold text-primary pt-1">
                  दूरध्वनी: 022-23719928 / 9004479001
                </p>
                <p className="text-[11px] text-muted-foreground">ईमेल: headoffice@vjsp.co.in</p>
              </CardContent>
            </Card>

            {/* Branch Locator Link Card */}
            <Card className="border-primary/20 bg-primary/5 p-6 space-y-3">
              <h4 className="font-bold text-base text-foreground font-heading">
                {isMr ? "आमचे ४०+ शाखांचे विस्तृत जाळे" : "Our 40+ Branch Network"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isMr
                  ? "मुंबई, ठाणे, नवी मुंबई, जुन्नर आणि पुणे परिसरातील आपल्या जवळच्या शाखेचा पत्ता, दूरध्वनी व संपर्क तपशील पहा."
                  : "Find branch addresses, direct phone numbers, and maps across Mumbai, Thane, Navi Mumbai, Junnar, and Pune."}
              </p>
              <Link href="/branches" className="block pt-1">
                <Button className="w-full text-xs font-semibold gap-2">
                  <span>{isMr ? "सर्व ४०+ शाखांची यादी पहा" : "View All 40+ Branches"}</span>
                  <span>→</span>
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* Timings Note */}
        <section className="py-8 px-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-2xl bg-muted/60 border text-xs text-muted-foreground">
            <span className="font-bold text-foreground">{isMr ? "कार्यालयीन वेळ:" : "Working Hours:"}</span>{" "}
            {t("hours")}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { useLocale } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { BRANCHES } from "@/data/society-data";

export default function BranchesPage() {
  const locale = useLocale();
  const isMr = locale === "mr";

  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const divisions = [
    { id: "all", labelEn: "All Branches (40+)", labelMr: "सर्व शाखा (४०+)" },
    { id: "head_office", labelEn: "Head & Admin Office", labelMr: "मुख्य व प्रशासकीय कार्यालय" },
    { id: "mumbai", labelEn: "Mumbai Division", labelMr: "मुंबई विभाग" },
    { id: "navi_mumbai", labelEn: "Navi Mumbai Division", labelMr: "नवी मुंबई विभाग" },
    { id: "pune_rural", labelEn: "Pune Rural Division", labelMr: "पुणे ग्रामीण विभाग" },
    { id: "pune_urban", labelEn: "Pune Urban Division", labelMr: "पुणे शहर व पिंपरी चिंचवड" },
  ];

  const filteredBranches = useMemo(() => {
    return BRANCHES.filter((b) => {
      const matchesDivision = selectedDivision === "all" || b.division === selectedDivision;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        b.nameEn.toLowerCase().includes(q) ||
        b.nameMr.toLowerCase().includes(q) ||
        b.addressEn.toLowerCase().includes(q) ||
        b.addressMr.toLowerCase().includes(q) ||
        b.phone.includes(q);
      return matchesDivision && matchesSearch;
    });
  }, [selectedDivision, searchQuery]);

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
              <span>{isMr ? "४० हून अधिक शाखांचे भव्य जाळे" : "40+ Extensive Branch Network"}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl font-heading">
              {isMr ? "आमचे शाखांचे जाळे" : "Our Branch Network"}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isMr
                ? "मुंबई, ठाणे, नवी मुंबई, जुन्नर आणि पुणे परिसरातील ४० हून अधिक शाखांद्वारे आपल्या सेवेत तत्पर."
                : "Serving members with rapid doorstep & branch banking across Mumbai, Thane, Navi Mumbai, Junnar, and Pune."}
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-card p-4 rounded-2xl border shadow-sm">
            {/* Division Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {divisions.map((d) => (
                <Button
                  key={d.id}
                  variant={selectedDivision === d.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDivision(d.id)}
                  className="rounded-full text-xs"
                >
                  {isMr ? d.labelMr : d.labelEn}
                </Button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isMr ? "शाखा, शहर किंवा फोन शोधा..." : "Search branch, city or phone..."}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute left-3 top-2.5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Branches Grid */}
        <section className="py-6 px-4 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <p className="text-xs text-muted-foreground">
              {isMr
                ? `एकूण ${filteredBranches.length} शाखा उपलब्ध`
                : `Showing ${filteredBranches.length} branches`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((b, idx) => (
              <Card key={b.slug} className="hover:shadow-lg transition-all border-border flex flex-col justify-between bg-card group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-xs font-heading">
                      {idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground capitalize">
                      {b.division.replace('_', ' ')}
                    </span>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                    {isMr ? b.nameMr : b.nameEn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs text-muted-foreground flex-1">
                  <p className="flex items-start gap-2 leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{isMr ? b.addressMr : b.addressEn}</span>
                  </p>
                  <p className="flex items-center gap-2 font-semibold text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{b.phone}</span>
                  </p>
                  <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{b.email}</span>
                  </p>
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

"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 px-4 border-b">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary font-heading">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-sm">
              Effective Date: September 2024
            </p>
          </div>
        </section>

        <section className="py-12 px-4 max-w-4xl mx-auto space-y-6 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-xl font-bold text-foreground font-heading">1. General Terms</h2>
          <p>
            By accessing or using the services provided by Vishal Junnar Sahakari Pathpedhi Ltd., you agree to abide by the rules, bylaws, and guidelines of the Cooperative Credit Society Act and the bylaws of the Pathpedhi.
          </p>

          <h2 className="text-xl font-bold text-foreground font-heading">2. Membership & Accounts</h2>
          <p>
            All deposit schemes, loan disbursements, and account operations are subject to membership eligibility criteria, documentation verification, and approval by the Board of Directors.
          </p>

          <h2 className="text-xl font-bold text-foreground font-heading">3. Loan Interest & Repayments</h2>
          <p>
            Loan interest rates, EMI schedules, penal interest for default, and foreclosure charges are governed by the society&apos;s sanctioned credit policy at the time of agreement.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

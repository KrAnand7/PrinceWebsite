"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 px-4 border-b">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary font-heading">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: September 2024
            </p>
          </div>
        </section>

        <section className="py-12 px-4 max-w-4xl mx-auto space-y-6 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-xl font-bold text-foreground font-heading">1. Information We Collect</h2>
          <p>
            Vishal Junnar Sahakari Pathpedhi Ltd. respects your privacy and is committed to protecting member data. We collect personal information such as name, contact details, loan application data, and banking details solely for providing financial services in compliance with cooperative society regulations.
          </p>

          <h2 className="text-xl font-bold text-foreground font-heading">2. Use of Information</h2>
          <p>
            Your information is used strictly for processing deposit accounts, loan applications, identity verification, customer service, and sending mandatory regulatory notifications.
          </p>

          <h2 className="text-xl font-bold text-foreground font-heading">3. Security & Confidentiality</h2>
          <p>
            We implement strict physical, electronic, and administrative safeguards to protect your personal and financial information against unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="text-xl font-bold text-foreground font-heading">4. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact our Head Office at Junnar Main Bazaar Peth, Pune District, Maharashtra.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

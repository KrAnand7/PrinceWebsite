"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("Hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white pt-24 pb-16">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle, #38bdf8 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] w-full relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                {t("since")}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
              {t("title")}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-light max-w-xl">
              {t("description")}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
              <Link href="/contact_us">
                <Button size="lg" className="rounded-xl text-base font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all hover:scale-105 px-8 font-heading">
                  {t("ctaApplyLoan")}
                </Button>
              </Link>
              <Link href="/contact_us">
                <Button size="lg" variant="outline" className="rounded-xl text-base font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 bg-white/5 px-8 font-heading">
                  {t("ctaOpenAccount")}
                </Button>
              </Link>
            </motion.div>

            {/* Micro Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full">
              <div>
                <p className="text-2xl font-extrabold text-amber-400 font-heading">45+</p>
                <p className="text-xs text-blue-200">Years Trust</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-teal-400 font-heading">₹250 Cr+</p>
                <p className="text-xs text-blue-200">Total Deposits</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-sky-400 font-heading">&apos;A&apos; Class</p>
                <p className="text-xs text-blue-200">Audit Grade</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High Quality Caricature & Floating Glass Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group"
            >
              <Image
                src="/images/hero_caricature.jpg"
                alt="Vishal Junnar Cooperative Pathpedhi Happy Members"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Glass Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-slate-900/80 backdrop-blur-xl border border-white/20 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                ★
              </div>
              <div>
                <p className="text-xs font-bold text-white font-heading">&apos;A&apos; Class Audit Rating</p>
                <p className="text-[10px] text-blue-200">Continuous Excellence</p>
              </div>
            </motion.div>

            {/* Floating Glass Badge 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-slate-900/80 backdrop-blur-xl border border-white/20 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg">
                ✓
              </div>
              <div>
                <p className="text-xs font-bold text-white font-heading">15,000+ Active Members</p>
                <p className="text-[10px] text-blue-200">Trusted Community</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

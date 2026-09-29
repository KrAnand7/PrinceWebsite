"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  const testimonials = [1, 2, 3, 4].map((i) => ({
    name: t(`t${i}Name`),
    role: t(`t${i}Role`),
    text: t(`t${i}Text`),
  }));

  // Duplicate for seamless scroll
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          {t("heading")}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 dark:text-slate-400"
        >
          {t("subheading")}
        </motion.p>
      </div>

      <div className="relative w-full flex items-center py-4 mask-horizontal">
        <motion.div
          className="flex gap-6 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear" as const,
            duration: 30,
            repeat: Infinity,
          }}
        >
          {scrollItems.map((testimonial, idx) => (
            <div key={idx} className="w-[85vw] sm:w-[400px] flex-shrink-0">
              <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-white/20 dark:border-slate-700/50 shadow-xl rounded-3xl relative overflow-hidden">
                {/* Quote decoration */}
                <div className="absolute top-4 right-6 text-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                
                <CardContent className="p-8 flex flex-col h-full justify-between relative z-10">
                  <div className="flex mb-6 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  
                  <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-8 flex-grow">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .mask-horizontal {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export function EmiCalculator() {
  const t = useTranslations("Calculators");

  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;
    if (monthlyRate === 0) return loanAmount / totalMonths;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalMonths = tenureYears * 12;
  const totalPayment = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  const chartData = [
    { name: t("principalAmount"), value: loanAmount, color: "oklch(0.45 0.18 250)" },
    { name: t("totalInterest"), value: totalInterest, color: "oklch(0.7 0.15 80)" },
  ];

  return (
    <Card className="w-full shadow-lg border-primary/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          {t("emiTitle")}
        </CardTitle>
        <CardDescription>{t("emiSubtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sliders & Inputs */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-sm">
              <label>{t("loanAmount")}</label>
              <span className="text-primary text-base">₹{loanAmount.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min={25000}
              max={5000000}
              step={25000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-sm">
              <label>{t("interestRate")}</label>
              <span className="text-primary text-base">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={6}
              max={18}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-sm">
              <label>{t("tenureYears")}</label>
              <span className="text-primary text-base">{tenureYears} Years ({tenureYears * 12} Mos)</span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Results Cards */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-muted/50 rounded-xl border border-border text-center">
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">{t("monthlyEmi")}</p>
              <p className="text-lg font-bold text-primary">₹{emi.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">{t("totalInterest")}</p>
              <p className="text-base font-semibold text-amber-600 dark:text-amber-400">₹{totalInterest.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">{t("totalPayment")}</p>
              <p className="text-base font-semibold text-foreground">₹{totalPayment.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>

        {/* Visual Recharts Pie Breakdown */}
        <div className="flex flex-col items-center justify-center h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${Number(value || 0).toLocaleString("en-IN")}`} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

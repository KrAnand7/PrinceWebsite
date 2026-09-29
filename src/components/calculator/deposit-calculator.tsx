"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export function DepositCalculator() {
  const t = useTranslations("Calculators");

  const [depositType, setDepositType] = useState<"FD" | "RD">("FD");
  const [depositAmount, setDepositAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(3);

  const calculateFD = () => {
    // Quarterly compounding
    const r = interestRate / 100;
    const n = 4;
    const tYears = tenureYears;
    if (depositType === "FD") {
      const maturity = depositAmount * Math.pow(1 + r / n, n * tYears);
      return Math.round(maturity);
    } else {
      // RD calculation (monthly deposit)
      const months = tenureYears * 12;
      const i = interestRate / 12 / 100;
      let total = 0;
      for (let m = 1; m <= months; m++) {
        total += depositAmount * Math.pow(1 + i, months - m + 1);
      }
      return Math.round(total);
    }
  };

  const maturityAmount = calculateFD();
  const totalPrincipal = depositType === "FD" ? depositAmount : depositAmount * tenureYears * 12;
  const interestEarned = Math.max(0, maturityAmount - totalPrincipal);

  const chartData = [
    { name: t("principalAmount"), value: totalPrincipal, color: "oklch(0.45 0.18 250)" },
    { name: t("interestEarned"), value: interestEarned, color: "oklch(0.55 0.15 160)" },
  ];

  return (
    <Card className="w-full shadow-lg border-primary/10">
      <CardHeader>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t("fdTitle")}
            </CardTitle>
            <CardDescription>{t("fdSubtitle")}</CardDescription>
          </div>
          {/* Deposit Type Switcher */}
          <div className="flex bg-muted p-1 rounded-xl">
            <button
              onClick={() => setDepositType("FD")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                depositType === "FD" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Fixed Deposit (FD)
            </button>
            <button
              onClick={() => setDepositType("RD")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                depositType === "RD" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Recurring (RD)
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-sm">
              <label>{depositType === "FD" ? t("depositAmount") : "Monthly Installment (₹)"}</label>
              <span className="text-primary text-base">₹{depositAmount.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min={depositType === "FD" ? 5000 : 500}
              max={depositType === "FD" ? 2000000 : 50000}
              step={depositType === "FD" ? 5000 : 500}
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
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
              min={5}
              max={12}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-sm">
              <label>{t("tenureYears")}</label>
              <span className="text-primary text-base">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 bg-muted/50 rounded-xl border border-border text-center">
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">{t("principalAmount")}</p>
              <p className="text-base font-semibold text-foreground">₹{totalPrincipal.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">{t("interestEarned")}</p>
              <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400">₹{interestEarned.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">{t("maturityAmount")}</p>
              <p className="text-lg font-bold text-primary">₹{maturityAmount.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>

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

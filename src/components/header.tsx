"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-1.5 px-4 text-xs font-medium hidden sm:flex">
        <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <span className="bg-primary-foreground/20 px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide">
              {t("registration")}
            </span>
            <span className="text-[11px] opacity-85 hidden md:inline">
              • सलग &apos;अ&apos; वर्ग ऑडिट मानांकन • 40+ शाखांचे जाळे
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/Vishaljunner/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <span className="text-[11px] opacity-75 font-normal">हेल्पलाइन: 9004479027</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={cn("w-full transition-all duration-300 border-b", isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-background/90 backdrop-blur-sm py-3")}>
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.png"
                alt="Vishal Junnar Logo"
                width={44}
                height={44}
                className="object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-primary font-black text-xl -z-10 font-heading">
                V
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl leading-tight tracking-tight text-primary font-heading">
                विशाल जुन्नर
              </span>
              <span className="text-[11px] text-muted-foreground font-medium hidden sm:inline">
                सहकारी पतपेढी लि. (स्थापना १९७९)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/" />}>
                    {t("home")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Us Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t("aboutUs")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[460px] gap-2 p-3 grid-cols-2">
                      <ListItem href="/about_us" title={t("overview")}>१९७८ ची स्थापना, इतिहास व ध्येय.</ListItem>
                      <ListItem href="/directors" title={t("directors")}>१३ सदस्यीय अनुभवी संचालक मंडळ.</ListItem>
                      <ListItem href="/social_initiatives" title={t("socialInitiatives")}>विशाल जुन्नर प्रतिष्ठान व शिष्यवृत्ती.</ListItem>
                      <ListItem href="/testimonials" title={t("testimonials")}>५०,०००+ सभासदांचे मनोगत.</ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Loans Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t("loans")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-2 p-3 grid-cols-2">
                      <ListItem href="/loans/personal-loan" title={t("personalLoan")}>₹२ लाख तात्काळ कर्ज (१६% p.a.).</ListItem>
                      <ListItem href="/loans/daily-personal-loan" title={t("dailyPersonalLoan")}>दुकानदारांसाठी दैनिक कर्ज योजना.</ListItem>
                      <ListItem href="/loans/type/new-vehicle-loan" title={t("newVehicleLoan")}>नवीन वाहनासाठी १२% आकर्षक व्याज.</ListItem>
                      <ListItem href="/loans/type/old-vehicle-loan" title={t("oldVehicleLoan")}>जुनी चारचाकी व अवजड वाहने.</ListItem>
                      <ListItem href="/loans/type/business-loans" title={t("businessLoans")}>शॉप खरेदी (१२.७५%) व खेळते भांडवल.</ListItem>
                      <ListItem href="/loans/type/property-mortgage-loans" title={t("propertyMortgage")}>मालमत्ता व कमर्शियल तारण कर्ज.</ListItem>
                      <ListItem href="/loans/type/old-home-parchase-loan" title={t("oldHomePurchase")}>१०.७५% दराने घरखरेदी कर्ज.</ListItem>
                      <ListItem href="/loans/type/pagadi-business-mortgage-loan" title={t("pagadiBusiness")}>मुंबईतील पगडी दुकानांसाठी कर्ज.</ListItem>
                      <div className="col-span-2 pt-2 border-t mt-1">
                        <Link href="/loans" className="text-xs font-semibold text-primary hover:underline flex items-center justify-between px-2">
                          सर्व कर्ज योजना व ईएमआय कॅल्क्युलेटर पहा →
                        </Link>
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Deposits Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t("deposits")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[540px] gap-2 p-3 grid-cols-2">
                      <ListItem href="/deposits/damdidpat-deposit" title="विशाल दामदीडपट ठेव">६४ महिन्यांत ठेव दीडपट (९०% कर्ज).</ListItem>
                      <ListItem href="/deposits/fixed-deposit" title="विशाल मुदत ठेव (दामदुप्पट)">१०९ महिन्यांत ठेव दुप्पट करण्याची हमी.</ListItem>
                      <ListItem href="/deposits/vishal-samruddhi-deposit" title="विशाल समृद्धी ठेव (१३ महिने)">महिला व ज्येष्ठांसाठी ८.९०% व्याज.</ListItem>
                      <ListItem href="/deposits/daily-deposit" title="दैनंदिन बचत ठेव (पिग्मी)">दररोज प्रतिनिधीमार्फत ₹१० पासून बचत.</ListItem>
                      <ListItem href="/deposits/recurring-deposit" title={t("recurringDeposit")}>दरमहा ₹१०० पासून आवर्त ठेव.</ListItem>
                      <ListItem href="/deposits/saving-account" title={t("savingsAccount")}>सिल्व्हर, गोल्ड, प्लॅटिनम बचत खाती.</ListItem>
                      <div className="col-span-2 pt-2 border-t mt-1">
                        <Link href="/deposits" className="text-xs font-semibold text-primary hover:underline flex items-center justify-between px-2">
                          सर्व ठेव योजना व परतावा कॅल्क्युलेटर पहा →
                        </Link>
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Branches */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/branches" />}>
                    {t("branches")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Financials Menu */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/annual_reports" />}>
                    {t("financials")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact Menu */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/contact_us" />}>
                    {t("contact")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" aria-label="Open Menu" />}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px] overflow-y-auto">
                <SheetTitle className="text-left font-bold text-lg font-heading text-primary flex items-center gap-2 pb-4 border-b">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border">
                    <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
                  </div>
                  विशाल जुन्नर पतपेढी
                </SheetTitle>
                <div className="flex flex-col gap-4 py-6 text-sm">
                  <Link href="/" className="font-semibold px-2 py-1.5 rounded-md hover:bg-accent">{t("home")}</Link>
                  
                  <div className="space-y-1">
                    <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground px-2">{t("aboutUs")}</p>
                    <Link href="/about_us" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("overview")}</Link>
                    <Link href="/directors" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("directors")}</Link>
                    <Link href="/social_initiatives" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("socialInitiatives")}</Link>
                    <Link href="/testimonials" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("testimonials")}</Link>
                  </div>

                  <div className="space-y-1">
                    <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground px-2">{t("loans")}</p>
                    <Link href="/loans" className="block px-3 py-1 text-primary font-medium">सर्व कर्ज योजना (कॅल्क्युलेटर)</Link>
                    <Link href="/loans/personal-loan" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("personalLoan")}</Link>
                    <Link href="/loans/daily-personal-loan" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("dailyPersonalLoan")}</Link>
                    <Link href="/loans/type/new-vehicle-loan" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("newVehicleLoan")}</Link>
                    <Link href="/loans/type/business-loans" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("businessLoans")}</Link>
                    <Link href="/loans/type/old-home-parchase-loan" className="block px-3 py-1 text-muted-foreground hover:text-foreground">{t("homeLoan")}</Link>
                  </div>

                  <div className="space-y-1">
                    <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground px-2">{t("deposits")}</p>
                    <Link href="/deposits" className="block px-3 py-1 text-primary font-medium">सर्व ठेव योजना (कॅल्क्युलेटर)</Link>
                    <Link href="/deposits/damdidpat-deposit" className="block px-3 py-1 text-muted-foreground hover:text-foreground">दामदीडपट ठेव (६४ महिने)</Link>
                    <Link href="/deposits/fixed-deposit" className="block px-3 py-1 text-muted-foreground hover:text-foreground">मुदत ठेव (दामदुप्पट)</Link>
                    <Link href="/deposits/vishal-samruddhi-deposit" className="block px-3 py-1 text-muted-foreground hover:text-foreground">समृद्धी ठेव (८.९०%)</Link>
                    <Link href="/deposits/daily-deposit" className="block px-3 py-1 text-muted-foreground hover:text-foreground">दैनिक बचत ठेव</Link>
                  </div>

                  <Link href="/branches" className="font-semibold px-2 py-1.5 rounded-md hover:bg-accent">{t("branches")}</Link>
                  <Link href="/annual_reports" className="font-semibold px-2 py-1.5 rounded-md hover:bg-accent">{t("financials")}</Link>
                  <Link href="/contact_us" className="font-semibold px-2 py-1.5 rounded-md hover:bg-accent">{t("contact")}</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function ListItem({ title, children, href }: { title: string; children: React.ReactNode; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-xs font-semibold leading-none text-foreground">{title}</div>
        <p className="line-clamp-2 text-[11px] leading-snug text-muted-foreground">{children}</p>
      </Link>
    </li>
  );
}

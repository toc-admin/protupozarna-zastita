"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Globe } from "lucide-react";

const navigation = [
  { name: "O nama", href: "/o-nama" },
  {
    name: "Usluge",
    href: "/usluge",
    children: [
      { name: "Izvođenje radova", href: "/usluge/izvodjenje-radova-protupozarne-zastite" },
      { name: "Optimizacija troškova", href: "/usluge/optimizacija-troskova-protupozarne-zastite" },
      { name: "Edukacija", href: "/usluge/edukacija" },
      { name: "Laboratorijsko ispitivanje", href: "/usluge/laboratorijsko-ispitivanje" },
    ],
  },
  { name: "Rješenja", href: "/rjesenja" },
  { name: "Projekti", href: "/projekti" },
  { name: "Proizvodi", href: "/proizvodi" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setVisible(false);
      } else {
        // Scrolling up - show
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-4">
        {/* Pill navbar */}
        <nav className="relative flex items-center justify-between px-3 py-2 bg-white rounded-full shadow-lg shadow-neutral-900/10">

          {/* Logo in circle */}
          <Link
            href="/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900"
          >
            <Image
              src="/images/logo-fsb.png"
              alt="FSB"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation - centered */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-all"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-64 bg-white rounded-2xl shadow-xl shadow-neutral-900/10 border border-neutral-100 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center justify-between px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-600 transition-colors group"
                        >
                          <span>{child.name}</span>
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side: Language switcher + CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            {/* Language Switcher */}
            <div
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-all"
              >
                <Globe className="h-4 w-4" />
                HR
                <ChevronDown className={`h-4 w-4 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full pt-2">
                  <div className="w-32 bg-white rounded-xl shadow-xl shadow-neutral-900/10 border border-neutral-100 py-1 overflow-hidden">
                    <a
                      href="https://www.firestopping.eu/en/"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      English
                    </a>
                    <a
                      href="https://www.firestopping.eu/de/"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      Deutsch
                    </a>
                    <span
                      className="block px-4 py-2 text-sm text-brand-600 bg-brand-50"
                    >
                      Hrvatski
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button - pill shape */}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-brand-500 transition-colors"
            >
              <span>Kontakt</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-[9999]" style={{ minHeight: '100vh', minWidth: '100vw' }}>
          <div className="flex flex-col min-h-screen bg-white">
            {/* Mobile header */}
            <div className="flex items-center justify-between p-5">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900">
                  <Image
                    src="/images/logo-fsb.png"
                    alt="FSB"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </Link>
              <button
                type="button"
                className="p-2.5 text-neutral-700 hover:bg-neutral-100 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex-1 overflow-y-auto px-5 py-8">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-4 text-xl font-medium text-neutral-900 hover:bg-neutral-50 rounded-2xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {item.children && <ChevronDown className="h-5 w-5 text-neutral-400" />}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-neutral-600 hover:text-brand-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Language Switcher */}
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-500">
                    <Globe className="h-4 w-4" />
                    Jezik
                  </div>
                  <div className="flex gap-2 px-4 mt-2">
                    <a
                      href="https://www.firestopping.eu/en/"
                      className="flex-1 py-3 text-center rounded-xl font-medium bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      EN
                    </a>
                    <a
                      href="https://www.firestopping.eu/de/"
                      className="flex-1 py-3 text-center rounded-xl font-medium bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      DE
                    </a>
                    <span
                      className="flex-1 py-3 text-center rounded-xl font-medium bg-brand-500 text-white"
                    >
                      HR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="p-5">
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-brand-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontaktirajte nas
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

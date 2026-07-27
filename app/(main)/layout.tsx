import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Odluka klijenta (srpanj 2026.): smjer K1 "Inženjerska preciznost" postao je
// glavna stranica — ConceptSwitcher je uklonjen, koncepti ostaju na /koncept-*.
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

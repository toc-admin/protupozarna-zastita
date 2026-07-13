import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-brand-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-900">
          Stranica nije pronađena
        </h2>
        <p className="mt-2 text-neutral-600 max-w-md mx-auto">
          Stranica koju tražite ne postoji ili je premještena.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">Povratak na početnu</Button>
          <Button href="/kontakt" variant="outline">
            Kontaktirajte nas
          </Button>
        </div>
      </div>
    </div>
  );
}

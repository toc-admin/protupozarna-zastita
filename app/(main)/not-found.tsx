import Link from "next/link";
import { container, monoLabel } from "@/components/site/tokens";

// Tehnička 404 — jezik tehničkog lista: mono kod greške, papirnata osnova.
export default function NotFound() {
  return (
    <div className="bg-paper text-ink">
      <div className={`${container} min-h-[60vh] py-24 flex items-center`}>
        <div className="w-full max-w-2xl">
          <span className={monoLabel}>Greška / dokument ne postoji</span>
          <h1 className="mt-6 font-mono text-7xl md:text-8xl font-semibold tracking-tight">
            404
          </h1>
          <div className="mt-8 border-t border-ink pt-5">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Stranica nije pronađena
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed max-w-md">
              Stranica koju tražite ne postoji ili je premještena. Provjerite
              adresu ili se vratite na početnu stranicu.
            </p>
          </div>
          <dl className="mt-8 border-t border-hairline font-mono text-[12px] max-w-md">
            {[
              ["Status", "404 — nije pronađeno"],
              ["Preporuka", "povratak na početnu"],
            ].map(([dt, dd]) => (
              <div
                key={dt}
                className="grid grid-cols-2 gap-4 py-2.5 border-b border-hairline"
              >
                <dt className="uppercase tracking-[0.12em] text-neutral-400">
                  {dt}
                </dt>
                <dd>{dd}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Povratak na početnu
            </Link>
            <Link
              href="/kontakt"
              className="px-7 py-3.5 font-semibold border border-ink hover:bg-neutral-100 transition-colors"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

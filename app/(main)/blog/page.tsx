import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/site/Reveal";
import SectionHead from "@/components/site/SectionHead";
import { container, monoLabel } from "@/components/site/tokens";
import { getAllBlogPosts, getBlogCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stručni članci i novosti iz područja protupožarne zaštite - propisi, tehničke smjernice, savjeti za održavanje i više.",
};

// Datum u mono zapisu kataloga (15. 03. 2026.)
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("hr-HR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <div className="bg-paper text-ink">
      <PageHeader
        title="Blog"
        subtitle="Novosti i članci"
        description="Stručni članci, novosti iz industrije i praktični savjeti za protupožarnu zaštitu."
      />

      {/* ── 1.0 Katalog članaka ────────────────────────── */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal>
          <SectionHead index="1.0" title="Svi članci" note={`${posts.length} zapisa`} />
        </Reveal>

        {/* Kategorije */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-3 py-1.5 bg-ink text-white font-mono text-[11px] uppercase tracking-[0.14em]">
              Svi članci
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1.5 border border-hairline text-neutral-600 font-mono text-[11px] uppercase tracking-[0.14em]"
              >
                {category}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Članci kao numerirani redovi kataloga */}
        <div className="border-t border-hairline">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 4) * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-12 gap-x-4 gap-y-2 items-baseline border-b border-hairline py-7 transition-colors hover:bg-white"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[12px] text-red">
                  B.{String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-3 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-red">{post.category}</span>
                  <span className="text-neutral-400">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <div className="col-span-10 col-start-3 md:col-span-7 md:col-start-5">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <span className="hidden md:block md:col-span-1 text-right text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Kontakt CTA — tinta ────────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${container} py-20 md:py-28`}>
          <Reveal>
            <span className={monoLabel}>Kontaktirajte nas</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.05]">
              Trebate stručnu pomoć za protupožarnu zaštitu?
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Kontaktirajte nas za besplatne konzultacije. Naš tim stručnjaka stoji vam
              na raspolaganju za sve vaše upite i projekte.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Zatražite ponudu
              </Link>
              <a
                href="tel:+38513496811"
                className="px-7 py-3.5 font-semibold border border-white/30 hover:bg-white/10 transition-colors"
              >
                +385 1 3496 811
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

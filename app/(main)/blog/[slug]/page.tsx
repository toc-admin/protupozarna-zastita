import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { container, monoLabel } from "@/components/site/tokens";
import { getBlogPostBySlug, getBlogPostSlugs, getAllBlogPosts } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Članak nije pronađen" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Datum u mono zapisu (15. 03. 2026.)
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("hr-HR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="bg-paper text-ink">
      {/* ── Zaglavlje članka — antracit ────────────────── */}
      <section className="bg-anthracite text-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-40 md:pb-16">
          <Link
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400 hover:text-paper transition-colors"
          >
            ← Svi članci
          </Link>

          <span className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-red">
            {post.category}
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
            {post.title}
          </h1>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-hairline-dark pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
            <div className="flex gap-2">
              <dt>Autor</dt>
              <dd className="text-paper">{post.author}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Datum</dt>
              <dd className="text-paper">{formatDate(post.date)}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Čitanje</dt>
              <dd className="text-paper">{post.readTime}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── Fotografija — dokumentarna, puna boja ──────── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden border border-hairline">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>

      {/* ── Sadržaj članka ─────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Glavni tekst — čitka mjera */}
            <div className="lg:col-span-3">
              <article className="max-w-2xl">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold tracking-tight text-ink border-t border-hairline pt-6 mt-10 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-ink mt-8 mb-3">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter(item => item.startsWith("- "));
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 my-4 text-neutral-600 leading-relaxed">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (/^\d+\./.test(paragraph)) {
                    const items = paragraph.split("\n").filter(item => /^\d+\./.test(item));
                    return (
                      <ol key={index} className="list-decimal pl-6 space-y-2 my-4 text-neutral-600 leading-relaxed marker:font-mono marker:text-red">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.includes("**")) {
                    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={index} className="text-neutral-600 leading-relaxed my-4">
                        {parts.map((part, i) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="text-neutral-600 leading-relaxed my-4">
                      {paragraph}
                    </p>
                  );
                })}
              </article>

              {/* Panel za upit */}
              <Reveal>
                <div className="mt-12 border border-hairline bg-white p-8">
                  <span className={monoLabel}>Trebate stručnu pomoć?</span>
                  <p className="mt-4 text-neutral-600 leading-relaxed max-w-lg">
                    Naš tim stručnjaka stoji vam na raspolaganju za sve upite vezane uz
                    protupožarnu zaštitu.
                  </p>
                  <Link
                    href="/kontakt"
                    className="mt-6 inline-block px-7 py-3.5 bg-red text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Kontaktirajte nas
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Bočni stupac */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {relatedPosts.length > 0 && (
                  <div className="border border-hairline bg-white p-6">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      Povezani članci
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {relatedPosts.map((p) => (
                        <li
                          key={p.slug}
                          className="border-t border-hairline pt-4 first:border-t-0 first:pt-0"
                        >
                          <Link href={`/blog/${p.slug}`} className="group block">
                            <p className="font-bold leading-snug group-hover:text-red transition-colors line-clamp-2">
                              {p.title}
                            </p>
                            <p className="mt-1 font-mono text-[11px] text-neutral-400">
                              {formatDate(p.date)}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
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

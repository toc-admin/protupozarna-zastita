import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Check, ChevronRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ContactCTA from "@/components/sections/ContactCTA";
import Button from "@/components/ui/Button";
import {
  getProductCategoryBySlug,
  getProductsByCategory,
  getProductWithCategory,
  getAllProductCategories,
  getAllProducts,
} from "@/lib/content";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const categories = getAllProductCategories();
  const products = getAllProducts();

  const params: { slug: string[] }[] = [];

  // Category pages
  categories.forEach((category) => {
    params.push({ slug: [category.slug] });
  });

  // Product pages
  products.forEach((product) => {
    params.push({ slug: [product.category, product.slug] });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length === 1) {
    const category = getProductCategoryBySlug(slug[0]);
    if (!category) {
      return { title: "Kategorija nije pronađena" };
    }
    return {
      title: category.title,
      description: category.description,
    };
  }

  if (slug.length === 2) {
    const product = getProductWithCategory(slug[0], slug[1]);
    if (!product) {
      return { title: "Proizvod nije pronađen" };
    }
    return {
      title: product.title,
      description: product.description,
    };
  }

  return { title: "Stranica nije pronađena" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  // Category page
  if (slug.length === 1) {
    const category = getProductCategoryBySlug(slug[0]);
    if (!category) {
      notFound();
    }

    const products = getProductsByCategory(slug[0]);
    const allCategories = getAllProductCategories();

    return (
      <>
        <Hero
          title={category.title}
          subtitle="Proizvodi"
          description={category.description}
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
              <Link href="/proizvodi" className="hover:text-brand-500 transition-colors">
                Proizvodi
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-neutral-900">{category.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar - Categories */}
              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <h3 className="font-semibold text-neutral-900 mb-4">Kategorije</h3>
                  <ul className="space-y-2">
                    {allCategories.map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          href={`/proizvodi/${cat.slug}`}
                          className={`block px-4 py-2 rounded-lg transition-colors ${
                            cat.slug === slug[0]
                              ? "bg-brand-50 text-brand-500 font-medium"
                              : "text-neutral-600 hover:bg-neutral-50"
                          }`}
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Products grid */}
              <div className="lg:col-span-3">
                {products.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-neutral-600">
                      Nema proizvoda u ovoj kategoriji.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/proizvodi/${product.category}/${product.slug}`}
                        className="group bg-white rounded-xl border border-neutral-100 overflow-hidden hover:shadow-md hover:border-brand-100 transition-all"
                      >
                        <div className="relative aspect-[4/3] bg-neutral-100">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <p className="text-sm text-brand-500 font-medium mb-1">
                            {product.manufacturer}
                          </p>
                          <h3 className="font-semibold text-neutral-900 group-hover:text-brand-500 transition-colors">
                            {product.title}
                          </h3>
                          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </>
    );
  }

  // Product detail page
  if (slug.length === 2) {
    const product = getProductWithCategory(slug[0], slug[1]);
    if (!product) {
      notFound();
    }

    const category = getProductCategoryBySlug(slug[0]);
    const relatedProducts = getProductsByCategory(slug[0])
      .filter((p) => p.slug !== slug[1])
      .slice(0, 3);

    return (
      <>
        <Hero
          title={product.title}
          subtitle={product.manufacturer}
          description={product.description}
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
              <Link href="/proizvodi" className="hover:text-brand-500 transition-colors">
                Proizvodi
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href={`/proizvodi/${slug[0]}`}
                className="hover:text-brand-500 transition-colors"
              >
                {category?.title}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-neutral-900">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100 mb-8">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  {product.fullDescription.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("- ")) {
                      const items = paragraph
                        .split("\n")
                        .filter((line) => line.startsWith("- "));
                      return (
                        <ul key={index} className="space-y-2 my-6">
                          {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-brand-500 mt-1 flex-shrink-0" />
                              <span>{item.substring(2)}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="text-neutral-600">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  {/* Specifications */}
                  <div className="bg-neutral-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-neutral-900 mb-4">
                      Tehničke specifikacije
                    </h3>
                    <dl className="space-y-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key}>
                          <dt className="text-sm text-neutral-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </dt>
                          <dd className="font-semibold text-neutral-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Datasheet */}
                  {product.datasheet && (
                    <a
                      href={product.datasheet}
                      className="flex items-center gap-3 p-4 bg-brand-50 rounded-xl hover:bg-brand-100 transition-colors"
                    >
                      <Download className="h-5 w-5 text-brand-500" />
                      <div>
                        <p className="font-medium text-neutral-900">
                          Preuzmi tehnički list
                        </p>
                        <p className="text-sm text-neutral-600">PDF dokument</p>
                      </div>
                    </a>
                  )}

                  {/* CTA */}
                  <div className="bg-white border border-neutral-100 rounded-2xl p-6">
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Zatražite ponudu
                    </h3>
                    <p className="text-neutral-600 text-sm mb-6">
                      Kontaktirajte nas za cijenu i dostupnost ovog proizvoda.
                    </p>
                    <Button href="/kontakt" className="w-full">
                      Kontaktirajte nas
                    </Button>
                  </div>

                  {/* Related products */}
                  {relatedProducts.length > 0 && (
                    <div className="bg-white border border-neutral-100 rounded-2xl p-6">
                      <h3 className="font-semibold text-neutral-900 mb-4">
                        Slični proizvodi
                      </h3>
                      <ul className="space-y-3">
                        {relatedProducts.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/proizvodi/${p.category}/${p.slug}`}
                              className="text-neutral-600 hover:text-brand-500 transition-colors"
                            >
                              {p.title}
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

        <ContactCTA />
      </>
    );
  }

  notFound();
}

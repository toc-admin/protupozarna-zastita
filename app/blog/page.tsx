import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAllBlogPosts, getBlogCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stručni članci i novosti iz područja protupožarne zaštite - propisi, tehničke smjernice, savjeti za održavanje i više.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Novosti i članci"
        description="Stručni članci, novosti iz industrije i praktični savjeti za protupožarnu zaštitu."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            <span className="px-4 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium">
              Svi članci
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-200 cursor-pointer transition-colors"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-500 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("hr-HR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-brand-600 font-medium">
                      <span>Pročitaj više</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

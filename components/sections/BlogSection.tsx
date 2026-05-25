"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getLatestBlogPosts } from "@/lib/content";

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const posts = getLatestBlogPosts(3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">
              Novosti
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
              Iz našeg bloga
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-xl">
              Stručni članci, novosti iz industrije i praktični savjeti za protupožarnu zaštitu.
            </p>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-3 px-6 py-3 bg-neutral-900 hover:bg-brand-500 text-white rounded-full font-semibold transition-all"
          >
            <span>Svi članci</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-slideUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
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
                        month: "short",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

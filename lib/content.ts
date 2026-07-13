import uslugeData from "@/content/usluge.json";
import rjesenjaData from "@/content/rjesenja.json";
import projektiData from "@/content/projekti.json";
import proizvodiDataRaw from "@/content/proizvodi.json";
import blogData from "@/content/blog.json";
import karijeraData from "@/content/karijera.json";

// Types
export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  icon: string;
}

export interface Solution {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  specifications: {
    fireResistance: string;
    standard: string;
    application: string;
  };
  category: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  scope: string[];
  image: string;
  gallery: string[];
  featured: boolean;
}

export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface Product {
  slug: string;
  category: string;
  title: string;
  manufacturer: string;
  description: string;
  fullDescription: string;
  specifications: Record<string, string>;
  image: string;
  datasheet?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  featured: boolean;
}

export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  active: boolean;
}

export interface Company {
  name: string;
  description: string;
}

// Type cast the imported data
const proizvodiData = {
  categories: proizvodiDataRaw.categories as ProductCategory[],
  products: proizvodiDataRaw.products as unknown as Product[],
};

// Services
export function getAllServices(): Service[] {
  return uslugeData.services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return uslugeData.services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return uslugeData.services.map((service) => service.slug);
}

// Solutions
export function getAllSolutions(): Solution[] {
  return rjesenjaData.solutions;
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return rjesenjaData.solutions.find((solution) => solution.slug === slug);
}

export function getSolutionSlugs(): string[] {
  return rjesenjaData.solutions.map((solution) => solution.slug);
}

// Projects
export function getAllProjects(): Project[] {
  return projektiData.projects;
}

export function getFeaturedProjects(): Project[] {
  return projektiData.projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projektiData.projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projektiData.projects.map((project) => project.slug);
}

export function getProjectCategories(): string[] {
  const derived = projektiData.projects.map((project) => project.category);
  return [...new Set([...projektiData.categories, ...derived])];
}

// Products
export function getAllProductCategories(): ProductCategory[] {
  return proizvodiData.categories;
}

export function getProductCategoryBySlug(slug: string): ProductCategory | undefined {
  return proizvodiData.categories.find((category) => category.slug === slug);
}

export function getProductCategorySlugs(): string[] {
  return proizvodiData.categories.map((category) => category.slug);
}

export function getAllProducts(): Product[] {
  return proizvodiData.products;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return proizvodiData.products.filter((product) => product.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return proizvodiData.products.find((product) => product.slug === slug);
}

export function getProductSlugs(): string[] {
  return proizvodiData.products.map((product) => product.slug);
}

export function getProductWithCategory(
  categorySlug: string,
  productSlug: string
): Product | undefined {
  return proizvodiData.products.find(
    (product) => product.category === categorySlug && product.slug === productSlug
  );
}

// Blog Posts
export function getAllBlogPosts(): BlogPost[] {
  return blogData.posts;
}

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  return [...blogData.posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.posts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return blogData.posts.map((post) => post.slug);
}

export function getBlogCategories(): string[] {
  const categories = blogData.posts.map((post) => post.category);
  return [...new Set(categories)];
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogData.posts.filter((post) => post.featured);
}

// Jobs / Careers
export function getAllJobs(): Job[] {
  return karijeraData.jobs;
}

export function getActiveJobs(): Job[] {
  return karijeraData.jobs.filter((job) => job.active);
}

export function getJobBySlug(slug: string): Job | undefined {
  return karijeraData.jobs.find((job) => job.slug === slug);
}

export function getJobSlugs(): string[] {
  return karijeraData.jobs.map((job) => job.slug);
}

export function getCompanies(): Company[] {
  return karijeraData.companies;
}

export function getCareerContactEmail(): string {
  return karijeraData.contactEmail;
}

import { generateLocalBusinessSchema } from "@/lib/metadata";

export default function StructuredData() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}

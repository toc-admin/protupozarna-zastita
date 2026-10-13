"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

// Obrazac u jeziku tehničkog lista: ravni rubovi, hairline obrubi,
// numerirane mono etikete. Logika slanja je nepromijenjena.
const labelClass =
  "block font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-2";
const fieldClass =
  "w-full px-4 py-3 bg-white border border-hairline focus:border-red outline-none transition-colors";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    // In production, this would send to an API endpoint or email service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === "success") {
    return (
      <div className="border border-hairline bg-white p-8">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 bg-red" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
            Poruka poslana
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight">Hvala vam na upitu.</h3>
        <p className="mt-2 text-neutral-600 leading-relaxed">
          Odgovorit ćemo vam u najkraćem mogućem roku.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-red hover:opacity-80 transition-opacity"
        >
          Pošaljite novu poruku →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            <span className="text-red">01 /</span> Ime i prezime *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Ivan Horvat"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            <span className="text-red">02 /</span> Email adresa *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClass}
            placeholder="ivan@primjer.hr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>
            <span className="text-red">03 /</span> Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass}
            placeholder="+385 1 234 5678"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            <span className="text-red">04 /</span> Tvrtka
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Naziv tvrtke"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          <span className="text-red">05 /</span> Vaša poruka *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${fieldClass} resize-none`}
          placeholder="Ukratko opišite zbog čega se javljate..."
        />
      </div>

      {status === "error" && (
        <div className="border border-red bg-white p-4 text-sm text-red">
          Došlo je do greške. Molimo pokušajte ponovno ili nas kontaktirajte telefonom.
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Slanje..." : "Pošaljite upit"}
      </Button>
    </form>
  );
}

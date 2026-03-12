"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Adding a subject field as expected by your backend schema
    const payload = {
      ...data,
      subject: `Portfolio Inquiry from ${data.name}`,
    };

    try {
      // CORRECTED PATH: Removed "/api" to match your express route
      const res = await fetch("https://pbackend.themeronway.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const errorData = await res.json();
        console.error("Backend refusal:", errorData);
        setStatus("error");
      }
    } catch (err) {
      console.error("Connection failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="max-w-xl mx-auto py-20 px-6">
      <div className="mb-8 border-l-2 border-[#D4AF37] pl-4">
        <h2 className="text-white font-mono text-xs uppercase tracking-[0.4em]">
          Initialize_Contact
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 font-mono text-[10px]">
        <input
          required
          name="name"
          placeholder="IDENTIFY_NAME"
          className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-[#D4AF37] transition-colors text-white"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="ELECTRONIC_MAIL_ADDR"
          className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-[#D4AF37] transition-colors text-white"
        />
        <textarea
          required
          name="message"
          rows={4}
          placeholder="MESSAGE_CONTENT_PAYLOAD"
          className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-[#D4AF37] transition-colors text-white"
        />

        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all disabled:opacity-50"
        >
          {status === "idle" && "Execute_Send()"}
          {status === "sending" && "Processing..."}
          {status === "success" && "Transmission_Complete"}
          {status === "error" && "Error_Retry?"}
        </button>
      </form>
    </section>
  );
}

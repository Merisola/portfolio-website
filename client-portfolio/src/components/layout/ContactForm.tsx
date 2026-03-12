"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Send, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    name: "X",
    icon: <Twitter size={14} />,
    url: "https://twitter.com/TheMeronWay",
  },
  { name: "TG", icon: <Send size={14} />, url: "https://t.me/Danytt00" },
  {
    name: "LN",
    icon: <Linkedin size={14} />,
    url: "https://www.linkedin.com/in/merontsegay/",
  },
  {
    name: "GH",
    icon: <Github size={14} />,
    url: "https://github.com/Merisola",
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const payload = { ...data, subject: `Portfolio Inquiry from ${data.name}` };

    try {
      const res = await fetch("https://pbackend.themeronway.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16"
    >
      <div>
        <div className="mb-8 border-l-2 border-[#D4AF37] pl-4">
          <h2 className="text-white font-mono text-xs uppercase tracking-[0.4em]">
            Initialize_Contact
          </h2>
        </div>

        <p className="text-slate-400 font-mono text-[10px] leading-relaxed mb-8 italic">
          Awaiting connection parameters. Use the form to initiate a
          structured data transfer, or reach out via external protocols below.
        </p>

        {/* Social Link Grid with Formal Icons */}
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(212, 175, 55, 0.1)",
              }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 p-3 border border-white/5 bg-white/[0.02] text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors font-mono text-[10px]"
            >
              <span className="text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
                {social.icon}
              </span>
              <span className="tracking-widest uppercase">
                {social.name}_PROTO
              </span>
            </motion.a>
          ))}
        </div>
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

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all disabled:opacity-50"
        >
          {status === "idle" && "Execute_Send()"}
          {status === "sending" && "Processing..."}
          {status === "success" && "Transmission_Complete"}
          {status === "error" && "Error_Retry?"}
        </motion.button>
      </form>
    </section>
  );
}

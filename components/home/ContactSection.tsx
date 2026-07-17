"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SocialIconMap } from "@/components/ui/SocialIcons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FormInput } from "@/components/ui/FormInput";
import { FormTextarea } from "@/components/ui/FormTextarea";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import type { ContactFormData, ModalState } from "@/types";

const SOCIAL_LINKS = [
  { icon: "YouTube" as const, label: "YouTube", href: "#", color: "hover:text-red-600" },
  { icon: "Facebook" as const, label: "Facebook", href: "#", color: "hover:text-blue-600" },
  { icon: "Instagram" as const, label: "Instagram", href: "#", color: "hover:text-pink-600" },
  { icon: "LinkedIn" as const, label: "LinkedIn", href: "#", color: "hover:text-blue-700" },
];

const EMPTY_FORM: ContactFormData = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [modal, setModal] = useState<ModalState>({
    open: false,
    type: null,
    context: null,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setModal({ open: true, type: "error", context: "contact" });
      return;
    }
    setModal({ open: true, type: "success", context: "contact" });
    setForm(EMPTY_FORM);
  }

  function closeModal() {
    setModal({ open: false, type: null, context: null });
  }

  return (
    <section id="contacts" className="bg-secondary/20 py-20 md:py-28">
      <Modal state={modal} onClose={closeModal} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Get In Touch"
          title="Contact Us"
          subtitle="Have a question, recipe idea, or partnership proposal? We'd love to hear from you."
        />
        <div className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormInput
                label="Name"
                placeholder="Adaeze"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <FormInput
                label="Surname"
                placeholder="Okonkwo"
                value={form.surname}
                onChange={(e) => setForm({ ...form, surname: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormInput
                label="Phone"
                type="tel"
                placeholder="+234 800 000 0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <FormInput
                label="Email"
                type="email"
                placeholder="hello@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <FormTextarea
              label="Message"
              placeholder="Tell us what's on your mind..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" size="lg" className="w-full">
              Send Message <ArrowRight size={18} />
            </Button>
          </form>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Follow our culinary journey
            </p>
            <div className="flex justify-center gap-4">
              {SOCIAL_LINKS.map(({ icon, label, href, color }) => {
                const Icon = SocialIconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:shadow-md ${color}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

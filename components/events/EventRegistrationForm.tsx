"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FormInput } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { EventRegistrationData, ModalState } from "@/types";

const EMPTY_FORM: EventRegistrationData = {
  name: "",
  surname: "",
  phone: "",
  email: "",
};

export function EventRegistrationForm() {
  const [form, setForm] = useState<EventRegistrationData>(EMPTY_FORM);
  const [modal, setModal] = useState<ModalState>({
    open: false,
    type: null,
    context: null,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setModal({ open: true, type: "error", context: "event" });
      return;
    }
    setModal({ open: true, type: "success", context: "event" });
    setForm(EMPTY_FORM);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <SectionTitle
        label="Secure Your Spot"
        title="Register for the Event"
        subtitle="Spaces are limited. Register now to guarantee your place at the table."
      />
      <Modal
        state={modal}
        onClose={() => setModal({ open: false, type: null, context: null })}
      />
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-sm"
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
        <Button type="submit" size="lg" className="w-full">
          Register Now <ArrowRight size={18} />
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Confirmation will be sent to your email within 24 hours.
        </p>
      </form>
    </div>
  );
}

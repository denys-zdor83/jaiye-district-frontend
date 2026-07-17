"use client";

import { CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./Button";
import type { ModalState } from "@/types";

interface ModalProps {
  state: ModalState;
  onClose: () => void;
}

export function Modal({ state, onClose }: ModalProps) {
  if (!state.open) return null;

  const isSuccess = state.type === "success";

  const title = isSuccess
    ? state.context === "event"
      ? "Registration Successful!"
      : "Message Sent!"
    : state.context === "event"
      ? "Registration Failed"
      : "Message Failed";

  const message = isSuccess
    ? state.context === "event"
      ? "You're registered for the event. We'll send you confirmation details by email."
      : "Thank you for reaching out! We'll get back to you within 24 hours."
    : "Something went wrong. Please check your details and try again.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
            isSuccess ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {isSuccess ? (
            <CheckCircle className="text-green-600" size={32} />
          ) : (
            <AlertCircle className="text-red-600" size={32} />
          )}
        </div>
        <h3
          id="modal-title"
          className="mb-2 font-serif text-2xl font-bold text-foreground"
        >
          {title}
        </h3>
        <p className="mb-6 text-muted-foreground">{message}</p>
        <Button
          variant={isSuccess ? "primary" : "danger"}
          onClick={onClose}
          aria-label="Close modal"
        >
          {isSuccess ? "Close" : "Try Again"}
        </Button>
      </div>
    </div>
  );
}

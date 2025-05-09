// Using .npmrc with legacy-peer-deps=true for formspree as it has
// not been updated to React 19. Bandaid solution but potential
// issues should be minor in scope.

"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkggpzbr");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto flex flex-col items-center gap-2 px-6"
    >
      <label htmlFor="email" className="self-start text-xl">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="mb-2 h-8 w-full rounded-md bg-slate-800 p-2 shadow-md shadow-accent/20"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email" className="self-start text-xl">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="s h-96 w-full rounded-md bg-slate-800 p-2 shadow-md shadow-accent/20"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="mr-4 mt-6 flex w-3/4 transform items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-3 text-2xl text-white shadow-md shadow-accent/20 transition hover:scale-105 hover:bg-accent hover:shadow-xl lg:w-2/4"
      >
        <p>Send</p>
        <Send></Send>
      </button>
    </form>
  );
}

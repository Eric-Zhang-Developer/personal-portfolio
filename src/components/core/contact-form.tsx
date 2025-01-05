"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkggpzbr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 container mx-auto items-center">
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" className="w-11/12"/>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">Message</label>
      <textarea id="message" name="message" className="w-11/12"/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="transform bg-primary text-white text-xl w-2/4
          py-2 px-4 mr-4 rounded-lg shadow-md transition hover:shadow-xl hover:bg-accent hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
}

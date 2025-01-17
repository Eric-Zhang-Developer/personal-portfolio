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
      className="flex flex-col gap-2 container mx-auto items-center px-6"
    >
      <label htmlFor="email" className="text-xl self-start">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full h-8 mb-2 shadow-md rounded-md p-2 bg-slate-800 shadow-accent/20"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email" className="text-xl self-start ">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full h-96 shadow-md shadow-accent/20 rounded-md p-2 bg-slate-800 s"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="transform bg-slate-800 text-white text-2xl mt-6
          py-3 px-4 mr-4 rounded-lg shadow-md shadow-accent/20 flex justify-center items-center gap-2
          transition hover:shadow-xl hover:bg-accent hover:scale-105
          w-3/4 lg:w-2/4"
      >
        <p>Send</p>
        <Send></Send>
      </button>
    </form>
  );
}

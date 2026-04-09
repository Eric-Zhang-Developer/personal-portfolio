"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkggpzbr");

  if (state.succeeded) {
    return (
      <div className="p-6 text-[14px]">
        <span className="text-matrix">[&nbsp;&nbsp;OK&nbsp;&nbsp;]</span>{" "}
        <span className="text-matrix-text">
          message sent successfully.
        </span>
        <span className="cursor ml-1" aria-hidden="true" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-7">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-[13px] text-matrix-dim"
        >
          <span className="text-matrix">$</span> input{" "}
          <span className="text-amber">--email</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full border border-matrix/30 bg-transparent px-3 py-2.5 font-mono text-[14px] text-matrix-text placeholder:text-matrix-dim/40 focus:border-matrix focus:shadow-[0_0_12px_rgba(0,255,65,0.15)] focus:outline-none"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-[12px] text-danger"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[13px] text-matrix-dim"
        >
          <span className="text-matrix">$</span> input{" "}
          <span className="text-amber">--message</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          placeholder="Write your message here..."
          className="w-full resize-none border border-matrix/30 bg-transparent px-3 py-2.5 font-mono text-[14px] text-matrix-text placeholder:text-matrix-dim/40 focus:border-matrix focus:shadow-[0_0_12px_rgba(0,255,65,0.15)] focus:outline-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-[12px] text-danger"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="border border-matrix px-5 py-2.5 font-mono text-[13px] text-matrix transition-all hover:bg-matrix hover:text-black hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-matrix"
      >
        {state.submitting ? "[ sending... ]" : "$ send_message →"}
      </button>
    </form>
  );
}

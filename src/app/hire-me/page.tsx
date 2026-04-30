import BookingEmbed from "@/components/core/booking-embed";

export default function HireMe() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-10 md:px-7">
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">~/hire-me/book-call.sh</span>
        </div>

        <div className="space-y-4 p-4 md:p-6">
          <div>
            <h1 className="text-xl font-bold text-matrix">
              Book a 15-minute intro call
            </h1>
            <p className="mt-2 text-[13px] text-matrix-dim">
              Talk shop, talk roles, or just say hi.
            </p>
          </div>

          <BookingEmbed />
        </div>
      </section>
    </div>
  );
}

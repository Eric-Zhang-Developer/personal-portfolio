"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookingEmbed() {
  useEffect(() => {
    const calTheme = {
      "cal-brand": "#00ff41",
      "cal-brand-emphasis": "#33ff66",
      "cal-brand-text": "#000000",
      "cal-bg": "#071108",
      "cal-bg-subtle": "#0d1a0f",
      "cal-bg-emphasis": "#162319",
      "cal-border": "rgba(0, 255, 65, 0.22)",
      "cal-border-booker": "rgba(0, 255, 65, 0.35)",
      "cal-text": "#d7ffe0",
      "cal-text-emphasis": "#ffffff",
      "cal-text-subtle": "#8fbf9a",
      radius: "0px",
    };

    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: calTheme,
          dark: calTheme,
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="mx-auto w-full max-w-[1040px] overflow-hidden bg-black/30">
      <Cal
        namespace="15min"
        calLink="ericzhang/15min"
        style={{ width: "100%", height: "100%" }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "dark",
        }}
      />
    </div>
  );
}

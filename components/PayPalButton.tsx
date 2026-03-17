"use client";

import { useEffect } from "react";
import Script from "next/script";

const CLIENT_ID = "BAA8fMVeor0gI3MVZF-jmFEXolXGdCVTOFmoZ4xSpgBzfz5YwBwHjHMHXCHOhQQoZNL-IeJ-1D798McLhw";
const BUTTON_ID = "C9ZVEWV3TK6Z8";

export default function PayPalButton({ containerId = "paypal-donate-container" }: { containerId?: string }) {
  useEffect(() => {
    const render = () => {
      const win = window as any;
      if (win.paypal) {
        win.paypal.HostedButtons({ hostedButtonId: BUTTON_ID }).render(`#${containerId}`);
      }
    };

    // If SDK already loaded, render immediately
    const win = window as any;
    if (win.paypal) {
      render();
    } else {
      document.addEventListener("paypal-sdk-ready", render, { once: true });
    }

    return () => {
      document.removeEventListener("paypal-sdk-ready", render);
    };
  }, [containerId]);

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&components=hosted-buttons&enable-funding=venmo&currency=USD`}
        crossOrigin="anonymous"
        onLoad={() => document.dispatchEvent(new Event("paypal-sdk-ready"))}
      />
      <div id={containerId} className="min-h-[50px]" />
    </>
  );
}

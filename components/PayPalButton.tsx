"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const CLIENT_ID = "BAA8fMVeor0gI3MVZF-jmFEXolXGdCVTOFmoZ4xSpgBzfz5YwBwHjHMHXCHOhQQoZNL-IeJ-1D798McLhw";
const BUTTON_ID = "C9ZVEWV3TK6Z8";

interface Props {
  containerId?: string;
}

export default function PayPalButton({ containerId = "paypal-donate-container" }: Props) {
  const rendered = useRef(false);

  const renderButton = () => {
    const win = window as any;
    if (!win.paypal || rendered.current) return;
    const el = document.getElementById(containerId);
    if (!el || el.children.length > 0) return;
    rendered.current = true;
    win.paypal.HostedButtons({ hostedButtonId: BUTTON_ID }).render(`#${containerId}`);
  };

  useEffect(() => {
    renderButton();
    document.addEventListener("paypal-sdk-ready", renderButton, { once: true });
    return () => document.removeEventListener("paypal-sdk-ready", renderButton);
  }, [containerId]);

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&components=hosted-buttons&enable-funding=venmo&currency=USD`}
        crossOrigin="anonymous"
        onLoad={() => {
          document.dispatchEvent(new Event("paypal-sdk-ready"));
          renderButton();
        }}
      />
      <div id={containerId} className="w-full" />
    </>
  );
}

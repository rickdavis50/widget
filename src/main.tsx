import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { precacheUrls } from "./precache";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const sendPrecache = () => {
      navigator.serviceWorker.ready
        .then((registration) => {
          const entryUrl = import.meta.url;
          const urls = [entryUrl, ...precacheUrls];
          registration.active?.postMessage({ type: "PRECACHE_URLS", urls });
        })
        .catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(sendPrecache, { timeout: 2000 });
    } else {
      setTimeout(sendPrecache, 1500);
    }
  });
}

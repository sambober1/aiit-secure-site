import { useEffect } from "react";

export default function useFadeIn(): void {
  useEffect(() => {
    const fadeEls: NodeListOf<HTMLElement> = document.querySelectorAll("[data-fade]");
    if (!fadeEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}

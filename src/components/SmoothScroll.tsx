"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializa o Lenis com configurações para uma experiência "High-End" (Mac/Apple style)
    const lenis = new Lenis({
      duration: 1.2,        // Tempo de transição (1.2 = suave, menos agressivo que o nativo)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de aceleração estilo Apple
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
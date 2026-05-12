"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 1.8);

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationId = 0;

    const TWO_PI = Math.PI * 2;

    const mouse = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    };

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    // --------------------------
    // THEME COLORS
    // --------------------------

    let colors = {
      star: "",
      orbit: "",
      ring: "",
      comet: "",
      sunCore: "",
      sunGlow: "",
      nebula1: "",
      nebula2: "",
      nebula3: "",
    };

    function loadTheme() {
      const styles = getComputedStyle(
        document.documentElement
      );

      colors = {
        star: styles.getPropertyValue("--space-star"),
        orbit: styles.getPropertyValue("--space-orbit"),
        ring: styles.getPropertyValue("--space-ring"),
        comet: styles.getPropertyValue("--space-comet"),
        sunCore: styles.getPropertyValue("--space-sun-core"),
        sunGlow: styles.getPropertyValue("--space-sun-glow"),
        nebula1: styles.getPropertyValue("--space-nebula-1"),
        nebula2: styles.getPropertyValue("--space-nebula-2"),
        nebula3: styles.getPropertyValue("--space-nebula-3"),
      };
    }

    loadTheme();

    const observer = new MutationObserver(() => {
      loadTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // --------------------------
    // RESIZE
    // --------------------------

    function resize() {
    if (!ctx) return;
    if (!canvas) return;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    // --------------------------
    // STARS
    // --------------------------

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5,
      a: Math.random(),
    }));

    // --------------------------
    // PLANETS
    // --------------------------

    const planets = [
      {
        orbit: 120,
        size: 4,
        color: "var(--space-planet-1)",
        speed: 0.012,
        angle: 0,
      },

      {
        orbit: 180,
        size: 6,
        color: "var(--space-planet-2)",
        speed: -0.009,
        angle: 0,
      },

      {
        orbit: 250,
        size: 8,
        color: "var(--space-planet-3)",
        speed: 0.006,
        angle: 0,
      },

      {
        orbit: 340,
        size: 11,
        color: "var(--space-planet-4)",
        speed: -0.004,
        angle: 0,
        ring: true,
      },

      {
        orbit: 440,
        size: 14,
        color: "var(--space-planet-5)",
        speed: 0.003,
        angle: 0,
      },
    ];

    // --------------------------
    // MOUSE PARALLAX
    // --------------------------

    function onMouseMove(e: MouseEvent) {
      mouse.tx =
        (e.clientX - width / 2) * 0.015;

      mouse.ty =
        (e.clientY - height / 2) * 0.015;
    }

    window.addEventListener("mousemove", onMouseMove, {
      passive: true,
    });

    // --------------------------
    // DRAW
    // --------------------------

    function drawNebulas() {
      const nebulas = [
        colors.nebula1,
        colors.nebula2,
        colors.nebula3,
      ];

      nebulas.forEach((color, i) => {
    if (!ctx) return;
          const gradient =
          ctx.createRadialGradient(
            width * (0.2 + i * 0.3),
            height * (0.3 + i * 0.15),
            0,
            width * (0.2 + i * 0.3),
            height * (0.3 + i * 0.15),
            300
          );

        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          width * (0.2 + i * 0.3),
          height * (0.3 + i * 0.15),
          300,
          0,
          TWO_PI
        );

        ctx.fill();
      });
    }

    function draw(time: number) {
    if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      ctx.save();

      ctx.translate(mouse.x, mouse.y);

      drawNebulas();

      // stars
      ctx.fillStyle = colors.star;

      for (const s of stars) {
        ctx.globalAlpha =
          s.a * (0.7 + Math.sin(time * 0.001 + s.x) * 0.3);

        ctx.beginPath();

        ctx.arc(s.x, s.y, s.r, 0, TWO_PI);

        ctx.fill();
      }

      ctx.globalAlpha = 1;

      const cx = width / 2;
      const cy = height / 2;

      // sun
      const sunGradient =
        ctx.createRadialGradient(
          cx,
          cy,
          20,
          cx,
          cy,
          100
        );

      sunGradient.addColorStop(0, colors.sunCore);
      sunGradient.addColorStop(1, colors.sunGlow);

      ctx.fillStyle = sunGradient;

      ctx.beginPath();

      ctx.arc(cx, cy, 50, 0, TWO_PI);

      ctx.fill();

      // planets
      planets.forEach((planet, index) => {
        planet.angle += prefersReducedMotion
          ? 0
          : planet.speed;

        const orbitScale = 0.82 + index * 0.03;

        // orbit
        ctx.strokeStyle = colors.orbit;

        ctx.globalAlpha =
          0.3 +
          Math.sin(time * 0.001 + index) * 0.1;

        ctx.beginPath();

        ctx.ellipse(
          cx,
          cy,
          planet.orbit,
          planet.orbit * orbitScale,
          0,
          0,
          TWO_PI
        );

        ctx.stroke();

        const x =
          cx +
          planet.orbit *
            Math.cos(planet.angle);

        const y =
          cy +
          planet.orbit *
            orbitScale *
            Math.sin(planet.angle);

        ctx.globalAlpha = 1;

        ctx.beginPath();

        ctx.fillStyle = getComputedStyle(
          document.documentElement
        ).getPropertyValue(planet.color.replace("var(", "").replace(")", ""));

        ctx.arc(
          x,
          y,
          planet.size,
          0,
          TWO_PI
        );

        ctx.fill();

        // ring
        if (planet.ring) {
          ctx.beginPath();

          ctx.strokeStyle = colors.ring;

          ctx.lineWidth = 1.5;

          ctx.ellipse(
            x,
            y,
            planet.size + 12,
            planet.size + 4,
            Math.PI / 5,
            0,
            TWO_PI
          );

          ctx.stroke();
        }
      });

      // comet
      const cometX =
        ((time * 0.12) % (width + 300)) - 150;

      const cometY =
        height * 0.18 +
        Math.sin(time * 0.001) * 60;

      const cometGradient =
        ctx.createLinearGradient(
          cometX - 70,
          cometY,
          cometX,
          cometY
        );

      cometGradient.addColorStop(0, "transparent");
      cometGradient.addColorStop(1, colors.comet);

      ctx.strokeStyle = cometGradient;

      ctx.lineWidth = 2;

      ctx.beginPath();

      ctx.moveTo(cometX - 70, cometY);

      ctx.lineTo(cometX, cometY);

      ctx.stroke();

      ctx.beginPath();

      ctx.fillStyle = colors.comet;

      ctx.arc(cometX, cometY, 3, 0, TWO_PI);

      ctx.fill();

      ctx.restore();

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);

      observer.disconnect();

      window.removeEventListener(
        "mousemove",
        onMouseMove
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
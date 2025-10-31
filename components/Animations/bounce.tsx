"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const BouncingBalls: React.FC<{
  ballCount?: number;
  ballRadius?: number;
  gravity?: number;
}> = ({ ballCount = 5, ballRadius = 12, gravity = 1 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { Engine, Render, Runner, World, Bodies } = Matter;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const rect = container.getBoundingClientRect();
    const width = rect.width || 310;
    const height = rect.height || 400;

    const render = Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Walls with perfect bounce
    const wallOptions = {
      isStatic: true,
      restitution: 1,
      friction: 0,
      frictionStatic: 0,
      render: { visible: false },
    };

    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);

    const walls = [floor, ceiling, leftWall, rightWall];

    // Create multiple balls starting from the top
    const balls = Array.from({ length: ballCount }).map(() =>
      Bodies.circle(Math.random() * width, 0, ballRadius, {
        restitution: 1,
        friction: 0,
        frictionAir: 0,
        render: {
        fillStyle: `hsl(${Math.random() * 360}, 80%, 50%)`, // dark, muted colors
        strokeStyle: "#9dff09ff", // optional subtle stroke
          lineWidth: 2,
        },
      })
    );

    World.add(engine.world, [...walls, ...balls]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && render.canvas.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [ballCount, ballRadius, gravity]);

  return (
    <div
      className="p-0 h-full"
      ref={containerRef}
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "transparent", // ✅ transparent container
      }}
    />
  );
};

export default BouncingBalls;

"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const STATE_LAYER_PRESSED_OPACITY = 0.12;

export default function Ripple({
  className,
  ...props
}: React.ComponentProps<"span">) {
  const rippleRef = useRef<HTMLSpanElement | null>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const rippleEl = rippleRef.current;
    if (!rippleEl) return;

    const rippleContainerEl = rippleEl.parentElement;
    if (!rippleContainerEl) return;

    const onPointerDown = createPointerDownHandler(
      rippleEl,
      rippleContainerEl,
      animationRef,
    );

    const clear = () => {
      setOpacity(rippleEl, 0);
    };

    rippleContainerEl.addEventListener("pointerdown", onPointerDown);
    rippleContainerEl.addEventListener("pointerup", clear);
    rippleContainerEl.addEventListener("pointerleave", clear);
    rippleContainerEl.addEventListener("pointercancel", clear);

    return () => {
      animationRef.current?.cancel();
      rippleContainerEl.removeEventListener("pointerdown", onPointerDown);
      rippleContainerEl.removeEventListener("pointerup", clear);
      rippleContainerEl.removeEventListener("pointerleave", clear);
      rippleContainerEl.removeEventListener("pointercancel", clear);
    };
  }, []);

  return (
    <span
      ref={rippleRef}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none opacity-0 bg-current",
        className,
      )}
      {...props}
    />
  );
}

function createPointerDownHandler(
  rippleEl: HTMLElement,
  rippleContainerEl: HTMLElement,
  animationRef: React.RefObject<Animation | null>,
) {
  return function onPointerDown(event: PointerEvent) {
    animationRef.current?.cancel();

    setOpacity(rippleEl, STATE_LAYER_PRESSED_OPACITY);

    const rect = rippleContainerEl.getBoundingClientRect();
    const pointer = getPointerPosition(event, rect);
    const { size: startSize, radius: startRadius } = getStartSize(rect);

    const maxRadius = getMaxRadiusFromPoint(pointer, rect);
    const scale = maxRadius / startRadius;
    const duration = getRippleDuration(maxRadius);

    const offsetX = pointer.x - startRadius;
    const offsetY = pointer.y - startRadius;

    animationRef.current = rippleEl.animate(
      [
        {
          width: `${startSize}px`,
          height: `${startSize}px`,
          borderRadius: "50%",
          transform: `translate(${offsetX}px, ${offsetY}px) scale(1)`,
          opacity: STATE_LAYER_PRESSED_OPACITY,
        },
        {
          width: `${startSize}px`,
          height: `${startSize}px`,
          borderRadius: "50%",
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
        },
      ],
      {
        duration,
        easing: "linear",
        fill: "forwards",
      },
    );
  };
}

type Point = { x: number; y: number };

function getPointerPosition(event: PointerEvent, rect: DOMRect): Point {
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function getStartSize(rect: DOMRect) {
  const maxDim = Math.max(rect.width, rect.height);
  const size = maxDim * 0.2;
  return { size, radius: size / 2 };
}

function getMaxRadiusFromPoint(point: Point, rect: DOMRect) {
  const { x, y } = point;
  return Math.max(
    Math.hypot(x, y),
    Math.hypot(rect.width - x, y),
    Math.hypot(x, rect.height - y),
    Math.hypot(rect.width - x, rect.height - y),
  );
}

function getRippleDuration(maxRadius: number) {
  const RIPPLE_SPEED = 0.8;
  const MIN_DURATION = 400;
  const MAX_DURATION = 1000;

  return Math.min(
    MAX_DURATION,
    Math.max(MIN_DURATION, maxRadius / RIPPLE_SPEED),
  );
}

function setOpacity(el: HTMLElement, value: number) {
  el.style.opacity = String(value);
}

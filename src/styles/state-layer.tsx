"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Ripple from "./ripple";

type Props = {
  withRipple?: boolean;
};

export default function StateLayer({
  withRipple,
  className,
  ...props
}: React.ComponentProps<"span"> & Props) {
  const stateLayerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const stateLayerEl = stateLayerRef.current;
    if (!stateLayerEl) return;

    const containerEl = stateLayerEl.parentElement;
    if (!containerEl) return;

    const onPointerEnter = () => {
      stateLayerEl.classList.add("state-hovered");
    };

    const onPointerDown = () => {
      stateLayerEl.classList.add("state-pressed");
    };

    const onPointerUp = () => {
      stateLayerEl.classList.remove("state-pressed");
    };

    const onPointerLeave = () => {
      stateLayerEl.classList.remove("state-hovered", "state-pressed");
    };

    const onPointerCancel = () => {
      stateLayerEl.classList.remove("state-hovered", "state-pressed");
    };

    containerEl.addEventListener("pointerenter", onPointerEnter);
    containerEl.addEventListener("pointerdown", onPointerDown);
    containerEl.addEventListener("pointerup", onPointerUp);
    containerEl.addEventListener("pointerleave", onPointerLeave);
    containerEl.addEventListener("pointercancel", onPointerCancel);

    return () => {
      containerEl.removeEventListener("pointerenter", onPointerEnter);
      containerEl.removeEventListener("pointerdown", onPointerDown);
      containerEl.removeEventListener("pointerup", onPointerUp);
      containerEl.removeEventListener("pointerleave", onPointerLeave);
      containerEl.removeEventListener("pointercancel", onPointerCancel);
    };
  }, []);

  return (
    <span
      ref={stateLayerRef}
      aria-hidden="true"
      className={cn("state-layer")}
      {...props}
    >
      {withRipple && <Ripple />}
    </span>
  );
}

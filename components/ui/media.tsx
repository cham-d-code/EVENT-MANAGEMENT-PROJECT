"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";

export function Media({ alt, className = "", onError, ...props }: ImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    const fillClasses = props.fill ? "absolute inset-0 h-full w-full" : "";
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-ink-elevated via-ink-soft to-ink text-fog-dim ${fillClasses} ${className}`}
      >
        <ImageOff size={28} strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={(e) => {
        setErrored(true);
        onError?.(e);
      }}
      {...props}
    />
  );
}

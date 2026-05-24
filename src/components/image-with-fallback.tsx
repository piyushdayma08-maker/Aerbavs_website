"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const PLACEHOLDER = "/images/placeholder.svg";

type Props = Omit<ImageProps, "onError"> & { fallback?: string };

export function ImageWithFallback({ src, fallback = PLACEHOLDER, alt, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored]   = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      unoptimized={
        (typeof imgSrc === "string" && imgSrc.endsWith(".svg")) || props.unoptimized
      }
      onError={() => {
        if (!errored) {
          setErrored(true);
          setImgSrc(fallback);
        }
      }}
    />
  );
}

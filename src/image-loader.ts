'use client';

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (basePath && src.startsWith('/') && !src.startsWith(basePath)) {
    return `${basePath}${src}`;
  }
  return src;
}

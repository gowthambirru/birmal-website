export function BubbleDecorations() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Pure CSS radial atmospheric illumination — zero blur filter repaints */}
      <div
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(15, 169, 66, 0.24) 0%, rgba(15, 169, 66, 0) 68%)",
        }}
      />
      <div
        className="absolute -bottom-36 right-[-6%] w-[580px] h-[580px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.18) 0%, rgba(6, 59, 56, 0) 70%)",
        }}
      />
      {/* Ultra-fine architectural ring lines */}
      <svg
        className="absolute top-12 right-12 w-64 h-64 text-emerald-400/[0.08] hidden lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" />
        <circle
          cx="100"
          cy="100"
          r="64"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}

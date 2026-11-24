export function WaveDivider({
  flip = false,
  fillColor = "#FFFFFF",
  bgColor = "transparent",
  className = "",
}: {
  flip?: boolean;
  fillColor?: string;
  bgColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none relative pointer-events-none select-none ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-8 md:h-12 lg:h-14 block ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,12 C360,52 1080,52 1440,12 L1440,56 L0,56 Z"
          fill={fillColor}
          opacity="0.22"
        />
        <path
          d="M0,22 C420,56 1020,56 1440,22 L1440,56 L0,56 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

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
      className={`w-full overflow-hidden leading-none relative ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-10 md:h-16 lg:h-20 block ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C240,65 480,80 720,50 C960,20 1200,65 1440,25 L1440,80 L0,80 Z"
          fill={fillColor}
        />
        <path
          d="M0,20 C320,70 640,40 960,60 C1200,75 1360,45 1440,35 L1440,80 L0,80 Z"
          fill={fillColor}
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

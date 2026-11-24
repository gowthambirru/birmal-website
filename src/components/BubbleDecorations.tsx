export function BubbleDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Translucent soap bubbles with light emerald shimmer */}
      <div
        className="absolute rounded-full border border-emerald-400/40 bg-emerald-300/10 backdrop-blur-[1px] animate-bubble-slow"
        style={{ width: "90px", height: "90px", top: "15%", left: "8%" }}
      >
        <div className="absolute top-2 left-3 w-4 h-4 rounded-full bg-white/40 blur-[1px]" />
      </div>

      <div
        className="absolute rounded-full border border-teal-300/30 bg-teal-200/10 backdrop-blur-[1px] animate-bubble-fast"
        style={{ width: "50px", height: "50px", top: "45%", left: "4%" }}
      >
        <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-white/50 blur-[0.5px]" />
      </div>

      <div
        className="absolute rounded-full border border-emerald-400/30 bg-emerald-200/10 backdrop-blur-[1px] animate-bubble-slow"
        style={{ width: "120px", height: "120px", top: "65%", right: "8%" }}
      >
        <div className="absolute top-3 left-4 w-6 h-6 rounded-full bg-white/30 blur-[1px]" />
      </div>

      <div
        className="absolute rounded-full border border-teal-200/40 bg-white/5 backdrop-blur-[1px] animate-bubble-fast"
        style={{ width: "65px", height: "65px", top: "25%", right: "18%" }}
      >
        <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/40 blur-[1px]" />
      </div>

      <div
        className="absolute rounded-full border border-emerald-300/30 bg-emerald-400/10 backdrop-blur-[1px] animate-bubble-slow"
        style={{ width: "40px", height: "40px", bottom: "18%", left: "45%" }}
      />
    </div>
  );
}

interface NavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoto: (i: number) => void;
  accent: string;
  slideTitle: string;
  controlsVisible: boolean;
  showLeftAccent?: boolean;
}

export default function Navigation({
  current,
  total,
  onPrev,
  onNext,
  onGoto,
  accent,
  slideTitle,
  controlsVisible,
  showLeftAccent,
}: NavigationProps) {
  const controlsClass = controlsVisible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <div
      className={[
        "nav-autohide absolute bottom-0 left-0 right-0 z-20",
        "px-4 sm:px-6 lg:px-10 py-3 sm:py-4 bg-white border-t-2 border-gray-100 select-none",
        "transition-opacity duration-200",
        controlsClass,
      ].join(" ")}
    >
      {showLeftAccent && (
        <div
          className="absolute left-0 top-0 bottom-0 w-2 sm:w-3"
          style={{ background: accent }}
        />
      )}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        {/* Prev */}
        <div className="flex justify-start">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className={[
              "flex items-center gap-2 rounded-xl font-bold transition-all text-white",
              "px-3 py-2 text-sm sm:px-5 sm:py-3 sm:text-base lg:px-6 lg:py-3 lg:text-lg",
              "disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95",
            ].join(" ")}
            style={{ background: current === 0 ? "#9CA3AF" : accent }}
          >
            <span aria-hidden>{"<-"}</span>
            <span className="hidden sm:inline">Anterior</span>
          </button>
        </div>

        {/* Center info */}
        <div className="flex flex-col items-center gap-2">
          <span className="hidden sm:block text-gray-400 text-sm sm:text-base font-medium truncate max-w-[18rem] sm:max-w-xs text-center">
            {slideTitle}
          </span>
          <div className="flex items-center gap-2 overflow-x-auto max-w-[70vw] sm:max-w-md px-1">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onGoto(i)}
                className="transition-all hover:scale-125 shrink-0"
                aria-label={`Ir para o slide ${i + 1}`}
                style={{
                  width: i === current ? 22 : 9,
                  height: 9,
                  borderRadius: i === current ? 5 : "50%",
                  background: i === current ? accent : "#D1D5DB",
                }}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm font-semibold">
            {current + 1} / {total}
          </span>
        </div>

        {/* Next */}
        <div className="flex justify-end">
          <button
            onClick={onNext}
            disabled={current === total - 1}
            className={[
              "flex items-center gap-2 rounded-xl font-bold transition-all text-white",
              "px-3 py-2 text-sm sm:px-5 sm:py-3 sm:text-base lg:px-6 lg:py-3 lg:text-lg",
              "disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95",
            ].join(" ")}
            style={{ background: current === total - 1 ? "#9CA3AF" : accent }}
          >
            <span className="hidden sm:inline">Proximo</span>
            <span aria-hidden>{"->"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

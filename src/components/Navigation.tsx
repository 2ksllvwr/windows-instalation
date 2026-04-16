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
  onExportPdf: () => void;
  exporting: boolean;
  exportLabel?: string;
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
  onExportPdf,
  exporting,
  exportLabel,
}: NavigationProps) {
  const controlsClass = controlsVisible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <div
      className={[
        "nav-autohide absolute bottom-0 left-0 right-0 z-20",
        "px-4 sm:px-6 lg:px-10 py-3 sm:py-4 bg-white select-none",
        "shadow-[0_-12px_30px_rgba(0,0,0,0.06)]",
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
        <div className="flex justify-end items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onExportPdf}
            disabled={exporting}
            className={[
              "rounded-xl shadow-sm border-2 border-gray-100 bg-white text-gray-800",
              "w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center",
              "hover:scale-105 active:scale-95 transition-all",
              exporting ? "opacity-60 cursor-wait" : "",
            ].join(" ")}
            aria-label="Baixar PDF"
            title={exportLabel ?? "Baixar PDF"}
          >
            {exporting ? (
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="animate-spin"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  opacity="0.25"
                />
                <path
                  d="M21 12a9 9 0 0 0-9-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M12 3v9m0 0 3.5-3.5M12 12 8.5 8.5M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
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

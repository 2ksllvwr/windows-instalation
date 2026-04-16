import { useState, useEffect, useCallback, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { slides } from "./slides";
import CoverSlide from "./components/slides/CoverSlide";
import AgendaSlide from "./components/slides/AgendaSlide";
import StepsSlide from "./components/slides/StepsSlide";
import CardsSlide from "./components/slides/CardsSlide";
import TableSlide from "./components/slides/TableSlide";
import TipSlide from "./components/slides/TipSlide";
import ClosingSlide from "./components/slides/ClosingSlide";
import Navigation from "./components/Navigation";

function renderSlide(slide: (typeof slides)[number]) {
  switch (slide.type) {
    case "cover":
      return <CoverSlide data={slide as Parameters<typeof CoverSlide>[0]["data"]} />;
    case "agenda":
      return <AgendaSlide data={slide as Parameters<typeof AgendaSlide>[0]["data"]} />;
    case "steps":
      return <StepsSlide data={slide as Parameters<typeof StepsSlide>[0]["data"]} />;
    case "cards":
      return <CardsSlide data={slide as Parameters<typeof CardsSlide>[0]["data"]} />;
    case "table":
      return <TableSlide data={slide as Parameters<typeof TableSlide>[0]["data"]} />;
    case "tip":
      return <TipSlide data={slide as Parameters<typeof TipSlide>[0]["data"]} />;
    case "closing":
      return <ClosingSlide data={slide as Parameters<typeof ClosingSlide>[0]["data"]} />;
    default:
      return null;
  }
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [_animDir, setAnimDir] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [displayed, setDisplayed] = useState(0);

  const [controlsVisible, setControlsVisible] = useState(false);
  const [alwaysShowControls, setAlwaysShowControls] = useState(false);
  const hideControlsTimerRef = useRef<number | null>(null);

  const slideAreaRef = useRef<HTMLDivElement | null>(null);
  const exportFrameRef = useRef<HTMLDivElement | null>(null);
  const [exportSlideIndex, setExportSlideIndex] = useState<number | null>(null);
  const [exportFrameSize, setExportFrameSize] = useState<{ w: number; h: number } | null>(null);
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState<{ current: number; total: number } | null>(
    null
  );
  const [exportError, setExportError] = useState<string | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || animating) return;
      setAnimDir(index > current ? "next" : "prev");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setDisplayed(index);
        setAnimating(false);
      }, 50);
    },
    [current, animating]
  );

  const goNext = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Touch devices don't have hover/mousemove; keep controls reachable.
  useEffect(() => {
    const mql = window.matchMedia("(hover: none)");
    const update = () => setAlwaysShowControls(mql.matches);
    update();

    mql.addEventListener("change", update);

    return () => {
      mql.removeEventListener("change", update);
    };
  }, []);

  const revealControls = useCallback(() => {
    if (alwaysShowControls) return;
    setControlsVisible(true);

    if (hideControlsTimerRef.current) {
      window.clearTimeout(hideControlsTimerRef.current);
    }

    hideControlsTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 1400);
  }, [alwaysShowControls]);

  useEffect(() => {
    return () => {
      if (hideControlsTimerRef.current) {
        window.clearTimeout(hideControlsTimerRef.current);
      }
    };
  }, []);

  const slide = slides[displayed];
  const accentColor = slide.accent;
  const controlsShouldShow = alwaysShowControls || controlsVisible || exporting;

  const exportToPdf = useCallback(async () => {
    if (exporting) return;
    setExportError(null);

    // Export at a fixed size (original design target). This keeps memory usage predictable
    // even if the on-screen container is very large (e.g. 4K monitors).
    const w = 1400;
    const h = 900;

    const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));

    setExporting(true);
    setExportProgress({ current: 0, total: slides.length });
    setExportFrameSize({ w, h });
    setExportSlideIndex(0);

    try {
      // Wait for fonts + initial render of the export frame.
      const fonts = (document as Document & { fonts?: { ready?: Promise<unknown> } }).fonts;
      if (fonts?.ready) await fonts.ready;

      await nextFrame();
      await nextFrame();

      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [w, h] });

      for (let i = 0; i < slides.length; i++) {
        setExportProgress({ current: i + 1, total: slides.length });
        setExportSlideIndex(i);

        await nextFrame();
        await nextFrame();

        const frame = exportFrameRef.current;
        if (!frame) throw new Error("Export frame not mounted");

        const canvas = await html2canvas(frame, {
          backgroundColor: "#ffffff",
          useCORS: true,
          // Fixed export size keeps memory predictable; higher scale improves text metrics/quality.
          scale: 2,
          logging: false,
          onclone: (doc) => {
            // Tailwind v4 uses OKLCH in CSS variables by default. html2canvas doesn't
            // support parsing OKLCH, so override the few colors we use to hex/RGB.
            const root = doc.documentElement;
            const set = (name: string, value: string) => root.style.setProperty(name, value);

            set("--color-white", "#ffffff");

            set("--color-gray-50", "#f9fafb");
            set("--color-gray-100", "#f3f4f6");
            set("--color-gray-200", "#e5e7eb");
            set("--color-gray-300", "#d1d5db");
            set("--color-gray-400", "#9ca3af");
            set("--color-gray-500", "#6b7280");
            set("--color-gray-600", "#4b5563");
            set("--color-gray-700", "#374151");
            set("--color-gray-800", "#1f2937");
            set("--color-gray-900", "#111827");

            set("--color-red-100", "#fee2e2");
            set("--color-red-600", "#dc2626");

            // html2canvas text rendering can shift baselines inside pills/badges.
            // Force a tighter line-height in the cloned DOM to match the on-screen layout.
            const style = doc.createElement("style");
            style.textContent = `
              span.rounded-full, a.rounded-full, button.rounded-full {
                line-height: 1 !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
              }
              .rounded-full {
                line-height: 1 !important;
              }
            `;
            doc.head.appendChild(style);
          },
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.92);
        if (i > 0) pdf.addPage([w, h], "landscape");
        pdf.addImage(imgData, "JPEG", 0, 0, w, h);
      }

      pdf.save("apresentacao.pdf");
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      // eslint-disable-next-line no-console
      console.error("PDF export failed:", e);
      setExportError(`Falha ao exportar PDF: ${msg}`);
    } finally {
      setExporting(false);
      setExportProgress(null);
      setExportSlideIndex(null);
      setExportFrameSize(null);
    }
  }, [exporting]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div
        className="w-full bg-white flex flex-col overflow-hidden relative"
        onMouseMove={revealControls}
        onMouseEnter={revealControls}
        onFocusCapture={revealControls}
        onMouseLeave={() => setControlsVisible(false)}
        style={{
          height: "calc(100vh - 2rem)",
          borderRadius: "20px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
        }}
      >
        {/* Slide area */}
        <div ref={slideAreaRef} className="flex-1 relative overflow-hidden">
          {slides.map((s, i) => {
            const isActive = i === displayed;
            const offset = i - current;

            let translateX = "100%";
            if (isActive) translateX = "0%";
            else if (offset < 0) translateX = "-100%";

            return (
              <div
                key={s.id}
                className="absolute inset-0 w-full h-full"
                style={{
                  transform: `translateX(${translateX})`,
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                  zIndex: isActive ? 10 : 0,
                }}
              >
                {renderSlide(s)}
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <Navigation
          current={current}
          total={slides.length}
          onPrev={goPrev}
          onNext={goNext}
          onGoto={goTo}
          accent={accentColor}
          slideTitle={slide.title}
          controlsVisible={controlsShouldShow}
          showLeftAccent={slide.type === "cover"}
          onExportPdf={exportToPdf}
          exporting={exporting}
          exportLabel={
            exporting && exportProgress
              ? `Exportando ${exportProgress.current}/${exportProgress.total}`
              : exportError
                ? exportError
                : "Baixar PDF"
          }
        />
      </div>

      {exportSlideIndex !== null && exportFrameSize && (
        <div
          ref={exportFrameRef}
          style={{
            position: "fixed",
            left: "-10000px",
            top: "0px",
            width: `${exportFrameSize.w}px`,
            height: `${exportFrameSize.h}px`,
            background: "#ffffff",
          }}
        >
          {renderSlide(slides[exportSlideIndex])}
        </div>
      )}

      {/* Keyboard hint */}
      <p className="mt-3 text-gray-400 text-sm font-medium">
        Use as teclas {"<-"} {"->"} ou clique nos botoes para navegar
      </p>
    </div>
  );
}

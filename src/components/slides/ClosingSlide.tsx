import WindowsLogo from "../WindowsLogo";
import Icon from "../Icon";

interface ClosingSlideProps {
  data: {
    title: string;
    subtitle: string;
    accent: string;
    icon: string;
    content: {
      steps: { icon: string; label: string }[];
      message: string;
      hashtags: string[];
    };
  };
}

export default function ClosingSlide({ data }: ClosingSlideProps) {
  const { steps, message, hashtags } = data.content;
  const iconEl =
    data.icon === "🪟" ? (
      <WindowsLogo accent={data.accent} className="w-24 h-24 sm:w-28 sm:h-28 mx-auto" />
    ) : (
      data.icon
    );

  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center px-16 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-5"
        style={{ background: data.accent, transform: "translate(35%, -35%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-5"
        style={{ background: data.accent, transform: "translate(-35%, 35%)" }}
      />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: data.accent }} />
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: data.accent }} />

      <div className="relative z-10 text-center max-w-5xl w-full">
        {/* Icon */}
        <div
          className="text-8xl mb-6 inline-block"
          style={{ filter: "drop-shadow(0 4px 24px rgba(0,120,212,0.12))" }}
        >
          {iconEl}
        </div>

        {/* Title */}
        <h2 className="text-6xl font-black mb-3" style={{ color: data.accent }}>
          {data.title}
        </h2>
        <p className="text-2xl text-gray-400 font-medium mb-10">{data.subtitle}</p>

        {/* Journey steps */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm border-2"
                  style={{ borderColor: data.accent, background: `${data.accent}10` }}
                >
                  <Icon icon={step.icon} accent={data.accent} className="text-3xl w-10 h-10" />
                </div>
                <span className="text-sm font-bold mt-1 text-gray-500">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="text-2xl text-gray-300 mb-4">{"->"}</span>
              )}
            </div>
          ))}
        </div>

        {/* Message */}
        <div
          className="rounded-2xl px-10 py-6 mb-8 border-l-8"
          style={{ background: `${data.accent}08`, borderColor: data.accent }}
        >
          <p className="text-2xl font-semibold text-gray-700 leading-relaxed italic">
            "{message}"
          </p>
        </div>

        {/* Hashtags */}
        <div className="flex justify-center gap-4 flex-wrap">
          {hashtags.map((tag, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full font-bold text-xl text-white"
              style={{ background: data.accent }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import WindowsLogo from "../WindowsLogo";

interface CoverSlideProps {
  data: {
    title: string;
    subtitle: string;
    accent: string;
    icon: string;
    content: {
      tags: string[];
      author: string;
      version: string;
    };
  };
}

export default function CoverSlide({ data }: CoverSlideProps) {
  const renderIcon = () => {
    // The 🪟 emoji isn't available on all OS/browser emoji fonts.
    // Use an SVG mark for consistent rendering.
    if (data.icon === "🪟") {
      return <WindowsLogo accent={data.accent} className="w-28 h-28 sm:w-32 sm:h-32" />;
    }
    return <span className="text-9xl">{data.icon}</span>;
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center relative overflow-hidden px-6 sm:px-10 lg:px-16">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full opacity-5"
        style={{ background: data.accent, transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full opacity-5"
        style={{ background: data.accent, transform: "translate(-30%, 30%)" }}
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-2 sm:w-3"
        style={{ background: data.accent }}
      />

      {/* Top bar */}
      <div
        className="absolute top-0 left-2 sm:left-3 right-0 h-1.5"
        style={{ background: data.accent, opacity: 0.15 }}
      />

      <div className="relative z-10 text-center max-w-5xl">
        {/* Icon */}
        <div
          className="mb-8 inline-block"
          style={{ filter: "drop-shadow(0 4px 24px rgba(0,120,212,0.15))" }}
        >
          {renderIcon()}
        </div>

        {/* Title */}
        <h1
          className="text-7xl font-black mb-6 leading-tight tracking-tight"
          style={{ color: data.accent }}
        >
          {data.title}
        </h1>

        {/* Subtitle */}
        <p className="text-3xl font-medium text-gray-500 mb-12">
          {data.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {data.content.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-lg font-semibold border-2 leading-none"
              style={{ borderColor: data.accent, color: data.accent, background: `${data.accent}10` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-center gap-8 text-gray-400 text-xl">
          <span className="font-medium">{data.content.author}</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: data.accent }}
          />
          <span
            className="inline-flex items-center justify-center font-bold px-4 py-1 rounded-full text-white text-lg leading-none"
            style={{ background: data.accent }}
          >
            {data.content.version}
          </span>
        </div>
      </div>
    </div>
  );
}

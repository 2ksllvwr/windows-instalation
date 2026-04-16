import Icon from "../Icon";

interface Step {
  num: string;
  title: string;
  desc: string;
  tip: string;
}

interface StepsSlideProps {
  data: {
    title: string;
    subtitle: string;
    accent: string;
    icon: string;
    content: {
      tool: string;
      toolUrl: string;
      steps: Step[];
    };
  };
}

export default function StepsSlide({ data }: StepsSlideProps) {
  const { steps, tool, toolUrl } = data.content;

  return (
    <div className="w-full h-full bg-white flex flex-col px-14 py-8 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: data.accent }} />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Icon icon={data.icon} accent={data.accent} className="text-5xl w-14 h-14" />
          <div>
            <h2 className="text-4xl font-black text-gray-800 leading-tight">{data.title}</h2>
            <p className="text-xl text-gray-400 font-medium">{data.subtitle}</p>
          </div>
        </div>
        {tool && (
          <div
            className="px-5 py-2 rounded-full text-white font-bold text-xl"
            style={{ background: data.accent }}
          >
            🛠 {tool} {toolUrl ? `— ${toolUrl}` : ""}
          </div>
        )}
      </div>

      {/* Steps */}
      <div className="flex-1 grid grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl border-2 border-gray-100 overflow-hidden"
            style={{ borderTopColor: data.accent, borderTopWidth: 4 }}
          >
            <div
              className="px-5 py-3 flex items-center gap-3"
              style={{ background: `${data.accent}10` }}
            >
              <span
                className="text-2xl font-black"
                style={{ color: data.accent }}
              >
                {step.num}
              </span>
              <span className="text-xl font-bold text-gray-800 leading-tight">{step.title}</span>
            </div>
            <div className="flex-1 px-5 py-4 bg-white">
              <p className="text-lg text-gray-600 leading-relaxed mb-3">{step.desc}</p>
              {step.tip && (
                <div
                  className="flex items-start gap-2 rounded-xl px-4 py-2"
                  style={{ background: `${data.accent}10` }}
                >
                  <span className="text-lg mt-0.5">💡</span>
                  <p className="text-base font-medium" style={{ color: data.accent }}>
                    {step.tip}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

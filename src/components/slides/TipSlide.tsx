import Icon from "../Icon";

interface TipGroup {
  icon: string;
  title: string;
  items: string[];
}

interface TipSlideProps {
  data: {
    title: string;
    subtitle: string;
    accent: string;
    icon: string;
    content: {
      tips: TipGroup[];
    };
  };
}

export default function TipSlide({ data }: TipSlideProps) {
  const { tips } = data.content;

  return (
    <div className="w-full h-full bg-white flex flex-col px-14 py-10 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: data.accent }} />

      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <Icon icon={data.icon} accent={data.accent} className="text-5xl w-14 h-14" />
        <div>
          <h2 className="text-5xl font-black text-gray-800 leading-tight">{data.title}</h2>
          <p className="text-2xl text-gray-400 font-medium">{data.subtitle}</p>
        </div>
      </div>

      {/* Tip Groups */}
      <div className="flex-1 grid grid-cols-3 gap-6">
        {tips.map((group, i) => (
          <div
            key={i}
            className="flex flex-col rounded-3xl overflow-hidden border-2 border-gray-100"
          >
            {/* Group Header */}
            <div
              className="flex items-center gap-4 px-7 py-5"
              style={{ background: `${data.accent}12` }}
            >
              <Icon icon={group.icon} accent={data.accent} className="text-4xl w-12 h-12" />
              <h3 className="text-2xl font-black" style={{ color: data.accent }}>
                {group.title}
              </h3>
            </div>

            {/* Group Items */}
            <div className="flex-1 bg-white px-7 py-5">
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="mt-2 min-w-[10px] h-2.5 w-2.5 rounded-full flex-shrink-0"
                      style={{ background: data.accent }}
                    />
                    <span className="text-xl text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

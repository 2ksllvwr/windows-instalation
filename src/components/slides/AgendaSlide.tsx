import Icon from "../Icon";

interface AgendaItem {
  num: string;
  label: string;
  icon: string;
}

interface AgendaSlideProps {
  data: {
    title: string;
    subtitle: string;
    accent: string;
    icon: string;
    content: {
      items: AgendaItem[];
    };
  };
}

export default function AgendaSlide({ data }: AgendaSlideProps) {
  const { items } = data.content;
  const half = Math.ceil(items.length / 2);
  const left = items.slice(0, half);
  const right = items.slice(half);

  return (
    <div className="w-full h-full bg-white flex flex-col px-16 py-10 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: data.accent }} />

      {/* Header */}
      <div className="flex items-center gap-5 mb-10">
        <Icon icon={data.icon} accent={data.accent} className="text-5xl w-14 h-14" />
        <div>
          <h2 className="text-5xl font-black text-gray-800 leading-tight">{data.title}</h2>
          <p className="text-2xl text-gray-400 font-medium">{data.subtitle}</p>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-2 gap-5">
        {[left, right].map((col, ci) => (
          <div key={ci} className="flex flex-col gap-4">
            {col.map((item) => (
              <div
                key={item.num}
                className="flex items-center gap-5 p-5 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:border-opacity-60 transition-all group"
                style={{ borderLeftColor: data.accent, borderLeftWidth: 5 }}
              >
                <span
                  className="text-2xl font-black min-w-[3rem] text-center"
                  style={{ color: data.accent }}
                >
                  {item.num}
                </span>
                <Icon icon={item.icon} accent={data.accent} className="text-3xl w-10 h-10" />
                <span className="text-2xl font-semibold text-gray-700 leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

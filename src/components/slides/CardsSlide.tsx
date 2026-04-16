import Icon from "../Icon";

interface CardItem {
  icon: string;
  title: string;
  badge?: string;
  desc?: string;
  items: string[];
}

interface CardsSlideProps {
  data: {
    title: string;
    subtitle: string;
    accent: string;
    icon: string;
    content: {
      cards: CardItem[];
    };
  };
}

export default function CardsSlide({ data }: CardsSlideProps) {
  const { cards } = data.content;

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

      {/* Cards */}
      <div className="flex-1 grid grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col rounded-3xl border-2 border-gray-100 overflow-hidden shadow-sm"
          >
            {/* Card header */}
            <div
              className="px-7 py-5 flex items-center justify-between"
              style={{ background: data.accent }}
            >
              <div className="flex items-center gap-4">
                <Icon icon={card.icon} accent={data.accent} className="text-4xl w-12 h-12" />
                <span className="text-2xl font-black text-white leading-tight">{card.title}</span>
              </div>
              {card.badge && (
                <span className="bg-white text-xs font-bold px-3 py-1 rounded-full" style={{ color: data.accent }}>
                  {card.badge}
                </span>
              )}
            </div>

            {/* Card body */}
            <div className="flex-1 bg-white px-7 py-5">
              {card.desc && (
                <p className="text-lg text-gray-500 mb-4 italic">{card.desc}</p>
              )}
              <ul className="space-y-3">
                {card.items.map((item, j) => (
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

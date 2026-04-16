import Icon from "../Icon";

interface TableSlideProps {
  data: {
    title: string;
    subtitle: string;
    accent: string;
    icon: string;
    content: {
      intro: string;
      table: {
        headers: string[];
        rows: string[][];
      };
      tips: string[];
    };
  };
}

export default function TableSlide({ data }: TableSlideProps) {
  const { intro, table, tips } = data.content;

  return (
    <div className="w-full h-full bg-white flex flex-col px-14 py-8 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: data.accent }} />

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <Icon icon={data.icon} accent={data.accent} className="text-5xl w-14 h-14" />
        <div>
          <h2 className="text-5xl font-black text-gray-800 leading-tight">{data.title}</h2>
          <p className="text-2xl text-gray-400 font-medium">{data.subtitle}</p>
        </div>
      </div>

      {/* Intro */}
      <p className="text-xl text-gray-600 mb-6 leading-relaxed border-l-4 pl-5" style={{ borderColor: data.accent }}>
        {intro}
      </p>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden border-2 border-gray-100 mb-6">
        <table className="w-full">
          <thead>
            <tr style={{ background: data.accent }}>
              {table.headers.map((h, i) => (
                <th
                  key={i}
                  className="px-6 py-4 text-left text-xl font-black text-white"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr
                key={ri}
                className="border-b border-gray-100"
                style={{ background: ri % 2 === 0 ? "white" : `${data.accent}06` }}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-6 py-3.5 text-lg ${ci === 0 ? "font-bold" : "text-gray-600"}`}
                    style={ci === 0 ? { color: data.accent } : {}}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <div className="grid grid-cols-2 gap-4">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl px-5 py-3"
            style={{ background: `${data.accent}10` }}
          >
            <span className="text-xl mt-0.5">💡</span>
            <p className="text-lg font-medium" style={{ color: data.accent }}>
              {tip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

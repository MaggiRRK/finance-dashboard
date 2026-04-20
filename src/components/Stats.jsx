import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  { v: 10 },
  { v: 30 },
  { v: 20 },
  { v: 50 },
  { v: 40 },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      {["Spending", "Savings", "Credit"].map((title, i) => (
        <div key={i} className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow">
          <p className="text-sm text-gray-500 mb-2">{title}</p>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar dataKey="v" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
}

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 rounded-xl bg-[#1a1a1a]/90 border border-white/10 backdrop-blur-md shadow-2xl">
        <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            {payload[0].value.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Enrollments</span>
        </div>
      </div>
    );
  }
  return null;
};

function EnrollmentBarChart({ data, title }) {
  return (
    <div className="content-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h6 className="text-lg font-semibold text-white tracking-tight">{title}</h6>
          <p className="text-sm text-gray-400 mt-1">Overview of enrollment distribution</p>
        </div>
      </div>

      <div className="w-full">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818cf8" stopOpacity={1} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Bar
              dataKey="enrollments"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              barSize={data.length > 20 ? 10 : 40}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EnrollmentBarChart;

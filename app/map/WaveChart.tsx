'use client'

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Exemplo de dados

const WaveChart = ({
  data
}: {
  data: any
}) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f87171" stopOpacity={1} />
            <stop offset="50%" stopColor="#facc15" stopOpacity={1} />
            <stop offset="100%" stopColor="#16a34a" stopOpacity={1} />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WaveChart;

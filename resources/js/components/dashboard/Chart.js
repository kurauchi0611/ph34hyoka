import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  { name: '日記', value: 1 },
  { name: 'プログラミング', value: 3 },
  { name: '趣味', value: 0 },
  { name: 'モンスター', value: 1 },
  { name: '学校', value: 1 },
  { name: 'Javascript', value: 1 },
];

const COLORS = ['#ff8600', '#ffC466', '#FFBB28', '#35BD56','#FF8042',"#0086ff"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>投稿</Title>
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={data}
            cx={165}
            cy={116}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

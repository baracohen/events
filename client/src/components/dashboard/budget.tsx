import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
import { Box, ListItem, Stack, Typography  } from '@mui/material';
import styled from 'styled-components';

interface BudgetProps {
    data: { name: string, number: number }[];
  }
const BudgetContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 100%;
  padding:24px;
`;
const BudgetHeader = styled.h2`
  margin-bottom: 16px;
  margin-top: 16px;
  font-weight: 500;
  font-size: 16px;
`;
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ILS',
    minimumFractionDigits: 2
  });

const Budget: React.FC<BudgetProps> = ({ data }) => {
  const total = data.reduce((a, b) => a + b.number, 0);
  const pieData = data.map((item, index) => ({
    value: item.number,
    name: item.name
  }));
  const generateColors = (numColors: number): string[] => {
    const colors: string[] = [];
    const goldenRatio = 0.618033988749895;
    let hue = Math.random();
  
    for (let i = 0; i < numColors; i++) {
      hue += goldenRatio;
      hue %= 1;
      const color = `hsl(${hue * 360}, 70%, 50%)`;
      colors.push(color);
    }
  
    return colors;
  };
  
  const COLORS = generateColors(data.length);

  return (
    <BudgetContainer>
    <Stack sx={{alignItems:'center'}}>
        <BudgetHeader>Budget</BudgetHeader> 
        <Typography variant='body1' align="center">
        {formatter.format(total)} in total
        </Typography>
      <PieChart width={300} height={300} >
    
        <Pie
          data={pieData}
          cx={150}
          cy={150}
          startAngle={-90}
          endAngle={270}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <>
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            <Tooltip content={<div>{entry.value}</div>}/>
            </>
          ))}
          {pieData.map((entry, index) => (
                <Sector
                    key={`sector-${index}`}
                    cx={200}
                    cy={200}
                    innerRadius={105}
                    outerRadius={110}
                    startAngle={(index / pieData.length) * 360 - 90}
                    endAngle={((index + 1) / pieData.length) * 360 - 90}
                    fill={COLORS[index % COLORS.length]}
                    cornerRadius={3}
                >
                </Sector>
          ))}
        </Pie>
        <Tooltip
        content={({ payload }) =>
          payload && payload[0] && <Stack sx={{backgroundColor:'#292827', padding:2, borderRadius:3, textAlign:'center', color:'white'}}><Stack><Typography variant='h5'>{formatter.format(payload[0].value as number)}</Typography></Stack><Typography variant='body1'>{payload[0].name}</Typography></Stack>
        }
      />
      </PieChart>
      <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {pieData.map((entry, index) => (
                <Stack key={`cell-${index}`} sx={{ display: 'inline-flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                    <span
                    style={{
                        backgroundColor: COLORS[index % COLORS.length],
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%', 
                        marginRight: '5px'
                    }}
                    ></span>
                    <Typography variant='body1'>{entry.name}</Typography>
                </div>
                </Stack>
            ))}
        </Stack>


      </Stack>

    </BudgetContainer>
  );
};

export default Budget;

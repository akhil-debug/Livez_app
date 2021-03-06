import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'DELHI',
    type: 'column',
    data: [1, 2, 3, 4, 0, 5, 5, 2, 3]
  },
  {
    name: 'KERALA',
    type: 'area',
    data: [0, 0, 9, 0, 0, 0, 0, 18, 0]
  },
  {
    name: 'ANDHRA PRADESH',
    type: 'line',
    data: [0, 4, 0, 0, 1, 0, 0, 3, 0]
  },
  {
    name: 'RAJASTHAN',
    type: 'line',
    data: [9, 0, 0, 0, 0, 8, 0, 0, 10]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [5, 5, 5, 5] },
    plotOptions: { bar: { columnWidth: '10%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '01/01/2022',
      '02/01/2022',
      '03/01/2022',
      '04/01/2022',
      '05/01/2022',
      '06/01/2022',
      '07/01/2022',
      '08/01/2022',
      '09/01/2022',
      '10/01/2022',
      '11/01/2021'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="TOP USERS" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}

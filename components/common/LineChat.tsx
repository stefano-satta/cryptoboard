import { FC } from "react";
import { Line } from 'react-chartjs-2';

interface LineChartProps {
    dataChart: number[] | string[];
    labels: string[]
}



const LineChart: FC<LineChartProps> = (props: LineChartProps) => {
    const {dataChart, labels} = props;

    const options = {
        scales: {
          y: {
            beginAtZero: false
          }
        }
    };

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'USD price',
            data: dataChart,
            fill: false,
            backgroundColor: '#1d3f83',
            borderColor: '#1d3f83',
          },
        ],
      };



    return (
        <Line data={data} options={options} />
    )
}

export default LineChart;
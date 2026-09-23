import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface LineChartProps {
    dataChart: number[];
    labels: string[];
}

const LineChart: FC<LineChartProps> = ({ dataChart, labels }) => {

    const options = {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: "USD price",
                data: dataChart,
                fill: false,
                backgroundColor: "#1d3f83",
                borderColor: "#1d3f83",
            },
        ],
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
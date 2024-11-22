import React from "react";
import { Line } from "react-chartjs-2";
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

import { data } from "./data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const chartData = {
        labels: data.map((d) => d.MonthYear),
        datasets: [
            {
                label: "UVA",
                data: data.map((d) => d.Investment_UVA),
                borderColor: "#ff00ff", // Fluorescent pink
                fill: false,
                pointRadius: 0, // Remove dots
            },
            {
                label: "USD",
                data: data.map((d) => d.Investment_USD),
                borderColor: "#00ff00", // Fluorescent green
                fill: false,
                pointRadius: 0, // Remove dots
            },
            {
                label: "Plazo Fijo",
                data: data.map((d) => d.Investment_PF),
                borderColor: "#808080", // Fluorescent gray
                fill: false,
                pointRadius: 0, // Remove dots
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                // labels: {
                //   usePointStyle: true,
                //   padding: 20
                // },
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Inversion ARS",
                    color: "white",
                },
            },
            x: {
                title: {
                    display: true,
                    //   text: "Fecha",
                    color: "white",
                },
            },
        },
        maintainAspectRatio: false,
    };

    const CustomLegend = () => (
        <div
            className="flex justify-center mt-[10px] w-full"
        >
            {chartData.datasets.map((dataset, index) => (
                <div
                    key={index}
                    style={{ display: "flex", alignItems: "center", marginRight: "30px" }}
                >
                    <div
                        style={{
                            width: "20px",
                            height: "3px",
                            backgroundColor: dataset.borderColor,
                            marginRight: "5px",
                        }}
                    />
                    <span>{dataset.label}</span>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <div className="h-[300px] md:w-[500px]">
                <Line data={chartData} options={options} />
            </div>
            <CustomLegend />
        </>
    );
};

export default Chart;

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    [
        "Education",
        "Colleges",
        "University",
        "School",
        "Academy"

    ],
    [1, 37.8, 80.8, 41.8, 15],
    [2, 30.9, 69.5, 32.4, 25],
    [3, 25.4, 57, 25.7, 35],
    [4, 11.7, 18.8, 10.5, 45],
    [5, 11.9, 17.6, 10.4, 55],
    [6, 8.8, 13.6, 7.7, 65],
    [7, 7.6, 12.3, 9.6, 55],
    [8, 12.3, 29.2, 10.6, 45],
    [9, 16.9, 42.9, 14.8, 35],
    [10, 12.8, 30.9, 11.6, 25],
    [11, 5.3, 7.9, 4.7, 15],
    [12, 6.6, 8.4, 5.2, 5],
    [13, 4.8, 6.3, 3.6, 25],
    [14, 4.2, 6.2, 3.4, 45],
];

export const options = {
    chart: {
        title: "Education",
        // subtitle: "in millions of dollars (USD)",
    },
};

export function LineChart() {
    return (
        <Chart
            chartType="Line"
            width="700px"
            height="400px"
            data={data}
            options={options}
        />
    );
}

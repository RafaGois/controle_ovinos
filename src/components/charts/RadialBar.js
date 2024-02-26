import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadialBarChart = () => {
    const data = [44];
    const options = {
        colors: ["#20E647"],
        plotOptions: {
            barHeight: 5,
            radialBar: {
                strokeWidth: '20%',
                startAngle: 0,
                endAngle: 300,
                hollow: {
                    margin: 0,
                    size: '40%',
                    background: "transparent"
                },
                track: {
                    strokeWidth: '20%',
                    opacity: 0.8,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        color: "#fff",
                        fontSize: "15px",
                        show: true,
                        offsetY: 8,
                    },
                }
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#87D4F9"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
    };

    return (
        <div className='w-20 h-20'>
            <Chart options={options} series={data} type="radialBar" height={130} widht={130} />
        </div>
    );
};

export default RadialBarChart;
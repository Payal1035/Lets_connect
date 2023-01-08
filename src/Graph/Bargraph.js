import React from 'react'
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

import { Bar, Doughnut } from 'react-chartjs-2';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'july'],
    datasets: [
        {
            label: 'Total Sales',
            data: [25, 35, 45, 50, 35, 45, 35],
            backgroundColor: 'rgba(44, 101, 241, 1)'
            // [
            //   'rgba(255, 99, 132, 0.2)',
            //   'rgba(54, 162, 235, 0.2)',
            //   'rgba(255, 206, 86, 0.2)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)',
            // ]
            ,
            // backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(44, 101, 241, 1)',
            // borderColor: 'rgba(255, 99, 132, 1)',
            //  [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            // ],
            borderWidth: 1,
            barThickness: 24,
            borderRadius: 14,

        },
        {
            label: 'Total Balance',
            data: [40, 45, 30, 60, 40, 30, 40],
            backgroundColor: 'rgba(39, 201, 169, 1)',
            borderColor: 'rgba(39, 201, 169, 1)',
            borderWidth: 1,
            barThickness: 14,
            borderRadius: 10,
        }

    ],
}
const datadoughtnut = {


    labels: ['Invoiced', 'Collected', 'Outstanding'],
    datasets: [
        {
            data: [25, 35, 45],
            backgroundColor:
                [
                    'rgba(44, 101, 241, 1)',
                    'rgba(255, 168, 0, 1)',
                    'rgba(39, 201, 169, 1)',

                ]
            ,

            // backgroundColor: 'rgba(255, 99, 132, 0.2)',
            // borderColor: 'rgba(44, 101, 241, 1)',
            // borderColor: 'rgba(255, 99, 132, 1)',
            //  [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            // ],
            // borderWidth: 1,
            // barThickness: 24,
            // borderRadius: 14,

        },
        // {
        //     label: 'Total Balance',
        //     data: [40, 45, 30, 60, 40, 30, 40],
        //     backgroundColor: 'rgba(39, 201, 169, 1)',
        //     borderColor: 'rgba(39, 201, 169, 1)',
        //     borderWidth: 1,
        //     barThickness: 14,
        //     borderRadius: 10,
        // }

    ],

}



function Bargraph() {
    return (
        <div className='flex'>
            
                
                
                <div className='mx-auto w-full'>
                    <Bar data={data}
                       height={300}
                        width={800} 
                    />{/***/}

                {/* const Doughnut = {
    type: 'doughnut',
    data: data,
    options: {
     cutout: '90%',
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  }; */}
        </div>
            
        </div>
    )
}

export default Bargraph

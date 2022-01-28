import React from 'react';
//Date
import moment from 'moment';
//Styles
import { GraphContainer } from '../styles/ForecastStyle'
//React-ChartJS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const ForecastGraph=({forecast}) => {
   
        const labels = forecast.map((data)=>{
                        let newLabel = moment.unix(data.dt).format('dddd');
                        return newLabel                                                   
                    })
        
        const lowTempData = forecast.map((data)=>{
                            let lowTemp = Math.floor(data.temp.min- 273.15 );
                            return lowTemp                                  
                        })
        const highTempData = forecast.map((data)=>{
                            let highTemp = Math.floor(data.temp.max- 273.15 );
                            return highTemp
                              
                        })            
             
    //console.log(labels)
    //console.log(lowTempData)
    //console.log(highTempData)

    const options = {
        responsive: true,
        interaction: {                          
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Graph',
            },
        },
        scales: {
            y: {                            
                display: true,                            
            },                          
        },
      };

    const data={
        labels,
        datasets: [
          {
            label: 'low temperature',
            data: lowTempData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            yAxisID: 'y',
          },
          {
            label: 'high temperature',
            data: highTempData,
            backgroundColor: "rgb(0,128,0)",
            borderColor: "rgb(0,128,0)", 
          },
        ],
      }

  return (      
      <div>          
          <GraphContainer>                   
            <Line 
                options = {options}                    
                data={data}  
            />
          </GraphContainer>
      </div>       
  )
}

export default ForecastGraph
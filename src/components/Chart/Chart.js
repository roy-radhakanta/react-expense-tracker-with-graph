import React from 'react';
import ChartBar from "./ChartBar"
import './Chart.css'

const Chart = (props) => {
    
    const filterDataPoint = props.dataPoints.map(curDataPoints => curDataPoints.value);
    const maxDataPoint = Math.max(...filterDataPoint);
    return (
        <div className='chart'>
            {
                props.dataPoints.map(
                    curDataPoint => 
                        (<ChartBar
                            key={curDataPoint.label}
                            value={curDataPoint.value}
                            maxValue={maxDataPoint}
                            label={curDataPoint.label}
                        />)
                    
                )
            }
        </div>
    );
}

export default Chart;
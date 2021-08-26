import { registerables } from 'chart.js'
import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import {Card} from 'react-bootstrap';

export class GraphCases extends Component {

    


    render() {
        
        const labels=this.props.data_graph.map(item=>{
            return item.date
        })

        const value=this.props.value 

        

        var label='Total new deaths within 28 days:';

        if(value=="Cases")
        {
            label='Total new cases:'
        }
       


        const data=this.props.data_graph.map(item=> {
                if(value=="Cases")
                {
                    return item.newCasesByPublishDate
                }
                else{
                    return item.newDeaths28DaysByPublishDate
                }
            }
            )

        const bar_data={
            labels: labels,
            datasets:[{
                label:label,
                data: data,
                borderWidth: 1,
                borderColor:'rgba(2, 59, 89,0.3)',
                hoverBorderColor:'red',
                backgroundColor:'rgba(2, 59, 89, 0.3)'
             }]

        }

       

       


        return (
            <div>
                <Card.Title> {label}</Card.Title>
                <Bar 
                    height={30}
                    width={40}
                    data={bar_data}
                />
            </div>
        )
    }
}

export default GraphCases

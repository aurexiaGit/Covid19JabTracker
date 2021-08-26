import { Container,Card, Col,Row } from 'react-bootstrap';
import React, { Component } from 'react'
import Header from '../Header/Header';
import axios from 'axios';
import {Bar} from 'react-chartjs-2'
import GraphCases from '../Graphs/GraphCases';
import './Home.css';
//import NumberFormat from 'react-number-format'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            
            startDate:"2021-01-01",
            endDate:new Date().toISOString().slice(0, 10),

            KPI:{},
            data_graph_case:[]
        };

        

        
    }

    

   
      

    componentDidMount(){

        var data=[]
        var Xtest=[]

        var option={
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }

        var string_api_1='https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumAdmissions&metric=cumPeopleVaccinatedCompleteByPublishDate&metric=newPeopleVaccinatedFirstDoseByPublishDate&metric=newPeopleVaccinatedSecondDoseByPublishDate&metric=cumPeopleVaccinatedFirstDoseByPublishDate&format=json'

        axios(string_api_1,option).then(
            response=> {
                
                this.setState({KPI:{
                    first_dose_latest:response.data.body[0].newPeopleVaccinatedFirstDoseByPublishDate,
                    second_dose_latest:response.data.body[0].newPeopleVaccinatedSecondDoseByPublishDate,
                    first_dose_total:response.data.body[0].cumPeopleVaccinatedFirstDoseByPublishDate,
                    second_dose_total:response.data.body[0].cumPeopleVaccinatedCompleteByPublishDate}
                    
                })
            }).catch(error =>{
                console.log(error)
            })

        var string_api_2='https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&format=json'
        
        axios(string_api_2,option).then(
            response=> {
                
                Xtest=response.data.body.filter(item =>item.date>=this.state.startDate && item.date<=this.state.endDate).reverse()
                
                console.log(Xtest)
                this.setState({data_graph_case:Xtest})
            }).catch(error =>{
                console.log(error)
            })

        
        
    }

   


    render() {

        console.log(this.state.endDate)
       
                      
        return (
            <div>
                <Header/>
                
                <br/>



                <Container>
                    <Row>
                        <Col >
                                <h1>UK Summary</h1>
                                <h4>COVID-19 Vaccination metrics</h4>
                        </Col>
                        <Col >
                            <Row>
                                <Col>
                                    <Card.Title> {new Intl.NumberFormat('en-UK').format(this.state.KPI.first_dose_latest)} </Card.Title>
                                     <p class="aurexia_color1">Daily - 1st Dose</p> 

                                    <Card.Title> {new Intl.NumberFormat('en-UK').format(this.state.KPI.second_dose_latest)} </Card.Title>
                                    <Card.Text>Daily - 2nd Dose </Card.Text>
                                
                                </Col>

                                <Col>
                                    <Card.Title> {new Intl.NumberFormat('en-UK').format(this.state.KPI.first_dose_total)} </Card.Title>
                                    <Card.Text>Total - 1st Dose </Card.Text>

                                    <Card.Title> {new Intl.NumberFormat('en-UK').format(this.state.KPI.second_dose_total)} </Card.Title>
                                    <Card.Text>Total - 2nd Dose </Card.Text>
                                </Col>

                            </Row>
                            
                               


                           
                            
                               
                           
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <div style={{width:'600px',height:'500px'}}>
                                <GraphCases data_graph={this.state.data_graph_case} value={'Deaths'}  />
                            </div>   
                        </Col>

                        <Col>
                            <div style={{width:'600px',height:'500px'}}>
                                <GraphCases data_graph={this.state.data_graph_case} value={'Cases'}  />
                            </div>   
                        </Col>
                         
                    </Row>

                    

                    
                </Container>

                 





            </div>
        )
    }
}

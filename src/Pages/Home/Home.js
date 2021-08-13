import { Container,Card, Col,Row,Form } from 'react-bootstrap';
import React, { Component } from 'react'
import Header from '../Header/Header';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){

        var option={
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }

        var string_api='https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumAdmissions&metric=cumPeopleVaccinatedCompleteByPublishDate&metric=newPeopleVaccinatedFirstDoseByPublishDate&metric=newPeopleVaccinatedSecondDoseByPublishDate&metric=cumPeopleVaccinatedFirstDoseByPublishDate&format=json'

        axios(string_api,option).then(
            response=> {
                this.setState({
                    data:response.data.body
                })

                // console.log(this.state.data[0].cumPeopleVaccinatedCompleteByPublishDate)
            }

        )
    }


    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Container>
                    <Row style={{width:'100%'}}>
                        <Col>
                            
                            <Card>
                                <h1> UK Summary</h1>
                                <h4>COVID-19 Vaccination pace</h4>
                            </Card>

                        </Col>

                        <Col>
                            
                            <Card style={{height:'100%', width:'100%'}}>
                                <p>Placeholder</p>
                            </Card>
                            
                    
                        </Col>

                    </Row>

                    <Row style={{paddingTop:'10px'}}>
                        <Col>

                            <Card>
                                <p>Placeholder</p>
                            </Card>
                        
                        </Col>
                    
                    </Row>
                    
                </Container>
            </div>
        )
    }
}

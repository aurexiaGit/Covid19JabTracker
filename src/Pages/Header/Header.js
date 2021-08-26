import React, { Component } from 'react'
import { Container,Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" variant="light" style={{backgroundColor:"#023B59"}}>
                    <Container>
                        <Navbar.Brand style={{color:'white'}}href="#">Covid-19 Data Tracker</Navbar.Brand>
                        
                    </Container>
                </Navbar>
            </div>
        )
    }
}

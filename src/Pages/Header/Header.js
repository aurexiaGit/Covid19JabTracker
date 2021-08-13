import React, { Component } from 'react'
import { Container,Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="#">Covid-19 Jab Tracker</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

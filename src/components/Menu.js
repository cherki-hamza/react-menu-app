import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const Menu = ({ filterBySearch }) => {

    const [searchValue, setSearchValue] = useState('')
    const onSearch = (e) => {
        e.preventDefault();
        filterBySearch(searchValue);
        setSearchValue('');
    }

    return (
        <Container dir="rtl">
            <Row>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <div className='brand-color'>
                                مطعم جديد
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {/*  <Nav.Link href="#action1">Home</Nav.Link> */}
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mx-2"
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    value={searchValue}
                                />
                                <button onClick={(e) => onSearch(e)} className="btn-search">Search</button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    )
}
export default Menu;


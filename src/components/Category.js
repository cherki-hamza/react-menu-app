import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Roll from 'react-reveal/Roll';

const Category = ({ filterByCategory, Allcategories }) => {
    const onFilter = (cat) => {
        filterByCategory(cat);
    }
    return (
        <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                <Row>

                    <div>
                        <Roll>
                            {
                                Allcategories.length >= 1 ? (
                                    Allcategories.map((cat, index) => {
                                        return (
                                            <button key={index} onClick={() => onFilter(cat)} style={{ border: "1px solid #b45b35" }} className="btn mx-2">{cat}</button>
                                        )
                                    })
                                ) : '<h3>Oops No Category Found</h3>'
                            }
                        </Roll>
                    </div>

                </Row>
            </Col>
        </Row>
    )
}

export default Category
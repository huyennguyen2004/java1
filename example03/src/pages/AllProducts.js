import axios from "axios";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";

function AllProduct() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/products").then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.error("Có lỗi xảy ra khi gọi API:", error);
        });
    }, []);
    
    return (
        <Row md={3} className="g-4 mt-1">
            {products.map((sv) => {
                return (
                    <Col key={sv.id} xs={12} sm={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sv.photo} />
                            <Card.Body>
                                <Card.Title>{sv.title}</Card.Title>
                                <Card.Text> Thông số kỹ thuật: {sv.description}</Card.Text>
                                <Card.Text> Giá: {sv.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
}

export default AllProduct;

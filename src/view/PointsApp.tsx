import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import ScoreBoard from "../components/ScoreBoard";

const PointsApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <ScoreBoard/>
                </Col>
            </Row>
        </Container>
    )
}

export default PointsApp;


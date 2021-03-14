import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import InputCP from "./InputCP";
import OutputCP from "./OutputCP";

class MDViewerCP extends React.Component {
    render() {
        return (
            <Container fluid className="mx-0 mt-5 p-5">
                <Row>
                    <Col xs md={ 5 }>
                        <InputCP onInput={this.props.text} />
                    </Col>
                    <Col md={ 7 }>
                        <OutputCP text={this.props.input} />
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default MDViewerCP;
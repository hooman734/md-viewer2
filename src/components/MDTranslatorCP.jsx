import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import InputCP from "./InputCP";
import OutputCP from "./OutputCP";

class MDTranslatorCP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: 'waiting for input...',
        };
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler (event) {
        const input = event.target.value;
        this.setState({inputText: `${input}`});
    }

    render() {
        return (
            <Container fluid className="mx-0 mt-5 p-5">
                <Row>
                    <Col xs md={5}>
                        <InputCP onInput={this.inputHandler} />
                    </Col>
                    <Col md={7}>
                        <OutputCP text={this.state.inputText} />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default MDTranslatorCP;
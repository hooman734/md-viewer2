import { Form } from 'react-bootstrap';

const InputCP = props => {
    const { onInput } = props;
    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><p className="badge badge-info">Input your markdown here:</p></Form.Label>
            <Form.Control as="textarea" rows={20} onChange={onInput}/>
        </Form.Group>
        </Form>
    );
}

export default InputCP;
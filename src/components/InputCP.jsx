import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';

import * as actions from '../redux/actions';

const InputCP = () => {
    const dispatch = useDispatch();
    const onInput = event => dispatch(actions.inputTextUpdated(event.target.value));

    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><p className="badge badge-info">Input your markdown here:</p></Form.Label>
            <Form.Control as="textarea" rows={ 30 } onChange={onInput}/>
        </Form.Group>
        </Form>
    );
}

export default InputCP;
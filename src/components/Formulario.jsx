import ListaTarea from "./ListaTarea";
import {Button, Form} from 'react-bootstrap';

const Formulario = () => {
    return (
        <div>
            <Form>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="ingrese una tarea" />
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      </Form.Group>
    </Form>
            <ListaTarea/>
        </div>
    );
};

export default Formulario;
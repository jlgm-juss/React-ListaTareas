import ListaTarea from "./ListaTarea";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);
    //limpiar el input
    setTarea('');
  };

const borrarTarea = (nombre)=> {
let arregloModificado = arregloTarea.filter((item)=>(item !== nombre));
// actualizo el state
setArregloTarea(arregloModificado)
}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea} />
    </div>
  );
};

export default Formulario;

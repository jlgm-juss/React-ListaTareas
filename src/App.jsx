import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Container className="my-5">
      <h1 className="display-4 text-center">Lista de tareas</h1>
      <hr/>
      <Formulario/> 
    </Container>
  );
}

export default App;

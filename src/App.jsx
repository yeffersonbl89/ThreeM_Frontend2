import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <h1> Login </h1>} />
        <Route path="/HomePage" element={ <h1> Home Page </h1>} />
        <Route path="/Registro" element={ <h1> Registro </h1>} />
        <Route path="/CrearPresupuesto" element={ <h1> Crear Presupuesto </h1>} />
        <Route path="/CrearGasto" element={ <h1> Crear Gasto </h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
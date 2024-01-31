import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegistroPage from "./pages/Registro/RegistroPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Registro" element={<RegistroPage />} />
          <Route path="/Perfil" element={<h1> Perfil </h1>} />
          <Route
            path="/CrearPresupuesto"
            element={<h1> Crear Presupuesto </h1>}
          />
          <Route
            path="/ConsultarPresupuestos"
            element={<h1> Consultar Presupuestos </h1>}
          />
          <Route
            path="/ConsultarPresupuestoId"
            element={<h1> Consultar Presupuesto </h1>}
          />
          <Route
            path="/ActualizarPresupuesto"
            element={<h1> Actualizar Presupuesto </h1>}
          />
          <Route path="/CrearGasto" element={<h1> Crear Gasto </h1>} />
          <Route
            path="/ConsultarGastos"
            element={<h1> Consultar Gastos </h1>}
          />
          <Route
            path="/ActualizarGasto"
            element={<h1> Actualizar Gasto </h1>}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

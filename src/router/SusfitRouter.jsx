import React from "react";
import { NotFound } from "../components/NotFound";
import { NavigatorComp } from "../components/NavigatorComp";
import { Clientes } from "../components/Clientes";
import { Cliente } from "../components/Cliente";
import { Gimnasio } from "../components/Gimnasio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Informacion } from "../components/Reportar";

export const SusfitRouter = () => {
  return (
    <BrowserRouter>
      <NavigatorComp/>
      <Routes>
        <Route path="/cliente/" element={<Clientes />} />
        <Route path="/cliente/:id" element={<Cliente />} />
        <Route path="/gimnasio/" element={<Gimnasio />} />
        <Route path="/informacion/" element={<Informacion />} />
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

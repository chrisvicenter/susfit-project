import React from "react";

export const headerData = () => {
  const columnas = [
    {
      title: "Nombre",
      field: "name",
    },
    {
      title: "Fecha de Nacimiento",
      field: "birthDate",
    },
    {
      title: "Membresía",
      field: "memebership",
    },
    {
      title: "Fin de membresía",
      field: "endMembershipDate",
    },
  ];
  return columnas;
};

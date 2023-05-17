import MaterialTable from "material-table";
import React, { forwardRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { headerData } from "../data/headerData";
import { dataExample } from "../data/dataExample";
import { useNavigate } from "react-router-dom";
import ViewColumn from "@material-ui/icons/ViewColumn";

export const Clientes = () => {
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />);
  const defaultMaterialTheme = createTheme();
  const columns = headerData();
  const data = dataExample();

  const navigate = useNavigate();

  return (
    <div className="container comp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={data}
          title="Clientes"
          actions={[
            {
              icon: ViewColumn,
              tooltip: "Ver cliente",
              onClick: (event, rowData) => navigate("/cliente/" + rowData.id),
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
};

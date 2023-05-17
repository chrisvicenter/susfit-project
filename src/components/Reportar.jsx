import React from "react";
import { useField } from "../hooks/useField";

export const Informacion = () => {
  const reason = useField({ type: "text" });

  const textArea = useField({ type: "text" });

  return (
    <div className="container comp">
      <form>
        <div className="form-group">
          <label for="rasonLabel">Razón</label>
          <input
            {...reason}
            class="form-control"
            name="Reason"
            placeholder="Razón"
          />
        </div>
        <div className="form-group">
          <label for="descriptionLabel">Descripción</label>
          <textArea
            {...textArea}
            class="form-control"
            name="Description"
            placeholder="Descripción"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

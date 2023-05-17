import React from "react";
import { useParams } from "react-router-dom";
import { dataExample } from "../data/dataExample";

export const Cliente = () => {
  const { id } = useParams();
  const datas = dataExample();
  const dataClient = datas[id - 1];
  {
    /* It's a worng use of positions, but only for the activitie it works*/
  }

  return (
    <div className="container comp">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Nombre</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{dataClient.name}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Fecha de Nacimiento</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{dataClient.birthDate}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Membresía</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{dataClient.memebership}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Fin de membresía</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{dataClient.endMembershipDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { ContentsAddInfo } from "./ContentsAddInfo";
import "./AdminContentsTable.css";

export const ContentsAddTable = () => {
    return (
        <table className="table">
            <colgroup>
                <col className="table-col-name" />
                <col className="table-col-url" />
                <col className="table-col-role" />
                <col className="table-col-category" />
                <col className="table-col-actions" />
            </colgroup>
            <thead className="table-header">
                <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                    <th>Rol</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <ContentsAddInfo />
            </tbody>
        </table>
    );
};

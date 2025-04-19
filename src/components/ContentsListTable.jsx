import React from 'react';
import ContentsListInfo from './ContentsListInfo';
import './AdminContentsTable.css';

const ContentsListTable = ({ contents }) => {
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
                {contents?.map((content) => (
                    <ContentsListInfo key={content.uid} content={content} />
                ))}
            </tbody>
        </table>
    );
};

export default ContentsListTable;

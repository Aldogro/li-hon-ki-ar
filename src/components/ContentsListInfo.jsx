import React from 'react';
import { firestore } from '../firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { hungGarCategories, roles } from '../information';
import './ContentsAddInfo.css';

const ContentsListInfo = ({ content }) => {
    const handleDelete = async () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este contenido?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(firestore, "contents", content.uid));
            alert("Contenido eliminado ✅");
        } catch (error) {
            console.error("Error al eliminar contenido:", error);
            alert("Hubo un error al eliminar el contenido.");
        }
    };

    return (
        <tr>
            <td className="table-select">{content.name}</td>
            <td className="table-select">
                <a href={content.url} target="_blank" rel="noopener noreferrer">
                    {content.url}
                </a>
            </td>
            <td className="table-select">{roles[content.role]}</td>
            <td className="table-select">{hungGarCategories[content.category]}</td>
            <td className="table-actions">
                <button onClick={handleDelete}>Eliminar</button>
            </td>
        </tr>
    );
};

export default ContentsListInfo;

import React, { useEffect, useState } from "react";
import CommonContainer from "../components/CommonContainer";
import "./ContentsAdminPage.css"; // Importando el CSS

const roles = ["Admin", "Editor", "Usuario"];
const categories = ["1kap", "2kap", "3kap"];

export const ContentsAdminPage = () => {
    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        nombre: "Lucas",
        enlace: "Enlace a yutube",
        rol: "Admin",
        categoria: "1kap",
    });

    // Estado para almacenar los contenidos en memoria
    const [contenidos, setContenidos] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showTable, setShowTable] = useState(false);

    // Debug: Ver cambios en contenidos
    useEffect(() => {
        console.log("Lista de contenidos actualizada:", contenidos);
    }, [contenidos]);

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Manejar el envío del formulario
    const handleUpdateContent = () => {
        if (
            !formData.nombre || !formData.enlace || !formData.rol ||
            !formData.categoria
        ) {
            alert("Por favor completa todos los campos.");
            return;
        }

        setIsSubmitting(true);
        setShowTable(false);

        // Agregar el contenido al estado
        setContenidos((prevContenidos) => {
            const newContents = [...prevContenidos, { ...formData }];
            console.log("Contenido guardado:", newContents); // Verifica en consola
            return newContents;
        });

        // Esperar 1 segundo antes de mostrar la tabla y habilitar el botón
        setTimeout(() => {
            setShowTable(true);
            setFormData({ nombre: "", enlace: "", rol: "", categoria: "" });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <>
            <div className="admin-page">
                <h1>Página de Contenidos</h1>
                <div className="admin-form">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="enlace"
                        placeholder="Enlace"
                        value={formData.enlace}
                        onChange={handleChange}
                    />
                    <select
                        name="rol"
                        value={formData.rol}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona un rol</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                    <select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <button className="button-style"
                        onClick={handleUpdateContent}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Guardando..." : "Agregar contenido"}
                    </button>
                </div>

                {contenidos.length > 0 && showTable && (
                    <div className="contenidos-list">
                        <h2>Contenidos Guardados</h2>
                        <table className="contenidos-table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Enlace</th>
                                    <th>Rol</th>
                                    <th>Categoría</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contenidos.map((contenido, index) => (
                                    <tr key={index}>
                                        <td>{contenido.nombre}</td>
                                        <td>{contenido.enlace}</td>
                                        <td>{contenido.rol}</td>
                                        <td>{contenido.categoria}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

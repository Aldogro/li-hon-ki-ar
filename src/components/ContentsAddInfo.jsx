import React from "react";
import { auth, firestore } from "../firebase/firebase";
import { hungGarCategories, roles } from "../information";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import "./ContentsAddInfo.css";

export const ContentsAddInfo = () => {
    const [name, setName] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [role, setRole] = React.useState("student");
    const [category, setCategory] = React.useState("kap8");
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loggedUser] = useAuthState(auth);

    const handleUpdate = async () => {
        if (!name || !url) {
            alert("Por favor completa todos los campos.");
            return;
        }

        setButtonDisabled(true);

        try {
            const docRef = await addDoc(collection(firestore, "contents"), {
                name,
                url,
                role,
                category,
                userId: loggedUser?.uid || null, // Auditoría
                createdAt: new Date(), // Auditoría
            });

            await setDoc(doc(firestore, "contents", docRef.id), {
                uid: docRef.id,
            }, { merge: true });

            alert("Contenido agregado con éxito");

            setName("");
            setUrl("");
            setRole("student");
            setCategory("kap8");

            // // Esperamos 1 segundo antes de volver a habilitar
            // setTimeout(() => setButtonDisabled(false), 1000);
        } catch (error) {
            console.error("Error al agregar contenido:", error);
            alert("Hubo un error al agregar el contenido.");
            setButtonDisabled(false); // En caso de error, lo habilitamos de nuevo
        }
    };

    return (
        <tr>
            <td className="table-select">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="table-input"
                    placeholder="Ingrese el nombre"
                />
            </td>
            <td className="table-select">
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="table-input"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    title="Debe comenzar con https://"
                />
            </td>
            <td className="table-select">
                <select
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                >
                    {Object.keys(roles).map((roleKey) => (
                        <option key={roleKey} value={roleKey}>
                            {roles[roleKey]}
                        </option>
                    ))}
                </select>
            </td>
            <td className="table-select">
                <select
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    {Object.keys(hungGarCategories).map((categoryKey) => (
                        <option key={categoryKey} value={categoryKey}>
                            {hungGarCategories[categoryKey]}
                        </option>
                    ))}
                </select>
            </td>
            <td className="table-actions">
                <button
                    onClick={handleUpdate}
                    // disabled={buttonDisabled}
                >
                    Actualizar
                </button>
            </td>
        </tr>
    );
};

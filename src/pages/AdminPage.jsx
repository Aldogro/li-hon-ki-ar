<<<<<<< HEAD
import React from "react";
import CommonContainer from "../components/CommonContainer";
import { collection, firestore } from "../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AdminUserInfo from "../components/AdminUserInfo";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [users] = useCollectionData(
        collection(firestore, "users"),
=======
import React from 'react';
import CommonContainer from '../components/CommonContainer';
import { collection, firestore } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './AdminPage.css';
import LoadingComponent from '../components/LoadingComponent';
import AdminUsersTable from '../components/AdminUsersTable';

const AdminPage = () => {

    const [users, loading] = useCollectionData(
        collection(firestore, 'users'),
>>>>>>> f230023d9112e76eeaf509dc0b6a42759edb5015
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        },
    );

    const navigate = useNavigate(); // Crea una instancia de useNavigate

    const handleUpdateContent = () => {
        navigate("/contenidos"); // Redirige a /contenidos
    };

    return (
        <CommonContainer>
<<<<<<< HEAD
            <h1>Administrador</h1>
            <p>
                En esta página podrás asignar los Roles y Categorías a los
                usuarios registrados.
            </p>
            <p>
                Utilizar el email para otorgar manualmente los permisos en los
                canales privados de youtube.
            </p>
=======
            <h1 className="text-center mb-3">Administrador</h1>
            <p className="text-center">En esta página podrás asignar los Roles y Categorías a los usuarios registrados.</p>
            <p className="text-center">Utilizar el email para otorgar manualmente los permisos en los canales privados de youtube.</p>
>>>>>>> f230023d9112e76eeaf509dc0b6a42759edb5015

            <h2 className="text-left mt-3">Usuarios Registrados</h2>
            <div className="admin-page_user-list">
<<<<<<< HEAD
                {users?.map((user) => (
                    <AdminUserInfo key={user.uid} user={user} />
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <button
                    className="button-style"
                    onClick={handleUpdateContent}
                    style={{
                        padding: "12px 20px",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background 0.3s",
                        width: "200px",
                    }}
                >
                    Contenidos
                </button>
=======
                {
                    loading
                        ? <LoadingComponent />
                        : <AdminUsersTable users={users} />
                }
>>>>>>> f230023d9112e76eeaf509dc0b6a42759edb5015
            </div>
        </CommonContainer>
    );
};

export default AdminPage;

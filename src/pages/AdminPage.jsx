import React from 'react';
import CommonContainer from '../components/CommonContainer';
import { collection, firestore } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './AdminPage.css';
import LoadingComponent from '../components/LoadingComponent';
import AdminUsersTable from '../components/AdminUsersTable';

const AdminPage = () => {

    const [users, loading] = useCollectionData(
        collection(firestore, "users"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        },
    );

   return (
        <CommonContainer>
            <h1 className="text-center mb-3">Administrador</h1>
            <p className="text-center">En esta página podrás asignar los Roles y Categorías a los usuarios registrados.</p>
            <p className="text-center">Utilizar el email para otorgar manualmente los permisos en los canales privados de youtube.</p>

            <h2 className="text-left mt-3">Usuarios Registrados</h2>
            <div className="admin-page_user-list">
                {
                    loading
                        ? <LoadingComponent />
                        : <AdminUsersTable users={users} />
                }
            </div>
        </CommonContainer>
    );
};

export default AdminPage;

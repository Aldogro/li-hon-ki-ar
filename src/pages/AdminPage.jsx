import React from 'react';
import CommonContainer from '../components/CommonContainer';
import { collection, firestore } from '../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import AdminUserInfo from '../components/AdminUserInfo';
import './AdminPage.css';

const AdminPage = () => {

    const [users] = useCollectionData(
        collection(firestore, 'users'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <CommonContainer>
            <h1>Administrador</h1>
            <p>En esta página podrás asignar los Roles y Categorías a los usuarios registrados.</p>
            <p>Utilizar el email para otorgar manualmente los permisos en los canales privados de youtube.</p>

            <h2>Usuarios Registrados</h2>
            <div className="admin-page_user-list">
                {
                    users?.map((user) => (
                        <AdminUserInfo key={user.uid} user={user} />
                    ))
                }
            </div>
        </CommonContainer>
    );
};

export default AdminPage;

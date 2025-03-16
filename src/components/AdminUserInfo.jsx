import React from 'react';
import { firestore, setDoc, doc } from '../firebase/firebase';
import { categories, roles } from '../information';
import './AdminUserInfo.css';

const AdminUserInfo = ({ user }) => {
    const [role, setRole] = React.useState(user.role || 'student');
    const [category, setCategory] = React.useState(user.category || 'kap10');

    const handleUpdate = () => {
        setDoc(
            doc(firestore, 'users', user.uid),
            {
                role,
                category
            },
            { merge: true }
        );
    };

    return (
        <React.Fragment>
            <div className="admin-user-info_user-card">
                <img src={user.photoURL} alt={user.displayName} />
                {user.displayName} - {user.email}
                <div className="admin-user-info_actions">
                    <select
                        name='role'
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        {
                            Object.keys(roles).map((roleKey) => (
                                <option key={roleKey} value={roleKey}>
                                    {roles[roleKey]}
                                </option>
                            ))
                        }
                    </select>
                    <select
                        name='category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Object.keys(categories).map((categoryKey) => (
                                <option key={categoryKey} value={categoryKey}>
                                    {categories[categoryKey]}
                                </option>
                            ))
                        }
                    </select>
                    <button
                        disabled={role === user.role && category === user.category}
                        onClick={handleUpdate}
                    >
                        Actualizar
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AdminUserInfo;

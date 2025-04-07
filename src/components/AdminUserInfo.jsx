import React from 'react';
import { firestore, setDoc, doc } from '../firebase/firebase';
import { styles, hungGarCategories, roles } from '../information';
import './AdminUserInfo.css';

const AdminUserInfo = ({ user }) => {
    const [role, setRole] = React.useState(user.role || 'student');
    const [category, setCategory] = React.useState(user.category || 'kap8');
    const [style, setStyle] = React.useState(user.style || '');
    
    const handleUpdate = () => {
        setDoc(
            doc(firestore, 'users', user.uid),
            {
                role,
                category,
                style,
            },
            { merge: true }
        );
    };

    return (
        <React.Fragment>
            <tr>
                <td className="table-avatar">
                    <img src={user.photoURL} alt={user.displayName} />
                </td>
                <td className="text-left">{user.displayName}</td>
                <td className="text-left">{user.email}</td>
                <td className="table-select">
                    <select
                        name='style'
                        onChange={(e) => setStyle(e.target.value)}
                        value={style}
                    >
                        {
                            Object.keys(styles).map((styleKey) => (
                                <option key={styleKey} value={styleKey}>
                                    {styles[styleKey]}
                                </option>
                            ))
                        }
                    </select>
                </td>
                <td className="table-select">
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
                </td>
                <td className="table-select">
                    <select
                        name='category'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Object.keys(hungGarCategories).map((categoryKey) => (
                                <option key={categoryKey} value={categoryKey}>
                                    {hungGarCategories[categoryKey]}
                                </option>
                            ))
                        }
                    </select>
                </td>
                <td className="table-actions">
                    <button
                        disabled={
                            role === user.role
                            && category === user.category
                            && style === user.style
                        }
                        onClick={handleUpdate}
                    >
                        Actualizar
                    </button>
                </td>
            </tr>
        </React.Fragment>
    );
};

export default AdminUserInfo;

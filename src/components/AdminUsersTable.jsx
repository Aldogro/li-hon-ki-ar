import AdminUserInfo from "./AdminUserInfo";

const AdminUsersTable = ({ users }) => {
    return (
        <table>
            <thead className="table-header">
                <tr>
                    <th className="text-center">Avatar</th>
                    <th className="text-left">Nombre</th>
                    <th className="text-left">Email</th>
                    <th>Estilo</th>
                    <th>Rol</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user) => (
                        <AdminUserInfo key={user.uid} user={user} />
                    ))
                }
            </tbody>
        </table>
    );
};

export default AdminUsersTable;

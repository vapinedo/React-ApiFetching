import { User } from "../models/User";

interface UserTableProps {
    users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <table className="table table-hover">
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
        </thead>

        <tbody>
            {users.map((user: User) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
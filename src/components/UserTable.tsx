import { useState } from "react";
import { User } from "../models/User";

interface UserTableProps {
    users: User[];
}

export default function UserTable({ users }: UserTableProps) {
    const [sortedUsers, setSortedUsers] = useState<User[]>(users);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedUsers].sort((a, b) => {
            if (a.name < b.name) return newDirection === 'asc' ? -1 : 1;
            if (a.name > b.name) return newDirection === 'asc' ? 1 : -1;
            return 0;
        });

        setSortedUsers(sorted);
        setSortDirection(newDirection);
    };

    const arrowUp = <i className='bx bx-up-arrow-alt text-muted'></i>;
    const arrowDown = <i className='bx bx-down-arrow-alt text-muted'></i>;

    return (
        <table className="table table-hover">
            <thead>
                <th>ID</th>
                <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                    Name {sortDirection === 'asc' ? arrowUp : arrowDown}
                </th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>

            <tbody>
                {sortedUsers.map((user: User) => (
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
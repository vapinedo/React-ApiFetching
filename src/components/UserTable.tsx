import { User } from "../models/User";
import { useState, useMemo, useCallback } from "react";

interface UserTableProps {
    users: User[];
    deleteUser: (id: number) => void;
}

export default function UserTable({ users, deleteUser }: UserTableProps) {

    console.log("UserTable Render...");

    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const sortedUsers = useMemo(() => {
        const sorted = [...users].sort((a, b) => {
            if (a.name < b.name) return sortDirection === 'asc' ? -1 : 1;
            if (a.name > b.name) return sortDirection === 'desc' ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [users, sortDirection]);

    const handleSort = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newDirection);
    };

    const memoizedHandleSort = useCallback(handleSort, [sortDirection]);
    const arrowIcon = sortDirection === 'asc' ? 'bx bx-up-arrow-alt text-muted' : 'bx bx-down-arrow-alt text-muted';

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th onClick={memoizedHandleSort} style={{ cursor: 'pointer' }}>
                        Name <i className={arrowIcon}></i>
                    </th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>

            <tbody>
                {sortedUsers.map((user: User) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => deleteUser(user.id)} className="btn btn-danger">
                            <i className='bx bx-trash-alt'></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
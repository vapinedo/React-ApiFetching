import { useEffect, useState } from "react";
import { User } from "../models/User";

const endpoint = 'https://jsonplaceholder.typicode.com/users';

export default function userService() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: User[] = await response.json();
            setData(data);

        } catch (err) {
            const error = err instanceof Error ? err.message : 'An unknow error ocurred'; 
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = (id: number) => {
        const newUsers = [...data].filter((user) => user.id !== id);
        setData(newUsers);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, deleteUser, loading, error };
}
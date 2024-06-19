import { useEffect, useState } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

const postService = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error("Error fetching posts");
            }
            const data = await response.json();
            setData(data);
        } catch (err) {
            const error = err instanceof Error ? err.message : "An error ocurred";
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
};

export default postService;
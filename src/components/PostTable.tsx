import { useCallback, useMemo, useState } from "react";
import { Post } from "../models/Post";

interface PostTableProps {
    posts: Post[];
}

const PostTable = ({ posts }: PostTableProps) => {
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const sortedPosts = useMemo(() => {
        const sorted = [...posts].sort((a, b) => {
            if (a.id < b.id) return sortDirection === 'asc' ? -1 : 1;
            if (a.id > b.id) return sortDirection === 'desc' ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [posts, sortDirection])

    const handleSort = () => {
        const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newSortDirection);
    }

    const memoizedHandleSort = useCallback(handleSort, [sortDirection]);
    const arrowIcon = sortDirection === 'asc' ? "bx bx-up-arrow-alt" : "bx bx-down-arrow-alt";
    
    return (
        <section>
            <h3>Post List</h3>
            <hr />

            <table className="table table-hovered">
                <thead>
                    <tr>
                        <th onClick={memoizedHandleSort} style={{ cursor: 'pointer' }}>
                            ID
                            <i className={arrowIcon} />
                        </th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedPosts.map((post: Post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default PostTable;
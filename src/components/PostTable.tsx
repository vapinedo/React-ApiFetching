import { useState } from "react";
import { Post } from "../models/Post";

interface PostTableProps {
    posts: Post[];
}

const PostTable = ({ posts }: PostTableProps) => {
    const [sort, setSort] = useState<'asc' | 'desc'>('asc');
    const [sortedPosts, setSortedPosts] = useState<Post[]>(posts);

    const handleSort = () => {
        const newSort = sort === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedPosts].sort((a, b) => {
            if (a.id < b.id) return sort === 'asc' ? -1 : 1;
            if (a.id > b.id) return sort === 'desc' ? 1 : -1;
            return 0;
        });

        setSort(newSort);
        setSortedPosts(sorted);
    }

    const arrowIcon = sort === 'asc' ? "bx bx-up-arrow-alt" : "bx bx-down-arrow-alt";
    
    return (
        <section>
            <h3>Post List</h3>
            <hr />

            <table className="table table-hovered">
                <thead>
                    <tr>
                        <th onClick={handleSort} style={{ cursor: 'pointer' }}>
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
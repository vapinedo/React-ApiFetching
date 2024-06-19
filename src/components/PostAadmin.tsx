import PostTable from "./PostTable";
import postService from "../services/postService";

const PostAdmin = () => {
    const { data, loading, error } = postService();
    
    if (loading) return <p>Loading ....</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <PostTable posts={data} />
    )
};

export default PostAdmin;
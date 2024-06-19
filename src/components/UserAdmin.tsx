import UserTable from "./UserTable";
import userService from "../services/userService"

export default function UserAdmin() {

    const { data, loading, error } = userService();

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error: {error}</p>
    
    return (
        <section>
            <h3>User Admin</h3>
            <hr />

            <UserTable users={data} />
        </section>
    )
}
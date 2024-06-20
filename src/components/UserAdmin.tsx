import UserTable from "./UserTable";
import userService from "../services/userService"

export default function UserAdmin() {

    const { data, loading, error, deleteUser } = userService();

    console.log(data.length);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error: {error}</p>
    
    return (
        <section>
            <h3>User Admin</h3>
            <hr />

            <UserTable users={data} deleteUser={deleteUser} />
        </section>
    )
}
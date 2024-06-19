import userService from "../services/userService"

export default function UserAdmin() {

    const { data, loading, error } = userService();

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error: {error}</p>
    
    return (
        <section>
            <h3>User Admin</h3>
            <hr />

            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </section>
    )
}
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async (APILink) => {
            try {
            const res = await fetch(APILink);
            const data = await res.json();
            setUsers(data);
            } catch (error) {
            console.log(error);
            }
        };
        fetchUserData(`https://jsonplaceholder.typicode.com/users`);
    }, []);

    // ---------- Styles ----------
    const containerStyle = {
        maxWidth: "600px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif"
    };

    const listStyle = {
        listStyle: "none",
        padding: 0
    };

    const itemStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9"
    };

    const buttonStyle = {
        marginTop: "8px",
        padding: "6px 12px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer"
    };

    const detailStyle = {
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #333",
        borderRadius: "8px",
        backgroundColor: "#eee"
    };

    return (
        <div style={containerStyle}>
        <ul style={listStyle}>
            {users.map((el) => (
            <li key={el.id} style={itemStyle}>
                <p><strong>{el.name}</strong></p>
                <p>{el.username}</p>

                <button
                style={buttonStyle}
                onClick={() => setSelectedUser(el)}
                >
                More info
                </button>
            </li>
            ))}
        </ul>

        {selectedUser && (
            <div style={detailStyle}>
            <h3>More Information</h3>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            </div>
        )}
        </div>
    );
}

export default Users;

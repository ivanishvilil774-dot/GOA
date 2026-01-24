import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate  = useNavigate()
    return (  
        <>
            <h1>Profile page</h1>
            <button onClick={() => navigate("/")}>GO to Home </button>
        </>
    );
}

export default Profile;
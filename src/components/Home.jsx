// src/components/Home.js
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Home() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch(logout());
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error logging out: ", error);
            });
    };

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-8">Welcome, {user.email}</h1>
            <button
                onClick={handleLogout}
                className="mt-8 bg-black text-white py-3 px-6 text-lg font-semibold rounded-[5px] cursor-pointer"
            >
                Log Out
            </button>
        </div>
    );
}

export default Home;

// src/App.js
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { login, logout, isAuthReadyChanges } from "./features/userSlice";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
    const dispatch = useDispatch();
    const isAuthReady = useSelector((state) => state.user.isAuthReady);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const loginUser = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                };
                dispatch(login(loginUser));
            } else {
                dispatch(logout());
            }
            dispatch(isAuthReadyChanges());
        });

        return () => unsubscribe();
    }, [dispatch]);

    if (!isAuthReady) return <div>Loading...</div>;

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;

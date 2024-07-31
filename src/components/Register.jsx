// src/components/Register.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const loginUser = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                };
                dispatch(login(loginUser));
                navigate("/");
            })
            .catch((error) => {
                console.error("Error registering: ", error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const loginUser = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                };
                dispatch(login(loginUser));
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing in with Google: ", error);
            });
    };

    return (
        <div className="bg-black w-full h-screen flex justify-center items-center">
            <form
                className="bg-white/10 w-[400px] h-[520px] rounded-[10px] backdrop-blur-lg border border-white/10 shadow-lg p-[50px] px-[35px]"
                onSubmit={handleSubmit}
            >
                <h3 className="text-2xl font-medium leading-[42px] text-center text-white">
                    Register Here
                </h3>

                <label
                    htmlFor="email"
                    className="block mt-8 text-lg font-medium text-white"
                >
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="block h-[50px] w-full bg-white/20 rounded-[3px] p-2 mt-2 text-base font-light text-white placeholder:text-[#e5e5e5]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label
                    htmlFor="password"
                    className="block mt-8 text-lg font-medium text-white"
                >
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="block h-[50px] w-full bg-white/20 rounded-[3px] p-2 mt-2 text-base font-light text-white placeholder:text-[#e5e5e5]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="mt-8 w-full bg-white text-black py-3 text-lg font-semibold rounded-[5px] cursor-pointer"
                >
                    Register
                </button>
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="mt-4 w-full bg-blue-500 text-white py-3 text-lg font-semibold rounded-[5px] cursor-pointer"
                >
                    Register with Google
                </button>
            </form>
        </div>
    );
}

export default Register;

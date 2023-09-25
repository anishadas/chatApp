import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app, auth, db } from "../Firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        displayName: "",
        email: "",
        password: "",
        profile: "",
    });

    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Create a root reference
    const storage = getStorage();

    const handleChange = (e) => {
        // console.log(e.target.files[0])
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        console.log(user)
        try {
            const res = await createUserWithEmailAndPassword(auth, user.email, user.password)
            const storageRef = ref(storage, user.displayName);
            console.log("hello")
            await uploadBytesResumable(storageRef, user.profile).then(() => {

                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        console.log("hi")
                        await updateProfile(res.user, {
                            displayName: user.displayName,
                            photoURL: downloadURL
                        })
                        // Add a new document in collection "cities"
                        console.log("bye", res)
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName: user.displayName,
                            email: user.email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                       
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            })

        }

        catch (err) {
            setErr(true)
            console.log(err)
        }
        setLoading(false)
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <span className="app-logo">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3481/3481038.png"
                        alt="logo"
                    />
                </span>
                <span className="app-title">Chat App</span>
            </div>
            <div className="form-wrapper">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="UserName"
                        value={user.uname}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        value={user.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setUser({ ...user, profile: e.target.files[0] })}
                    />
                    <label htmlFor="file" className="file">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/4170/4170295.png"
                            alt="file"
                        />
                        <span>Add your avatar</span>
                    </label>
                    <button
                        className="register btn"
                        type="submit"

                    >Register</button>
                    {err && <span>Something went wrong</span>}
                </form>
            </div>
            <p>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
};

export default Register;

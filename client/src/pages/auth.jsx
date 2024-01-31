import { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
    return (
        <div className="auth flex ">
            <Login />
            <Register />
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [_, setCookies] = useCookies(["access_token"])

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", { username, password });

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/")

        } catch (err) {
            console.error(err);
        }
    };

    return <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
    />;
};

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", { username, password });
            alert("Registration Completed ! Now Login.");
        } catch (err) {
            console.error(err)
        };
    };
    return <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="Register" onSubmit={onSubmit} />;
};


const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 mt-11 md:mt-20 w-full p-4">

    <div className="w-full max-w-md relative bg-white shadow-2xl rounded-2xl">

        <div className="p-8 md:p-14">

            <form onSubmit={onSubmit}>

                <div className="py-4">
                    <h2 className="mb-2 text-lg md:text-xl">{label}</h2>
                    <label htmlFor="username" className="mb-2 text-md">Username:</label>
                    <input className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="py-4">
                    <label htmlFor="password" className="mb-2 text-md">Password</label>
                    <input className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button
                    className="w-full bg-orange-500 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300" type="submit">{label}</button>
            </form>

        </div>
    </div>
</div>



    )
};
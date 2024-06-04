import { useRef } from "react";
import "./LoginWithLocalStorage.css";
import Home from "./Home.jsx"
export default function LoginWithLocalStorage() {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = () => {
        if (email.current.value == "abc@gmail.com" && password.current.value == "12345") {
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "12345")
        }
    }

    return (
        <div>
            {
                getEmail && getPassword ?
                    <Home /> :
                    <form onSubmit={handleSubmit}>
                        <div className="bg">
                            <div className="all">
                                <div>
                                    <input type="text" ref={email} />
                                </div>
                                <div>
                                    <input type="password" ref={password} />
                                </div>
                                <button>Login</button>
                            </div>
                        </div>

                    </form>
            }
        </div>
    );
}
import { useState } from 'react';
import { useAuthContext } from '../context/auth_context';


const signupUse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { setCurrentUser } = useAuthContext();

    const signup = async ({ username, email, gender, password, confirmpassword }) => {
        const isValid = handleErrors({ username, email, gender, password, confirmpassword });
        if (!isValid) return;

        setIsLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username, email, gender, password, confirmpassword })
            })
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("current-chat-user", JSON.stringify(data));
			setCurrentUser(data);

        } catch (error) {
            setErrorMessage("Signup failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    function handleErrors({ username, email, gender, password, confirmpassword }) {
        if (!username || !email || !gender || !password || !confirmpassword) {
            setErrorMessage("Please fill all fields");
            return false;
        }

        if (password !== confirmpassword) {
            setErrorMessage("Passwords do not match");
            return false;
        }

        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long");
            return false;
        }

        setErrorMessage('');
        return true;
    }

    return { isLoading, signup, errorMessage };
};

export default signupUse;
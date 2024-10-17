import { useState } from 'react';
import { useAuthContext } from '../context/auth_context';

const logoutUse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setCurrentUser } = useAuthContext();
    
    const logout = async () => {
        setIsLoading(true);
        try {
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: { "Content-type": "application/json" },
        })
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        localStorage.removeItem("current-chat-user", JSON.stringify(data));
        setCurrentUser(null);

    } catch (error) {
        console.error("Error during logout:", error.message);
    } finally {
        setIsLoading(false);
    }
};
  return { isLoading, logout };
};

export default logoutUse;
import { useState } from "react";
import toast from "react-hot-toast";
import { use_context } from "../context/usercontext.jsx";

const loginUse = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { setcurrentUser } = use_context();
	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;
		setIsLoading(true);

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});
            
			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("currentUser", JSON.stringify(data));
			setcurrentUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, login };
};
export default loginUse;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
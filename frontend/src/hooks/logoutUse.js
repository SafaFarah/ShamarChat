import { useState } from "react";
import { use_context } from "../context/usercontext.jsx";
import toast from "react-hot-toast";

const useLogout = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { setcurrentUser } = use_context();

	const logout = async () => {
		setIsLoading(true);
		try {
			const res = await fetch("/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.removeItem("currentUser");
			setcurrentUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, logout };
};
export default useLogout;

import { createContext, useContext, useState } from "react";

export const auth_context = createContext();

export const use_context = () => {
	return useContext(auth_context);
};
 
export const AuthContextProvider = ({ children }) => {
	const [ currentUser, setcurrentUser ] = useState(JSON.parse(localStorage.getItem("currentUser")) || null);

	return <auth_context.Provider value={{ currentUser, setcurrentUser }}>{children}</auth_context.Provider>;
};
import { createContext, useContext, useState } from "react";

export const context = createContext();

export const useAuthContext = () => {
    return useContext(context);
};

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("current-chat-user")) || null);

    return (
        <context.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </context.Provider>
    );
};

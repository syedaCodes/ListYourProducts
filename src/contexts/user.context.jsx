import { createContext, useEffect, useState } from "react";
import {
    createDocumentFromAuth,
    onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) {
                createDocumentFromAuth(user); //if not null then we want to create the doc
            }
            setCurrentUser(user); //here user could be null or an object
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

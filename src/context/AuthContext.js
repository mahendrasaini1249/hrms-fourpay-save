"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        try {

            const savedUser =
                localStorage.getItem("user");

            const savedToken =
                localStorage.getItem("token");

            if (savedUser && savedToken) {

                setUser(JSON.parse(savedUser));
                setToken(savedToken);

            } else {

                localStorage.removeItem("user");
                localStorage.removeItem("token");

            }

        } catch (error) {

            console.log(
                "Auth restore error:",
                error
            );

            localStorage.removeItem("user");
            localStorage.removeItem("token");

            setUser(null);
            setToken(null);

        } finally {

            setLoading(false);

        }

    }, []);

    const login = (userData, authToken) => {

        if (!userData || !authToken) {
            return;
        }

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        localStorage.setItem(
            "token",
            authToken
        );

        setUser(userData);
        setToken(authToken);
    };

    const logout = () => {

        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {

    return useContext(AuthContext);

};
import React, { useState, createContext } from 'react';

export const UserContext = createContext("");


export default ({ children }) => {

    const [user, setUser] = useState();
    const [currentLang, setCurrentLang] = useState();
    const [message, setMessage] = useState("Welcome Back!");

    return <UserContext.Provider value={{ user, setUser, currentLang, setCurrentLang, message, setMessage }}>{children}</UserContext.Provider>
}
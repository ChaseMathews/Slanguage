import React, { useState, createContext } from 'react';

export const UserContext = createContext("");


export default ({ children }) => {
    const [user, setUser] = useState();
    const [currentLang, setCurrentLang] = useState();

    return <UserContext.Provider value={{ user, setUser, currentLang, setCurrentLang }}>{children}</UserContext.Provider>
}
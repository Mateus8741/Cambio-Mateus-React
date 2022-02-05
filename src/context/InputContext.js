import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputValue = ({ children }) => {
    const [value, setValue] = useState(0);
        
    return (
        <InputContext.Provider value={{ value, setValue }}>
            {children}
        </InputContext.Provider>
    )
}
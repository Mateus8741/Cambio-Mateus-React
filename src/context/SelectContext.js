import React, { createContext, useState } from 'react';

export const SelectContext = createContext();

export const SelectResult = ({ children }) => {
    const [coin, setCoin] = useState('');
    const [coin2, setCoin2] = useState('');
        
    return (
        <SelectContext.Provider value={{ coin, setCoin, coin2, setCoin2 }}>
            {children}
        </SelectContext.Provider>
    )
}
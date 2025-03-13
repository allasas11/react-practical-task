import React, { ReactNode } from 'react';
import { CustomersPageContextProvider } from './CustomersPageContextProvider';

interface RootContextProviderProps {
    children: ReactNode;
}

const RootContextProvider: React.FC<RootContextProviderProps> = ({ children }) => {
    return (
        <CustomersPageContextProvider>
            {children}
        </CustomersPageContextProvider>
    );
};

export default RootContextProvider;

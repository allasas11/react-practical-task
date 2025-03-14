import React, { ReactNode } from 'react';
import { CustomersPageContextProvider } from './CustomersPageContextProvider';
import { CategoriesPageContextProvider } from './CategoriesPageContextProvider';

interface RootContextProviderProps {
    children: ReactNode;
}

const RootContextProvider: React.FC<RootContextProviderProps> = ({ children }) => {
    return (
        <CustomersPageContextProvider>
            <CategoriesPageContextProvider>
                {children}
            </CategoriesPageContextProvider>
        </CustomersPageContextProvider>
    );
};

export default RootContextProvider;

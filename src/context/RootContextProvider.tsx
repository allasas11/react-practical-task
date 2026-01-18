import React, { ReactNode } from 'react';
import { CustomersPageContextProvider } from './CustomersPageContextProvider';
import { CategoriesPageContextProvider } from './CategoriesPageContextProvider';
import { LocationsPageContextProvider } from './LocationsPageContextProvider';

interface RootContextProviderProps {
    children: ReactNode;
}

const RootContextProvider: React.FC<RootContextProviderProps> = ({ children }) => {
    return (
        <CustomersPageContextProvider>
            <CategoriesPageContextProvider>
                <LocationsPageContextProvider>
                    {children}
                </LocationsPageContextProvider>
            </CategoriesPageContextProvider>
        </CustomersPageContextProvider>
    );
};

export default RootContextProvider;

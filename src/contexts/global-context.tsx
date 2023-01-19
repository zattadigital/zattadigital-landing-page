import { createContext, ReactNode, useState } from "react";

// type TypeGlobalContext = {
//     isLoadind?: boolean;
//     setIsLoding?: () => {}
// };

// type TypeProps = {
// };

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [isLoadind, setIsLoding] = useState(false);

    return (
        <GlobalContext.Provider value={{ isLoadind, setIsLoding }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export default AuthProvider;

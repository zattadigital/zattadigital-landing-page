import { createContext, ReactNode, useState } from "react";
import { JsxElement } from "typescript";

// type TypeGlobalContext = {
//     isLoadind?: boolean;
//     setIsLoding?: () => {}
// };

type TypeProps = {
    children: ReactNode
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }:TypeProps) => {
    const [isLoadind, setIsLoding] = useState(false);

    return (
        <GlobalContext.Provider value={{ isLoadind, setIsLoding }}>
            {children}
        </GlobalContext.Provider>
    );
};

// export default AuthProvider;

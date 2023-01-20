import { useContext } from "react";
import { GlobalContext } from "../../contexts/global-context";

const Loader = () => {
    // const { isLoadind = false } = useContext(GlobalContext);
    const isLoading = false;

    return (
        <div id="preloader" className={!isLoading ? "preload-hide" : ""}>
            <div className="appmeet-load"></div>
        </div>
    );
};

export default Loader;

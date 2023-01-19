import { useContext } from "react";
import { GlobalContext } from "../../contexts/global-context";

const Loader = () => {
    const { isLoadind = false } = useContext(GlobalContext);

    return (
        <div id="preloader" className={!isLoadind ? "preload-hide" : ""}>
            <div className="appmeet-load"></div>
        </div>
    );
};

export default Loader;

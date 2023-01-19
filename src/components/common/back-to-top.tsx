import { useWindowScroll } from "react-use";

const BackToTop = () => {
    const { x, y } = useWindowScroll();

    return (
        <>
            {y > 800 && (
                <a href="#" className="scroll-top" style={{ display: "flex" }}>
                    <i className="lni lni-chevron-up"></i>
                </a>
            )}
        </>
    );
};

export default BackToTop;

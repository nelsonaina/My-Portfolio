import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        if (!hash) return;
        const id = hash.slice(1);
        if (!id) return;

        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToHash;

import React, { useEffect, useState } from "react";
import styles from "./styles.css";

const setLabelIfMissing = (element, label) => {
    if (!element || element.getAttribute("aria-label")) return;

    element.setAttribute("aria-label", label);
};

const updateMinicartDrawerAccessibility = () => {
    const drawers = Array.from(document.querySelectorAll(".vtex-minicart-2-x-drawer"));

    drawers.forEach((drawer) => {
        const isHidden = drawer.getAttribute("aria-hidden") === "true";
        const focusableItems = drawer.querySelectorAll("a, button, input, select, textarea, [tabindex]");

        if (isHidden) {
            drawer.setAttribute("inert", "");

            focusableItems.forEach((item) => {
                if (!item.hasAttribute("data-previous-tabindex")) {
                    item.setAttribute("data-previous-tabindex", item.getAttribute("tabindex") || "");
                }

                item.setAttribute("tabindex", "-1");
            });

            return;
        }

        drawer.removeAttribute("inert");

        focusableItems.forEach((item) => {
            const previousTabIndex = item.getAttribute("data-previous-tabindex");

            if (previousTabIndex === null) return;

            if (previousTabIndex) {
                item.setAttribute("tabindex", previousTabIndex);
            } else {
                item.removeAttribute("tabindex");
            }

            item.removeAttribute("data-previous-tabindex");
        });
    });
};

const applyHeaderAccessibility = () => {
    setLabelIfMissing(
        document.querySelector(".centerlar-store-theme-2-x-openSearch"),
        "Abrir busca"
    );
    setLabelIfMissing(
        document.querySelector(".centerlar-store-theme-2-x-closeSearch"),
        "Fechar busca"
    );

    document
        .querySelectorAll(".vtex-login-2-x-container .vtex-button")
        .forEach((button) => setLabelIfMissing(button, "Entrar na minha conta"));

    document
        .querySelectorAll(".vtex-minicart-2-x-openIconContainer")
        .forEach((container) => {
            container.removeAttribute("aria-hidden");

            const button = container.querySelector("button");
            setLabelIfMissing(button, "Abrir carrinho");
        });

    document
        .querySelectorAll(".vtex-minicart-2-x-closeIconButton")
        .forEach((button) => setLabelIfMissing(button, "Fechar carrinho"));

    document
        .querySelectorAll(".vtex-flex-layout-0-x-flexRow--telemarketing-debug[aria-label]")
        .forEach((row) => row.removeAttribute("aria-label"));

    updateMinicartDrawerAccessibility();
};

function CustomMobileHeaderSearch({ children }) {
    const ANIMATION_MS = 400;
    const [searchChild, minicartChild] = React.Children.toArray(children);
    const [showSearch, setShowSearch] = useState(false);
    const [renderSearch, setRenderSearch] = useState(false);

    const openSearch = () => {
        setRenderSearch(true);
        requestAnimationFrame(() => {
            setShowSearch(true);
        });
    };

    const closeSearch = () => {
        setShowSearch(false);
    };

    useEffect(() => {
        if (showSearch) return;
        if (!renderSearch) return;

        const timer = setTimeout(() => {
            setRenderSearch(false);
        }, ANIMATION_MS);

        return () => clearTimeout(timer);
    }, [showSearch, renderSearch]);

    useEffect(() => {
        const containerHeader = document.querySelector(".vtex-flex-layout-0-x-flexRowContent--header-container");
        const logo = document.querySelector(".vtex-flex-layout-0-x-flexRowContent--header-container .vtex-flex-layout-0-x-flexCol--logo-mobile-content");
        const itemsContainerHeader = document.querySelector(".vtex-flex-layout-0-x-flexRowContent--header-container .pr0.items-stretch:nth-child(3)");
        if (!containerHeader || !logo || !itemsContainerHeader) return;

        if(renderSearch) {
            logo.style.display = "none";
            itemsContainerHeader.style.flex = "1";
            containerHeader.style.justifyContent = "flex-start";
        } else {
            logo.style.display = "flex";
            itemsContainerHeader.style.flex = "none";
            containerHeader.style.justifyContent = "space-between";
        }
    }, [renderSearch])

    useEffect(() => {
        const timeoutIds = [0, 250, 1000].map((delay) =>
            window.setTimeout(applyHeaderAccessibility, delay)
        );

        const observer = new MutationObserver(applyHeaderAccessibility);
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["aria-hidden", "class"],
        });

        return () => {
            timeoutIds.forEach((id) => window.clearTimeout(id));
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <button
                type="button"
                onClick={openSearch}
                className={`${styles.openSearch} ${renderSearch && styles.hidden}`}
                aria-label="Abrir busca"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#FF0066"/>
                </svg>
            </button>

            <div className={`${styles.boxSearch} ${renderSearch && styles.mounted} ${showSearch && styles.show}`}>
                {renderSearch ? searchChild : null}
                {minicartChild}
            </div>

            <button
                type="button"
                onClick={closeSearch}
                className={`${styles.closeSearch} ${renderSearch && styles.show}`}
                aria-label="Fechar busca"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#1C1B1F"/>
                </svg>
            </button>
        </>

    )
}

export default CustomMobileHeaderSearch;

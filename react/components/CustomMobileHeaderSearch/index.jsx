import React, { useEffect, useState } from "react";
import styles from "./styles.css";

function CustomMobileHeaderSearch({ children }) {
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const containerHeader = document.querySelector(".vtex-flex-layout-0-x-flexRowContent--header-container");
        const logo = document.querySelector(".vtex-flex-layout-0-x-flexRowContent--header-container .vtex-flex-layout-0-x-flexCol--logo-mobile-content");
        const itemsContainerHeader = document.querySelector(".vtex-flex-layout-0-x-flexRowContent--header-container .pr0.items-stretch:nth-child(3)");

        if(showSearch) {
            logo.style.display = "none";
            itemsContainerHeader.style.flex = "1";
            containerHeader.style.justifyContent = "flex-start";
        } else {
            logo.style.display = "flex";
            itemsContainerHeader.style.flex = "none";
            containerHeader.style.justifyContent = "space-between";
        }
    }, [showSearch])

    return (
        <>
            <button onClick={() => setShowSearch(!showSearch)} className={`${styles.openSearch} ${showSearch && styles.hidden}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#FF0066"/>
                </svg>
            </button>

            <div className={`${styles.boxSearch} ${showSearch && styles.show}`}>
                { children }
            </div>

            <button onClick={() => setShowSearch(!showSearch)} className={`${styles.closeSearch} ${showSearch && styles.show}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#1C1B1F"/>
                </svg>
            </button>
        </>

    )
}

export default CustomMobileHeaderSearch;
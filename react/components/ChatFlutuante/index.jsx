import { useEffect } from "react";

import styles from './chat-flutuante.css';

const ChatFlutuante = () => {
    useEffect(() => {
        if (window.HiBot !== undefined) return;

        const script = document.createElement("script");
        script.src = "https://go.botmaker.com/rest/webchat/p/4B320G4AM4/init.js";
        script.async = true;
        script.id = "dtbot-script";

        document.body.appendChild(script);

        script.onload = () => {
            setTimeout(() => {
                const botElement = document.querySelector(".dt-BOTfloater");
                if (botElement) {
                    botElement.style.bottom = "30px";
                    botElement.style.zIndex = "99";
                }
            }, 1000);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default ChatFlutuante;
